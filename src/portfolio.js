const header = {
  homepage: 'https://sam8314.github.io/portfolio', // Update this to your GitHub Pages URL
  title: 'Samia Serbouti',
}

const about = {
  name: 'Samia Serbouti',
  role: {
    en: 'A Software Engineer from KTH with Backend Focus',
    fr: 'Ingénieure logicielle de KTH spécialisée backend',
  },
  picture: 'https://media.licdn.com/dms/image/v2/D4E03AQH0_5sOvg1wxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694356364808?e=1779321600&v=beta&t=ajJD6Te-rVFMz80bAzEzg_1eVphh77PXT6bdvmwfDcA',
  description: {
    en: `Engineering student at KTH with hands-on experience in PostgreSQL, Python, and full-stack development. Strong foundation in database systems, algorithms, and software engineering. Passionate about sustainable digitalization and data-driven solutions for real-world problems. My coursework includes Databases, Software Engineering, Data Structures, Algorithms, and Computer Networks. I'm actively improving skills in DevOps practices, data analysis, and security fundamentals, with a goal of contributing across the data-infrastructure-security stack.`,
    fr: `Étudiante en ingénierie à KTH avec une expérience pratique en PostgreSQL, Python et développement full-stack. Solide formation en systèmes de bases de données, algorithmique et génie logiciel. Passionnée par la digitalisation durable et les solutions axées sur les données pour des problèmes réels. Mes cours incluent Bases de données, Génie logiciel, Structures de données, Algorithmique et Réseaux informatiques. Je développe activement des compétences en pratiques DevOps, analyse de données et fondamentaux de la sécurité, avec l'objectif de contribuer à la pile données-infrastructure-sécurité.`,
  },
  resume: `${process.env.PUBLIC_URL}/Resume_Serbouti.pdf`, // Local PDF file in public folder
  social: {
    linkedin: 'https://www.linkedin.com/in/samia-serbouti-0595b1229',
    github: 'https://github.com/sam8314',
    email: 'sa.serbouti@protonmail.com',
  },
}

