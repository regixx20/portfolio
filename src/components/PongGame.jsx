import { useEffect, useRef, useState } from "react";

// Logical canvas size: the canvas is scaled with CSS, the game always
// computes in this coordinate space.
const W = 800;
const H = 500;
const PADDLE_W = 12;
const PADDLE_H = 80;
const PADDLE_MARGIN = 24;
const PADDLE_SPEED = 420; // px/s
const BALL_SIZE = 12;
const BALL_START_SPEED = 360;
const BALL_MAX_SPEED = 900;
const BALL_ACCEL = 1.06;
const MAX_BOUNCE_ANGLE = Math.PI / 3.2;
const AI_SPEED = 300;
const WIN_SCORE = 5;

const KEYS_LEFT_UP = ["z", "w"];
const KEYS_LEFT_DOWN = ["s"];
const KEYS_RIGHT_UP = ["arrowup"];
const KEYS_RIGHT_DOWN = ["arrowdown"];
const BLOCKED_KEYS = ["arrowup", "arrowdown", " "];

function readTheme() {
  const css = getComputedStyle(document.documentElement);
  const v = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
  return {
    bg: v("--light-navy", "#112240"),
    line: v("--lightest-navy", "#233554"),
    paddle: v("--lightest-slate", "#ccd6f6"),
    ball: v("--green", "#64ffda"),
    text: v("--slate", "#8892b0"),
    accent: v("--green", "#64ffda"),
    mono: v("--font-mono", "monospace"),
  };
}

function createState() {
  return {
    left: { y: H / 2 - PADDLE_H / 2, score: 0 },
    right: { y: H / 2 - PADDLE_H / 2, score: 0 },
    ball: { x: W / 2, y: H / 2, vx: 0, vy: 0 },
    serveTimer: 0.8,
    serveDir: Math.random() < 0.5 ? -1 : 1,
    winner: null,
  };
}

function serve(ball, dir) {
  const angle = (Math.random() - 0.5) * (Math.PI / 3);
  ball.x = W / 2;
  ball.y = H / 2;
  ball.vx = Math.cos(angle) * BALL_START_SPEED * dir;
  ball.vy = Math.sin(angle) * BALL_START_SPEED;
}

const clampPaddle = (y) => Math.max(0, Math.min(H - PADDLE_H, y));

