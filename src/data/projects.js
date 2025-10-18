export const projects = [
  {
    id: "pong2d",
    name: "Jeu Pong 2D",
    tech: ["Java", "Swing"],
    image: "pong2d.png",
    description:
      "Pong 2D est un jeu développé en Java reposant sur une architecture modulaire " +
      "composée de plusieurs moteurs : graphique, physique et sonore." +
      " Le moteur graphique gère l’affichage et les animations, le moteur physique contrôle les déplacements et" +
      " collisions, tandis que le kernel synchronise l’ensemble pour garantir un gameplay fluide et cohérent.\n" +
      "Pour jouer au jeu, télécharger le .jar ci-dessous et lancer la commande : java -jar pong2d.jar" +
      " Et vous pouvez jouer avec les touches Z/S pour le joueur de gauche et les flèches Haut/Bas pour le joueur de droite.",
    liveUrl: "/pong2d.jar", // Remplacer par l'URL du déploiement réel
    repoUrl: "https://github.com/regixx20/game_engine",
    demoVideo: "https://www.youtube.com/embed/ItfNtm1g0Yg",
  },
  {
    id: "RAG-Chatbot",
    name: "RAG Chatbot",
    tech: ["Python", "LangGraph", "OpenAI", "React", "JavaScript"],
    description:
      "Application collaborative de prise de rendez-vous avec notifications temps réel.",
    liveUrl: "https://github.com/regixx20",
    repoUrl: "https://github.com/regixx20",
    demoVideo: "https://www.youtube.com/embed/6v2L2UGZJAM",
  },
  {
    id: "Huddle",
    name: "Huddle",
    tech: ["Java", "Spring Boot", "React", "JavaScript"],
    description:
      "Assistant IA qui résume des logs complexes et propose des pistes d'investigation.",
    liveUrl: "https://github.com/regixx20",
    repoUrl: "https://github.com/regixx20",
    demoVideo: "https://www.youtube.com/embed/ajZbSm98W1k",
  },
];