const projects = [
  {
    id: 'housebite',
    name: {
      en: 'HouseBite, Virtual Pantry Manager',
      fr: 'HouseBite, gestionnaire de garde-manger virtuel',
    },
    description: {
      en: 'A progressive web app that turns your household into a shared smart pantry: tracking expiry dates, suggesting recipes to reduce waste, scanning receipts, and managing shared budgets. Built for households to waste less and spend less.',
      fr: 'Une application web progressive qui transforme votre foyer en garde-manger partagé intelligent : suivi des dates de péremption, suggestions de recettes pour réduire le gaspillage, scan des reçus et gestion du budget commun. Conçue pour aider les ménages à gaspiller moins et à dépenser moins.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Mantine UI', 'Spoonacular API', 'Docker', 'OpenAI OCR', 'PWA'],
    sourceCode: '',
    livePreview: 'https://housebite.app/',
    image: '',
    teamSize: 7,
    role: {
      en: 'Product Owner',
      fr: 'Responsable produit',
    },
    year: 2026,
    wip: false,
    detailedDescription: {
      en: `HouseBite is a comprehensive household pantry solution that helps families reduce food waste and manage their budgets effectively. The application features real-time synchronization across household members, intelligent recipe suggestions based on available ingredients, and automated expiry tracking.`,
      fr: `HouseBite est une solution complète de gestion de garde-manger pour la maison, aidant les familles à réduire le gaspillage alimentaire et à gérer leur budget efficacement. L’application propose une synchronisation en temps réel entre les membres du foyer, des suggestions de recettes basées sur les ingrédients disponibles et un suivi automatique des dates de péremption.`,
    },
    features: [
      {
        en: 'Smart pantry inventory with expiry date tracking',
        fr: 'Inventaire intelligent du garde-manger avec suivi des dates de péremption',
      },
      {
        en: 'Recipe suggestions based on available ingredients',
        fr: 'Suggestions de recettes basées sur les ingrédients disponibles',
      },
      {
        en: 'AI receipt scanning for automatic item entry with OpenAi',
        fr: 'Scan de reçus IA pour l’ajout automatique d’articles avec OpenAI',
      },
      {
        en: 'Shared household budgets and expense tracking',
        fr: 'Budgets partagés et suivi des dépenses pour le foyer',
      },
      {
        en: 'Progressive Web App for mobile and desktop',
        fr: 'Application web progressive pour mobile et bureau',
      },
      {
        en: 'Real-time synchronization with Supabase',
        fr: 'Synchronisation en temps réel avec Supabase',
      },
      {
        en: 'Comprehensive account management with Google login or email confirmation',
        fr: 'Gestion complète des comptes avec connexion Google ou confirmation par email',
      },
    ],
    challenges: [],
    images: ['housebite/members.png',
             'housebite/account.png',
             'housebite/budget.png',
             'housebite/pantry.png',
             'housebite/scan.png',
             'housebite/receipts.png',
             'housebite/recipe.png',
             'housebite/shopping list.png'],
    sprints: [
      {
        title: {
          en: 'Sprint 1: Project Foundation',
          fr: 'Sprint 1 : Fondation du projet',
        },
        description: {
          en: 'Core project setup. Core frontend and backend implementation. Share household model that the rest of the app builds on. Households: create, join via invite code, member allocations',
          fr: 'Mise en place du projet. Implémentation du frontend et du backend de base. Modèle de foyer partagé sur lequel repose le reste de l’application. Foyers : création, rejoindre via code d’invitation, affectation des membres',
        },
      },
      {
        title: {
          en: 'Sprint 2: Core Product Experience',
          fr: 'Sprint 2 : Expérience produit principale',
        },
        description: {
          en: 'Focused on delivering the core user-facing features that define the everyday HouseBite experience. Household dashboard with a filterable “expiring soon” view. Recipe suggestions, with support for diets and intolerances. Receipt scanning. Account page with dietary restriction profiles for each member',
          fr: 'Axé sur les fonctionnalités principales pour l’utilisateur qui définissent l’expérience quotidienne de HouseBite. Tableau de bord du foyer avec vue filtrable “périme bientôt”. Suggestions de recettes, support des régimes et intolérances. Scan des reçus. Page de compte avec profils de restrictions alimentaires pour chaque membre',
        },
      },
      {
        title: {
          en: 'Sprint 3: Product Identity & Robustness',
          fr: 'Sprint 3 : Identité produit et robustesse',
        },
        description: {
          en: 'Focused on improving the product identity and refining key household and receipt workflows. Visual identity refresh with a custom logo. Finished shopping list flow and admin roles per household. Email verification, household colours, and receipt export to Excel',
          fr: 'Axé sur l’amélioration de l’identité du produit et le raffinement des flux de travail du foyer et des reçus. Rafraîchissement de l’identité visuelle avec un logo personnalisé. Achèvement du flux de liste de courses et des rôles d’administrateur par foyer. Vérification par email, couleurs de foyer et export de reçus vers Excel',
        },
      },
      {
        title: {
          en: 'Sprint 4: Final tweaks',
          fr: 'Sprint 4 : Ajustements finaux',
        },
        description: {
          en: 'The last sprint built on the stronger product foundation from the first three sprints and focused on the highest-value final improvements.',
          fr: 'Le dernier sprint s’appuyait sur la base produit renforcée des trois premiers sprints et se concentrait sur les améliorations finales à plus forte valeur.',
        },
      },
    ],
  },
  {
    id: 'slso-energy',
    name: {
      en: 'SLSO Healthcare Energy Analysis',
      fr: 'Analyse énergétique des soins de santé SLSO',
    },
    description: {
      en: 'Data analysis project for Stockholm County healthcare provider (SLSO) to identify energy inefficiencies across 185+ facilities. Applied z-score anomaly detection, weather correlation analysis (Pearson correlation), and temporal pattern identification to flag clinics with unreasonable energy consumption.',
      fr: 'Projet d’analyse de données pour le fournisseur de soins de santé du comté de Stockholm (SLSO) visant à identifier les inefficacités énergétiques dans plus de 185 établissements. Analyse des anomalies par score Z, corrélation avec la météo (corrélation de Pearson) et identification de motifs temporels afin de signaler les cliniques à consommation d’énergie anormale.',
    },
    stack: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis', 'Weather Data', 'Sustainability'],
    sourceCode: 'https://github.com/daDevBoat/SLSOProject',
    livePreview: '',
    image: '',
    images: [ 'slso/0_action_plan.png',
              'slso/1_distribution_analysis.png',
              'slso/2_energy_types.png',
              'slso/3_spikes_zscore.png',
              'slso/4_seasonal_patterns.png',
              'slso/5_spikes_energy_class.png',
              'slso/6_consumption_trends.png'
    ],
    teamSize: 5,
    role: {
      en: 'Dev',
      fr: 'Dév',
    },
    year: 2025,
    wip: false,
    detailedDescription: {
      en: 'A comprehensive data analysis project aimed at identifying energy inefficiencies in Stockholm County’s healthcare facilities. Using statistical methods and weather correlation analysis, we identified patterns and anomalies in energy consumption across 185+ buildings.',
      fr: 'Un projet d’analyse de données complet visant à identifier les inefficacités énergétiques dans les établissements de santé du comté de Stockholm. En utilisant des méthodes statistiques et une analyse de corrélation météorologique, nous avons identifié des motifs et des anomalies dans la consommation d’énergie de plus de 185 bâtiments.',
    },
    features: [
      { en: 'Z-score anomaly detection for energy consumption', fr: 'Détection d’anomalies de consommation d’énergie par score Z' },
      { en: 'Pearson correlation analysis with weather data', fr: 'Analyse de corrélation de Pearson avec les données météo' },
      { en: 'Temporal pattern identification across seasons', fr: 'Identification de motifs temporels selon les saisons' },
      { en: 'Building classification system (D-class, E-class)', fr: 'Système de classification des bâtiments (classe D, classe E)' },
    ],
    challenges: [
      { en: 'Mapping SLSO clinic addresses to energy usage data', fr: 'Cartographie des adresses des cliniques SLSO avec les données de consommation d’énergie' },
      { en: 'Integrating web-scraped location data with visit counts and square meter datasets', fr: 'Intégration des données de localisation extraites du web avec les datasets de fréquentation et de surface' },
      { en: 'Cleaning and pruning the merged dataset for analysis', fr: 'Nettoyage et élagage du dataset fusionné pour l’analyse' },
      { en: 'Establishing clear connections between energy use and sustainability goals', fr: 'Établir des liens clairs entre la consommation d’énergie et les objectifs de durabilité' },
      { en: 'Developing analysis tools that are actionable for SLSO', fr: 'Développement d’outils d’analyse exploitables pour SLSO' },
    ],
    sprints: [
      {
        title: { en: 'Sprint 1: Project Scoping & Data Identification', fr: 'Sprint 1 : Définition du projet et identification des données' },
        description: { en: 'Selected project mission, held initial group and supervision meetings, clarified available datasets with supervisors.', fr: 'Définition de la mission du projet, réunions de groupe initiales et supervision, clarification des datasets disponibles avec les encadrants.' },
      },
      {
        title: { en: 'Sprint 2: Data Integration & Initial Research', fr: 'Sprint 2 : Intégration des données et recherche initiale' },
        description: { en: 'Explored web scraping for SLSO addresses, mapped clinic names to energy data, researched sustainable building energy management, merged initial datasets, started pruning.', fr: 'Exploration du scraping web pour les adresses SLSO, mise en correspondance des noms de cliniques avec les données énergétiques, recherche sur la gestion durable de l’énergie des bâtiments, fusion des datasets initiaux et début de l’élagage.' },
      },
      {
        title: { en: 'Sprint 3: Visualization & Statistical Analysis', fr: 'Sprint 3 : Visualisation et analyse statistique' },
        description: { en: 'Created visualizations, wrote report draft, performed correlation analysis (energy vs visitor count, season), and started energy intensity mapping.', fr: 'Création de visualisations, rédaction du brouillon de rapport, analyse de corrélation (énergie vs nombre de visiteurs, saison), et début de la cartographie de l’intensité énergétique.' },
      },
      {
        title: { en: 'Sprint 4: Sustainability Deep Dive & Tool Development', fr: 'Sprint 4 : Approfondissement durabilité et développement d’outils' },
        description: { en: 'Conducted further sustainability research, developed or refined analysis tools, and aligned findings with SLSO sustainability goals.', fr: 'Poursuite de la recherche sur la durabilité, développement ou amélioration des outils d’analyse, et alignement des résultats avec les objectifs de durabilité de SLSO.' },
      },
      {
        title: { en: 'Sprint 5: Final Reporting & Presentations', fr: 'Sprint 5 : Rapport final et présentations' },
        description: { en: 'Completed report draft, incorporated peer and supervisor feedback, prepared and delivered final seminar presentation.', fr: 'Finalisation du rapport, intégration des retours des pairs et superviseurs, préparation et présentation finale du séminaire.' },
      },
    ],
    reportPDFs: [
      {
        title: 'An Analysis of Energy Consumption Patterns in SLSO Healthcare Facilities',
        description: {
          en: '',
          fr: '',
        },
        src: `${process.env.PUBLIC_URL}/reports/slso/slso_report.pdf`,
      },
    ],
  },
  {
    id: 'socket-programming',
    name: {
      en: 'TCP Networking suite',
      fr: 'Suite de réseautique TCP',
    },
    description: {
      en: 'A comprehensive networking toolkit demonstrating TCP socket programming, HTTP proxy servers, and concurrent client handling in Java.',
      fr: 'Une suite réseau complète démontrant la programmation de sockets TCP, des serveurs proxy HTTP et la gestion concurrente de clients en Java.',
    },
    stack: ['Networking', 'Java', 'Concurrent Programming', 'HTTP'],
    teamSize: 1,
    role: {
      en: 'Dev',
      fr: 'Dév',
    },
    year: 2026,
    wip: false,
    detailedDescription: {
      en: '',
      fr: '',
    },
    sourceCode: 'https://github.com/sam8314/socket-programming',
    sprints:[
      { title: { en: 'TCP Client', fr: 'Client TCP' }, description: { en: 'Reusable TCP client library with advanced features', fr: 'Bibliothèque client TCP réutilisable avec fonctionnalités avancées' } },
      { title: { en: 'TCP Ask', fr: 'TCP Ask' }, description: { en: 'Command-line TCP client. Manual testing and debugging of TCP servers', fr: 'Client TCP en ligne de commande. Test manuel et débogage de serveurs TCP' } },
      { title: { en: 'HTTP Ask', fr: 'HTTP Ask' }, description: { en: 'Single-threaded HTTP-to-TCP proxy. Simple HTTP gateway to TCP services', fr: 'Proxy HTTP vers TCP mono-thread. Passerelle HTTP simple vers services TCP' } },
      { title: { en: 'ConcHTTPAsk', fr: 'ConcHTTPAsk' }, description: { en: 'Multi-threaded HTTP proxy. Production-ready concurrent request handling', fr: 'Proxy HTTP multi-thread. Gestion concurrente prête pour la production' } },
    ]
  },
  {
    id: 'university-staff',
    name: {
      en: 'University Staff Management App',
      fr: 'Application de gestion du personnel universitaire',
    },
    description: {
      en: 'Database application for university course layout planning, teaching load allocation, and staff scheduling. Supports course instances, teaching activities, department and teacher management, and full load reporting.',
      fr: 'Application de base de données pour la planification des cursus universitaires, l’allocation des charges d’enseignement et la planification du personnel. Prend en charge les instances de cours, les activités pédagogiques, la gestion des départements et des enseignants, ainsi que les rapports de charge complète.',
    },
    stack: ['Java', 'JDBC', 'PostgreSQL', 'Maven', 'Java Swing', 'FlatLaf', 'Astah Professional'],
    sourceCode: 'https://github.com/sam8314/university-staff-app',
    livePreview: '',
    image: '',
    images:[
      'university-app/logphymodelfinal.png',
      'university-app/logphymodelcourse.png',
      'university-app/logphymodelemployee.png',
      'university-app/logphymodelperson.png',
      'university-app/1_compute_cost.png',
      'university-app/2_added_students_costs.png',
      'university-app/3_employee_alloc_before.png',
      'university-app/4_employee_alloc_after.png',
      'university-app/5_employee_dealloc.png',
      'university-app/6_new_act.png',
    ],
    teamSize: 2,
    role: {
      en: 'Dev',
      fr: 'Dév',
    },
    year: 2025,
    wip: false,
    detailedDescription: {
      en: `This project implements a single university database application for course layout and teaching load allocation. It stores course layouts with unique course codes, names, HP, minimum and maximum student limits, and teaching activities. Course instances are created for specific academic periods with registered student counts, and the app calculates derived examination and administration hours based on HP and enrollment.

The system supports planning of lectures, labs, tutorials, seminars, and other teaching activities. It applies multiplication factors for preparation time, so planned hours are transformed into actual teacher workload. Departments, teachers, and managers are modeled so allocations can be tracked across course instances. A teacher can be allocated to multiple course instances, but no more than four in the same period.

The database is designed around the project task requirements: flexible course layouts, course instances per period, teaching activities, department and employee details, and report queries for planned versus actual workloads. The application also provides teaching cost calculations and allocation management through a JDBC + Swing desktop interface.`,
      fr: `Ce projet implémente une application de base de données universitaire pour la planification des cursus et l’allocation de la charge d’enseignement. Il stocke les cursus avec des codes de cours uniques, des noms, HP, limites minimales et maximales d’étudiants, et des activités d’enseignement. Des instances de cours sont créées pour des périodes académiques spécifiques avec le nombre d’étudiants inscrits, et l’application calcule les heures d’examen et d’administration dérivées en fonction des HP et des inscriptions.

Le système prend en charge la planification des cours, travaux pratiques, tutoriels, séminaires et autres activités pédagogiques. Il applique des facteurs de multiplication pour le temps de préparation, de sorte que les heures planifiées sont transformées en charge de travail réelle pour l’enseignant. Les départements, enseignants et responsables sont modélisés afin que les allocations puissent être suivies sur les instances de cours. Un enseignant peut être affecté à plusieurs instances, mais pas plus de quatre pendant la même période.

La base de données est conçue autour des exigences du projet : cursus flexibles, instances de cours par période, activités pédagogiques, détails de département et d’employé, et requêtes de rapport pour la charge planifiée versus réelle. L’application fournit également des calculs de coût d’enseignement et une gestion des allocations via une interface de bureau JDBC + Swing.`,
    },
    features: [
      { en: 'Course layout planning and course instance modeling', fr: 'Planification de la structure des cours et modélisation des instances' },
      { en: 'Teaching activity and workload allocation', fr: 'Allocation des activités pédagogiques et de la charge de travail' },
      { en: 'Teaching cost reporting for course instances and departments', fr: 'Rapports de coûts d’enseignement pour les instances de cours et les départements' },
      { en: 'Teacher allocation limits and period constraints', fr: 'Limites d’affectation des enseignants et contraintes de période' },
      { en: 'Flexible activity types with preparation factor rules', fr: 'Types d’activités flexibles avec règles de facteurs de préparation' },
    ],
    reportPDFs: [
      {
        title: 'Sprint 1 Report',
        description: {
          en: 'Project setup, conceptual model, and database schema design and implementation in PostgreSQL via pgAdmin4',
          fr: 'Mise en place du projet, modèle conceptuel, et conception/implémentation du schéma de base de données en PostgreSQL via pgAdmin4',
        },
        src: `${process.env.PUBLIC_URL}/reports/university-staff/sprint-1-report.pdf`,
      },
      {
        title: 'Sprint 2 Report',
        description: {
          en: 'Implementation of an OLAP (Online Analytical Processing) queries and views as well as an efficiency analysis of the efficiency of one of the queries with EXPLAIN ANALYZE',
          fr: 'Implémentation de requêtes et vues OLAP (Online Analytical Processing) ainsi qu’une analyse d’efficacité d’une des requêtes avec EXPLAIN ANALYZE',
        },
        src: `${process.env.PUBLIC_URL}/reports/university-staff/sprint-2-report.pdf`,
      },
      {
        title: 'Sprint 3 Report',
        description: {
          en: 'Implementation of a layered Java application with focus on correct ACID transaction handling and a clean separation of concerns between view, controller, service, and integration (DAO) layers',
          fr: 'Implémentation d’une application Java stratifiée avec un accent sur la gestion correcte des transactions ACID et une séparation claire des responsabilités entre vue, contrôleur, service et intégration (DAO)',
        },
        src: `${process.env.PUBLIC_URL}/reports/university-staff/sprint-3-report.pdf`,
      },
    ],
    sprints: [
      { title: { en: 'Sprint 1: Database Design', fr: 'Sprint 1 : Conception de la base de données' }, description: { en: 'Design of the logical/physical model on Astah and wrote build and populate scripts in PostgreSQL', fr: 'Conception du modèle logique/physique sur Astah et écriture de scripts de création et de peuplement en PostgreSQL' } },
      { title: { en: 'Sprint 2: Core CRUD', fr: 'Sprint 2 : CRUD principal' }, description: { en: 'Wrote OLAP queries and views with thorough efficiency analysis', fr: 'Rédaction de requêtes OLAP et de vues avec une analyse approfondie de l’efficacité' } },
      { title: { en: 'Sprint 3: Allocation Logic', fr: 'Sprint 3 : Logique d’allocation' }, description: { en: 'Built layered JDBC app using Maven and Flatlaf UI', fr: 'Création d’une application JDBC en couches avec Maven et interface Flatlaf' } },
    ],
  },
  {
    id: 'fast-typer',
    name: {
      en: 'FastTyper',
      fr: 'FastTyper',
    },
    description: {
      en: 'A JS webapp that helps users grow their typing speed',
      fr: 'Une application web JS qui aide les utilisateurs à augmenter leur vitesse de frappe',
    },
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/sam8314/fast-typer',
    livePreview: '',
    teamSize: '1',
    role: {
      en: 'Dev',
      fr: 'Dév',
    },
    year: '2026',
    wip: true,
    detailedDescription: {
      en: '',
      fr: '',
    },
    features: [],
    challenges: [],
    images: [],
    sprints: [
      { title: { en: 'Sprint 1:', fr: 'Sprint 1 :' }, description: { en: '', fr: '' } },
      { title: { en: 'Sprint 1:', fr: 'Sprint 1 :' }, description: { en: '', fr: '' } },
      { title: { en: 'Sprint 1:', fr: 'Sprint 1 :' }, description: { en: '', fr: '' } },
    ],
  },
  {
    id: 'alter-flughafen',
    name: {
      en: 'Alter Flughafen',
      fr: 'Alter Flughafen',
    },
    description: {
      en: 'A 2D educational game in Python to teach about wildlife conservation. Created during volunteer work in Karlsruhe, Germany. Designed to engage diverse age groups in environmental awareness.',
      fr: 'Un jeu éducatif 2D en Python pour enseigner la conservation de la faune. Créé lors d’un travail bénévole à Karlsruhe, en Allemagne. Conçu pour sensibiliser différents groupes d’âge à la protection de l’environnement.',
    },
    stack: ['Python', 'Game dev', 'sustainability'],
    sourceCode: 'https://github.com/sam8314/alter-flughafen-V1',
    livePreview: '',
    image: '',
    teamSize: 1,
    role: {
      en: 'Dev',
      fr: 'Dév',
    },
    year: 2022,
    wip: false,
    detailedDescription: {
      en: '',
      fr: '',
    },
    features: [
      { en: 'GUI', fr: 'Interface graphique' },
    ],
    challenges: [],
    images: [],
    sprints: [
      { title: { en: 'Sprint 1: Core Architecture', fr: 'Sprint 1 : Architecture de base' }, description: { en: 'Designed system architecture, set up C++ project structure', fr: 'Conçu l’architecture système, configuré la structure du projet C++' } },
      { title: { en: 'Sprint 2: Implementation', fr: 'Sprint 2 : Implémentation' }, description: { en: 'Implemented core simulation logic and resource management', fr: 'Implémenté la logique de simulation et la gestion des ressources' } },
      { title: { en: 'Sprint 3: Testing', fr: 'Sprint 3 : Tests' }, description: { en: 'Testing, debugging, and performance optimization', fr: 'Tests, débogage et optimisation des performances' } },
    ],
  },
  {
    id: 'baxandall',
    name: {
      en: 'Baxandall Filter',
      fr: 'Filtre Baxandall',
    },
    description: {
      en: 'A bass and treble filter built with no potentiometer',
      fr: 'Un filtre de graves et aigus construit sans potentiomètre',
    },
    stack: ['Embedded electronics'],
    role: {
      en: 'Dev',
      fr: 'Dév',
    },
    year: 2024,
    wip: false,
    teamSize: 1,
    images: ['baxandall/baxandall.png'],
  },
]

const skills = [
  'Python', 'Java', 'JavaScript/TypeScript', 'React', 'PostgreSQL', 'HTML/CSS',
  'JDBC', 'Maven', 'REST APIs', 'Unit Testing',
  'Pandas', 'Matplotlib', 'TensorFlow/Keras (basic)', 'Algorithm Design',
  'C', 'Assembly (MIPS/RISC‑V)', 'Linux', 'Bash', 'Multithreading (pthreads, OpenMP)',
  'Git/GitHub/GitLab', 'Docker', 'CI/CD', 'VS Code', 'DBeaver', 'pgAdmin4',
  'Agile/Scrum', 'LaTeX', 'GIMP'
]

const contact = {
  email: 'sa.serbouti@protonmail.com',
}

export { header, about, projects, skills, contact }
