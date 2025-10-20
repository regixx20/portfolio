export const projects = [
  {
    id: "Huddle",
    name: "Huddle",
    tech: ["Java", "Spring Boot", "React", "JavaScript"],
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
    liveUrl: "/pong2d.jar", // Remplacer par l'URL du déploiement réel
    repoUrl: "https://github.com/regixx20/game_engine",
    demoVideo: "https://www.youtube.com/embed/ItfNtm1g0Yg",
  },
  {
    id: "RAG-Chatbot",
    name: "RAG Chatbot",
    tech: ["Python", "LangGraph", "OpenAI", "React", "JavaScript"],
    simpleDescription: "Chatbot intelligent basé sur la technologie RAG (Retrieval-Augmented Generation), capable de répondre à des questions en s’appuyant sur des documents qu'on lui fournit.",
    description:
      "RAG Chatbot est une application web propulsée par un backend LangGraph et un front React, conçue pour offrir une expérience de conversation intelligente et contextuelle. Grâce à son architecture RAG (Retrieval-Augmented Generation), le chatbot comprend les questions de l’utilisateur et puise les réponses directement dans les documents qui lui ont été fournis (textes légaux, FAQ, guides techniques, etc.). Ce projet peut être utilisé dans plusieurs contextes : " +
      "Assistant RH ou juridique : aide les employés à comprendre les politiques internes, contrats ou lois applicables.\n" +
      "Support client : répond automatiquement aux questions fréquentes à partir de la documentation produit ou de la base de connaissances.\n" +
      "Assistant technique interne : permet aux ingénieurs ou développeurs de retrouver rapidement des informations dans la documentation technique ou les rapports d’erreur." +
      "Le front React offre une interface de chat fluide et moderne, affichant les réponses du modèle ainsi que les sources documentaires utilisées." +
      "Les utilisateurs peuvent interagir en langage naturel, consulter les documents cités et, selon la configuration, uploader de nouveaux fichiers pour enrichir la base de connaissances." +
      "Ce projet démontre comment combiner LLM + RAG + React pour créer un outil conversationnel utile, adaptable à différents contextes professionnels.",
    liveUrl: "https://github.com/regixx20",
    repoUrl: "https://github.com/regixx20",
    demoVideo: "",
  },
  {
    id : "Lexiquiz",
    name: "Lexiquiz",
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
