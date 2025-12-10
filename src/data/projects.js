import pong2dDemo from "../assets/videos/demo_pong2d_mount.mp4";
import rag_chatbot_demo from "../assets/videos/rag_chatbot_demo.mp4";
import pong2dImage from "../assets/videos/pong2d.png";
import image_rag_chatbot from "../assets/videos/image_rag_chatbot.png";
export const projects = [
  {
    id: "Huddle",
    name: "Huddle",
    // status: "updating",
    // statusLabel: "Mise à jour à venir",
    tech: ["Java", "Spring Boot", "Hibernate", "AngularJS", "React"],
    simpleDescription: "Huddle est une application web de prise de rendez-vous collaborative, qui permet à plusieurs utilisateurs de proposer et choisir des créneaux communs pour organiser facilement des réunions ou événements.",
    description:
      "Huddle est une plateforme moderne de planification de rendez-vous, conçue pour simplifier la coordination entre plusieurs participants. Inspirée de Doodle, elle permet aux utilisateurs de : " +
      "Créer des sondages de disponibilités en quelques clics" +
      "Inviter des participants à voter pour leurs créneaux préférés" +
      "Identifier automatiquement le meilleur moment pour une réunion." +
      "Le backend, développé en Java Spring Boot, gère la logique métier, la gestion des utilisateurs et la persistance des données. " +
      "Le frontend, construit avec React, offre une interface fluide et réactive permettant une expérience utilisateur claire et rapide." +
      "Huddle se distingue par son design intuitif, sa réactivité et sa capacité à faciliter la planification de réunions en équipe, de rendez-vous professionnels ou d’événements personnels.",
    liveUrl: "https://github.com/regixx20",
    repoUrl: "https://github.com/regixx20",
    demoVideo: "https://www.youtube.com/embed/ajZbSm98W1k",
  },
  {

    id: "pong2d",
    name: "Jeu Pong 2D",
    tech: ["Java", "Swing"],
    image: "pong2d.png",
    simpleDescription: 
      "Pong 2D est un jeu développé en Java reposant sur une architecture modulaire " +
      "composée de plusieurs moteurs : graphique, physique et sonore.",
    description:
      "Pong 2D est un jeu développé en Java reposant sur une architecture modulaire " +
      "composée de plusieurs moteurs : graphique, physique et sonore." +
      " Le moteur graphique gère l’affichage et les animations, le moteur physique contrôle les déplacements et" +
      " collisions, tandis que le kernel synchronise l’ensemble pour garantir un gameplay fluide et cohérent.\n" +
      "Pour jouer au jeu, télécharger le .jar ci-dessous et lancer la commande : java -jar pong2d.jar" +
      " Et vous pouvez jouer avec les touches Z/S pour le joueur de gauche et les flèches Haut/Bas pour le joueur de droite.",
    liveUrl: "/pong2d.jar", 
    repoUrl: "https://github.com/regixx20/game_engine",
    demoVideo: pong2dDemo,
    demoImage: pong2dImage,
  },
  {
    id: "RAG-Chatbot",
    name: "RAG Chatbot",
    image: image_rag_chatbot,
    // status: "updating",
    // statusLabel: "Mise à jour à venir",
    tech: ["Python", "LangChain", "OpenAI", "React", "JavaScript"],
    simpleDescription: "Chatbot intelligent basé sur la technologie RAG (Retrieval-Augmented Generation), capable de répondre à des questions en s’appuyant sur des documents qu'on lui fournit.",
    description:
      "RAG Chatbot est une application full-stack combinant un backend Django + LangChain et un frontend React/Vite. Elle offre une expérience conversationnelle intelligente capable d’exploiter vos documents internes grâce à une architecture RAG (Retrieval-Augmented Generation)." +
      "Le chatbot répond en s’appuyant soit sur une base documentaire indexée, soit directement via le modèle de langage en mode standard.",
    liveUrl: "https://rag-chatbot-regixs-projects-754b2662.vercel.app/",
    repoUrl: "https://github.com/regixx20/rag_chatbot",
    demoVideo: rag_chatbot_demo,
    demoImage: image_rag_chatbot,
  },
  {
    id : "Lexiquiz",
    name: "Lexiquiz",
    status: "updating",
    statusLabel: "Mise à jour à venir",
    tech: ["NodeJs", "Express", "React", "JavaScript","IA", "OpenAI", "MongoDB"],
    simpleDescription: "Lexiquiz est une application web de quiz qui permet aux utilisateurs d'apprendre et de pratiquer des langues étrangères grâce à l'IA.",
    description: "Lexiquiz est une application web pédagogique conçue pour aider les utilisateurs à apprendre et pratiquer des langues étrangères. Le site propose" +
    "des flashcards générées par l’IA ainsi que des quiz, notamment des questionnaires à choix multiples (QCM), afin de renforcer l’apprentissage du vocabulaire." +
    "Le projet exploite l’API d’OpenAI pour générer le contenu linguistique, et s’appuie sur une architecture client-serveur : une interface React côté client et un" +
    "backend Node/Express connecté à une base de données MongoDB. L’objectif principal est d’offrir une plateforme interactive de révision linguistique permettant aux" +
    "apprenants d’améliorer leur vocabulaire et leurs compétences linguistiques au moyen d’outils automatisés et personnalisables. Grâce aux flashcards dynamiques et aux quiz," +
    "Lexiquiz favorise une progression continue et ludique dans l’étude des langues.",
    liveUrl: "https://regixx20.github.io/lexiquiz/",
    repoUrl: "https://github.com/regixx20/lexiquiz",
  }
];
