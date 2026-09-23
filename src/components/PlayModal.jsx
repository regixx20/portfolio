import { useEffect, useRef } from "react";
import { X } from "lucide-react";

import PongGame from "./PongGame";

// Native <dialog>: focus trap, Escape to close and backdrop come for free.
export default function PlayModal({ open, onClose, title }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    if (!open && dialog.open) dialog.close();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="play-modal"
      aria-label={title}
      onClose={onClose}
      onClick={(e) => {
        // Click on the backdrop (outside the panel) closes the modal
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="play-modal__panel">
        <div className="play-modal__header">
          <p className="featured__overline">Démo jouable</p>
          <button
            type="button"
            className="play-modal__close"
            onClick={onClose}
            aria-label="Fermer le jeu"
          >
            <X size={22} />
          </button>
        </div>
        {open && <PongGame />}
      </div>
    </dialog>
  );
}