export default function PongGame() {
  const canvasRef = useRef(null);
  const stateRef = useRef(createState());
  const keysRef = useRef(new Set());
  const touchRef = useRef({ left: null, right: null });
  const [mode, setMode] = useState(null); // null = menu, "solo" | "duo"
  const [paused, setPaused] = useState(false);
  const [winner, setWinner] = useState(null);

  const start = (m) => {
    stateRef.current = createState();
    setWinner(null);
    setPaused(false);
    setMode(m);
    canvasRef.current?.focus();
  };

  // Keyboard
  useEffect(() => {
    const down = (e) => {
      const k = e.key.toLowerCase();
      if (BLOCKED_KEYS.includes(k)) e.preventDefault();
      if (k === " " || k === "p") {
        if (mode && !winner) setPaused((p) => !p);
        return;
      }
      keysRef.current.add(k);
    };
    const up = (e) => keysRef.current.delete(e.key.toLowerCase());
    const blur = () => keysRef.current.clear();
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, [mode, winner]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const theme = readTheme();

    let raf;
    let last = performance.now();

    const pressed = (list) => list.some((k) => keysRef.current.has(k));

    const update = (dt) => {
      const s = stateRef.current;
      const { left, right, ball } = s;
      const touch = touchRef.current;

      // Left paddle: Z/S (or arrows too in solo mode), or touch
      let dirL = 0;
      if (pressed(KEYS_LEFT_UP) || (mode === "solo" && pressed(KEYS_RIGHT_UP))) dirL -= 1;
      if (pressed(KEYS_LEFT_DOWN) || (mode === "solo" && pressed(KEYS_RIGHT_DOWN))) dirL += 1;
      if (touch.left != null) left.y += (touch.left - PADDLE_H / 2 - left.y) * Math.min(1, dt * 18);
      else left.y += dirL * PADDLE_SPEED * dt;
      left.y = clampPaddle(left.y);

      // Right paddle: arrows / touch in duo, AI in solo
      if (mode === "duo") {
        let dirR = 0;
        if (pressed(KEYS_RIGHT_UP)) dirR -= 1;
        if (pressed(KEYS_RIGHT_DOWN)) dirR += 1;
        if (touch.right != null) right.y += (touch.right - PADDLE_H / 2 - right.y) * Math.min(1, dt * 18);
        else right.y += dirR * PADDLE_SPEED * dt;
      } else {
        // Follows the ball only when it comes towards it, with a capped speed
        const target = ball.vx > 0 ? ball.y - PADDLE_H / 2 : H / 2 - PADDLE_H / 2;
        const diff = target - right.y;
        if (Math.abs(diff) > 6) right.y += Math.sign(diff) * Math.min(Math.abs(diff), AI_SPEED * dt);
      }
      right.y = clampPaddle(right.y);

      if (s.serveTimer > 0) {
        s.serveTimer -= dt;
        if (s.serveTimer <= 0) serve(ball, s.serveDir);
        return;
      }

      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;

      // Top / bottom walls
      if (ball.y < 0) {
        ball.y = 0;
        ball.vy = Math.abs(ball.vy);
      } else if (ball.y + BALL_SIZE > H) {
        ball.y = H - BALL_SIZE;
        ball.vy = -Math.abs(ball.vy);
      }

      // Paddles: bounce angle depends on where the ball hits
      const hit = (paddle, x, dir) => {
        const inX = dir < 0 ? ball.x <= x + PADDLE_W && ball.x >= x - BALL_SIZE : ball.x + BALL_SIZE >= x && ball.x <= x + PADDLE_W;
        const inY = ball.y + BALL_SIZE >= paddle.y && ball.y <= paddle.y + PADDLE_H;
        if (!inX || !inY || Math.sign(ball.vx) !== dir) return;
        const rel = (ball.y + BALL_SIZE / 2 - (paddle.y + PADDLE_H / 2)) / (PADDLE_H / 2);
        const angle = Math.max(-1, Math.min(1, rel)) * MAX_BOUNCE_ANGLE;
        const speed = Math.min(Math.hypot(ball.vx, ball.vy) * BALL_ACCEL, BALL_MAX_SPEED);
        ball.vx = Math.cos(angle) * speed * -dir;
        ball.vy = Math.sin(angle) * speed;
        ball.x = dir < 0 ? x + PADDLE_W : x - BALL_SIZE;
      };
      hit(left, PADDLE_MARGIN, -1);
      hit(right, W - PADDLE_MARGIN - PADDLE_W, 1);

      // Points
      const scored = ball.x + BALL_SIZE < 0 ? right : ball.x > W ? left : null;
      if (scored) {
        scored.score += 1;
        ball.vx = ball.vy = 0;
        ball.x = W / 2;
        ball.y = H / 2;
        s.serveDir = scored === left ? 1 : -1;
        s.serveTimer = 0.8;
        if (scored.score >= WIN_SCORE) {
          s.winner = scored === left ? "left" : "right";
          setWinner(s.winner);
        }
      }
    };

    const draw = () => {
      const { left, right, ball } = stateRef.current;
      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = theme.line;
      for (let y = 10; y < H; y += 30) ctx.fillRect(W / 2 - 1, y, 2, 16);

      ctx.fillStyle = theme.text;
      ctx.font = `500 48px ${theme.mono}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(String(left.score), W / 4, 24);
      ctx.fillText(String(right.score), (W * 3) / 4, 24);

      ctx.fillStyle = theme.paddle;
      ctx.fillRect(PADDLE_MARGIN, left.y, PADDLE_W, PADDLE_H);
      ctx.fillRect(W - PADDLE_MARGIN - PADDLE_W, right.y, PADDLE_W, PADDLE_H);

      if (mode) {
        ctx.fillStyle = theme.ball;
        ctx.fillRect(ball.x, ball.y, BALL_SIZE, BALL_SIZE);
      }
    };

    const frame = (now) => {
      // Clamp dt so a background tab doesn't teleport the ball
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      if (mode && !paused && !stateRef.current.winner) {
        // Sub-steps so a fast ball can't tunnel through a paddle on slow frames
        const steps = Math.ceil(dt / (1 / 120));
        for (let i = 0; i < steps && !stateRef.current.winner; i++) update(dt / steps);
      }
      draw();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [mode, paused]);

  // Touch / mouse drag: each half of the canvas drives its paddle
  const onPointer = (e) => {
    if (!mode || (e.pointerType === "mouse" && e.buttons === 0)) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    const y = ((e.clientY - rect.top) / rect.height) * H;
    const side = mode === "solo" || x < W / 2 ? "left" : "right";
    touchRef.current[side] = y;
  };
  const onPointerUp = () => {
    touchRef.current = { left: null, right: null };
  };

  const winnerLabel =
    winner === "left" ? (mode === "solo" ? "Vous avez gagné !" : "Joueur gauche gagne !")
    : winner === "right" ? (mode === "solo" ? "L'IA a gagné" : "Joueur droit gagne !")
    : null;

  return (
    <div className="pong">
      <div className="pong__stage">
        <canvas
          ref={canvasRef}
          className="pong__canvas"
          tabIndex={0}
          aria-label="Jeu Pong"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            onPointer(e);
          }}
          onPointerMove={onPointer}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        />

        {(!mode || winner || paused) && (
          <div className="pong__overlay">
            {winner && <p className="pong__headline">{winnerLabel}</p>}
            {paused && !winner && <p className="pong__headline">Pause</p>}
            {!mode && <p className="pong__headline">Pong 2D</p>}

            {paused && !winner ? (
              <button type="button" className="small-button" onClick={() => setPaused(false)}>
                Reprendre
              </button>
            ) : (
              <div className="pong__choices">
                <button type="button" className="small-button" onClick={() => start("solo")}>
                  1 joueur (vs IA)
                </button>
                <button type="button" className="small-button" onClick={() => start("duo")}>
                  2 joueurs
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="pong__help">
        {mode === "duo"
          ? "Gauche : Z / S · Droite : ↑ / ↓ · Espace : pause · Tactile : glissez de chaque côté"
          : "Z / S ou ↑ / ↓ · Espace : pause · Tactile : glissez pour bouger · Premier à " + WIN_SCORE + " points"}
      </p>
    </div>
  );
}
