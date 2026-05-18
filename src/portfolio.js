const header = {
  homepage: 'https://sam8314.github.io/portfolio',
  title: 'Samia Serbouti',
}

const about = {
  name: 'Samia Serbouti',
  role: {
    en: 'a software engineer from KTH with backend focus',
    fr: 'ingénieure logicielle de KTH spécialisée backend',
  },
  picture: 'https://media.licdn.com/dms/image/v2/D4E03AQH0_5sOvg1wxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694356364808?e=1779321600&v=beta&t=ajJD6Te-rVFMz80bAzEzg_1eVphh77PXT6bdvmwfDcA',
  description: {
    en: `Engineering student at KTH with hands-on experience in PostgreSQL, Python, and full-stack development. Strong foundation in database systems, algorithms, and software engineering. Passionate about sustainable digitalization and data-driven solutions for real-world problems. My coursework includes Databases, Software Engineering, Data Structures, Algorithms, and Computer Networks. I'm actively improving skills in DevOps practices, data analysis, and security fundamentals, with a goal of contributing across the data-infrastructure-security stack.`,
    fr: `Étudiante en ingénierie à KTH avec une expérience pratique en PostgreSQL, Python et développement full-stack. Solide formation en systèmes de bases de données, algorithmique et génie logiciel. Passionnée par la digitalisation durable et les solutions axées sur les données pour des problèmes réels. Mes cours incluent Bases de données, Génie logiciel, Structures de données, Algorithmique et Réseaux informatiques. Je développe activement des compétences en pratiques DevOps, analyse de données et fondamentaux de la sécurité, avec l'objectif de contribuer à la pile données-infrastructure-sécurité.`,
  },
  resume: `${process.env.PUBLIC_URL}/Resume_Serbouti.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/samia-serbouti-0595b1229',
    github: 'https://github.com/sam8314',
    email: 'sa.serbouti@protonmail.com',
  },
}

const projects = [
  /*HOUSEBITE*/
  {
    id: 'housebite',
    type: 'Web Dev',
    typeColor: '#3498db',
    name: {
      en: 'HouseBite, Virtual Pantry Manager',
      fr: 'HouseBite, gestionnaire de garde-manger virtuel',
    },
    description: {
      en: 'A progressive web app that turns households into a shared smart pantries: tracking expiry dates, suggesting recipes to reduce waste, scanning receipts, and managing shared budgets. Built for households to waste less and spend less.',
      fr: 'Une application web progressive qui transforme en foyer en garde-manger partagé intelligent : suivi des dates de péremption, suggestions de recettes pour réduire le gaspillage, scan des reçus et gestion du budget commun. Conçue pour aider les ménages à gaspiller et dépenser moins.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Mantine UI', 'Spoonacular API', 'Docker', 'OpenAI OCR', 'PWA', 'HTML', 'CSS', 'REST APIs'],
    sourceCode: '',
    livePreview: 'https://housebite.app/',
    image: '',
    teamSize: 7,
    role: {
      en: 'Product Owner',
      fr: 'Product Owner',
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
    reportPDFs: [
      {
        title: 'Project Reflection',
        description: {
          en: 'Reflections and notes on the project',
          fr: 'Réflexions et notes sur le projet',
        },
        src: `${process.env.PUBLIC_URL}/reports/housebite/Project_Reflection.pdf`,
      },
    ],
  },

  /*SLSO*/
  {
    id: 'slso-energy',
    type: 'dataAnalysis',
    typeColor: '#2ecc71',
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

  /*SOCKET PROGRAMMING*/
  {
    id: 'socket-programming',
    type: 'networking',
    typeColor: '#e74c3c',
    name: {
      en: 'Java Socket TCP Networking suite',
      fr: 'Suite de réseautique sockets TCP Java',
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

  /*UNIVERSITY STAFF*/
  {
    id: 'university-staff',
    type: 'Database engineering',
    typeColor: '#9b59b6',
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

  /*SOUNDGOOOD*/
  {
  id: 'soundgood-music-school',
    type: 'Database Engineering',
  typeColor: '#9b59b6',
  name: {
    en: 'Music School Database System',
    fr: 'Système de base de données pour une école de musique',
  },
  description: {
    en: 'End-to-end database system for a music school: from conceptual ER modeling to physical PostgreSQL implementation with OLAP queries and performance analysis.',
    fr: 'Système de base de données complet pour une école de musique : de la modélisation conceptuelle ER à l\'implémentation physique PostgreSQL avec requêtes OLAP et analyse de performance.',
  },
  stack: ['PostgreSQL', 'SQL', 'pgAdmin4', 'ER Diagram', 'Astah Professional', 'UML', 'Database Design', 'OLAP', 'Query Optimization'],
  sourceCode: 'https://github.com/sam8314/iv1351/tree/main/seminars',
  livePreview: '',
  image: '',
  images: [],
  teamSize: 2,
  role: {
    en: 'Dev',
    fr: 'Dev',
  },
  year: 2024,
  wip: false,
  detailedDescription: {
    en: `This Music School Database System is a complete database solution developed for a music school that offers individual lessons, group lessons, and ensembles. The project follows the full database lifecycle: conceptual modeling using ER diagrams with IE notation in Astah Professional, logical and physical design with normalization to 3NF, implementation in PostgreSQL, and analytical querying with performance optimization.

The database manages student and instructor personal information, lesson scheduling (individual, group, and ensemble), instrument rentals (up to 2 instruments per student for 12 months), sibling discount pricing, and monthly billing for both students and instructors. A key feature is the flexible pricing scheme where different lesson levels (beginner, intermediate, advanced) have different prices that can vary over time.

The project includes four analytical queries: monthly lesson count per type, sibling distribution analysis, instructor workload tracking for the current month, and ensemble occupancy for the upcoming week. Performance analysis using PostgreSQL's EXPLAIN ANALYZE identified optimization opportunities, leading to recommendations for multicolumn indexes and materialized views.`,
    fr: `Ce système de base de données d'une école de musique est une solution complète développée pour une école de musique proposant des cours individuels, des cours collectifs et des ensembles. Le projet suit l'ensemble du cycle de vie d'une base de données : modélisation conceptuelle avec diagrammes ER en notation IE dans Astah Professional, conception logique et physique avec normalisation en 3NF, implémentation en PostgreSQL, et requêtes analytiques avec optimisation des performances.

La base de données gère les informations personnelles des étudiants et des professeurs, la planification des cours (individuels, collectifs et ensembles), la location d'instruments (jusqu'à 2 instruments par étudiant pour 12 mois), les réductions pour fratrie, et la facturation mensuelle. Une fonctionnalité clé est le système de tarification flexible où différents niveaux de cours ont des prix différents qui peuvent varier dans le temps.

Le projet comprend quatre requêtes analytiques : nombre de cours par mois et par type, distribution des fratries, charge de travail des professeurs par mois, et occupation des ensembles pour la semaine à venir. L'analyse des performances avec EXPLAIN ANALYZE de PostgreSQL a identifié des opportunités d'optimisation, menant à des recommandations d'index multicolonnes et de vues matérialisées.`,
  },
  features: [
    { en: 'Complete database lifecycle (Conceptual → Logical → Physical → OLAP)', fr: 'Cycle de vie complet (Conceptuel → Logique → Physique → OLAP)' },
    { en: 'ER diagram with IE notation in Astah Professional', fr: 'Diagramme ER en notation IE avec Astah Professional' },
    { en: '3NF normalized PostgreSQL schema with ENUM types and constraints', fr: 'Schéma PostgreSQL normalisé en 3NF avec types ENUM et contraintes' },
    { en: 'Student rental system (max 2 instruments, 12-month limit)', fr: 'Système de location d\'instruments (max 2, durée 12 mois max)' },
    { en: 'Sibling discount pricing model', fr: 'Modèle de tarification avec réduction fratrie' },
    { en: 'Flexible lesson pricing by skill level (beginner/intermediate/advanced)', fr: 'Tarification flexible par niveau (débutant/intermédiaire/avancé)' },
    { en: '4 analytical OLAP queries for business insights', fr: '4 requêtes analytiques OLAP pour le suivi métier' },
    { en: 'Performance analysis with EXPLAIN ANALYZE', fr: 'Analyse de performance avec EXPLAIN ANALYZE' },
    { en: 'Optimization recommendations (indexes, materialized views)', fr: 'Recommandations d\'optimisation (index, vues matérialisées)' },
  ],
  challenges: [
    { en: 'Balancing naive vs. programmatic modeling without knowing the next design phase', fr: 'Équilibrer modélisation naïve vs programmatique sans connaître la phase suivante' },
    { en: 'Handling both scheduled group lessons and on-demand individual lessons in the same model', fr: 'Gérer cours collectifs planifiés et cours individuels à la demande dans le même modèle' },
    { en: 'Multi-valued attributes (multiple emails, phone numbers, instruments per instructor/applicant)', fr: 'Attributs multi-valués (emails multiples, téléphones multiples, instruments par professeur/candidat)' },
    { en: 'Sequential scan performance on large lesson tables for monthly queries', fr: 'Performance des analyses séquentielles sur les grandes tables pour les requêtes mensuelles' },
  ],
  reportPDFs: [
    {
      title: 'Seminar 1: Conceptual Model (ER Diagram)',
      description: {
        en: 'Entity-Relationship conceptual model with IE notation using Astah Professional. Includes person superclass with subclasses (Student, Instructor, Applicant, ContactPerson, Sibling), lesson hierarchy (Lesson → Group → Ensemble), rental management, and flexible pricing scheme.',
        fr: 'Modèle conceptuel Entité-Association en notation IE avec Astah Professional. Inclut superclasse Person avec sous-classes, hiérarchie des cours, gestion des locations et système de tarification flexible.',
      },
      src: `${process.env.PUBLIC_URL}/reports/soundgood/DBMS_Seminar_1.pdf`,
    },
    {
      title: 'Seminar 2: Logical & Physical Model',
      description: {
        en: 'SQL implementation in PostgreSQL: tables, ENUM types, primary/foreign keys, constraints, triggers, and generated data. Cross-reference tables for multi-valued attributes (instructor_teaches_instrument, applicant_wants_instrument, student_sibling).',
        fr: 'Implémentation SQL en PostgreSQL : tables, types ENUM, clés primaires/étrangères, contraintes, triggers et données générées. Tables de référence pour attributs multi-valués.',
      },
      src: `${process.env.PUBLIC_URL}/reports/soundgood/DBMS_Seminar_2.pdf`,
    },
    {
      title: 'Seminar 3: OLAP Queries & Performance Analysis',
      description: {
        en: 'Four analytical queries with EXPLAIN ANALYZE performance analysis: monthly lessons by type, sibling distribution, instructor workload, and ensemble occupancy for next week. Includes index recommendations and materialized view strategies.',
        fr: 'Quatre requêtes analytiques avec analyse de performance EXPLAIN ANALYZE : cours mensuels par type, distribution des fratries, charge des professeurs, occupation des ensembles pour la semaine. Inclut recommandations d\'index et stratégies de vues matérialisées.',
      },
      src: `${process.env.PUBLIC_URL}/reports/soundgood/DBMS_Seminar_3.pdf`,
    },
  ],
  sprints: [
    {
      title: { en: 'Sprint 1: Conceptual ER Modeling', fr: 'Sprint 1 : Modélisation conceptuelle ER' },
      description: { en: 'Noun extraction, entity identification, ER diagram with IE notation in Astah Professional. Person superclass, lesson hierarchy (Lesson → Group → Ensemble), rental constraints (max 2 instruments, 12 months), pricing scheme design.', fr: 'Extraction des noms, identification des entités, diagramme ER en notation IE avec Astah Professional. Superclasse Person, hiérarchie des cours (Lesson → Group → Ensemble), contraintes de location (max 2 instruments, 12 mois), système de tarification.' },
    },
    {
      title: { en: 'Sprint 2: Logical & Physical Implementation', fr: 'Sprint 2 : Implémentation logique et physique' },
      description: { en: 'Table creation in PostgreSQL, ENUM types (LEVEL, INSTRUMENT_TYPE, LESSON_TYPE), primary/foreign keys, constraints. Cross-reference tables for multi-valued attributes (instructor_teaches_instrument, applicant_wants_instrument, student_sibling). Data generation with ChatGPT4.', fr: 'Création des tables PostgreSQL, types ENUM, clés primaires/étrangères, contraintes. Tables de référence pour attributs multi-valués. Génération de données avec ChatGPT4.' },
    },
    {
      title: { en: 'Sprint 3: OLAP Queries & Optimization', fr: 'Sprint 3 : Requêtes OLAP et optimisation' },
      description: { en: '4 analytical queries. EXPLAIN ANALYZE performance analysis revealing sequential scan bottlenecks. Recommendations: multicolumn index on lesson(given, scheduled_time) and materialized views for daily queries.', fr: '4 requêtes analytiques. Analyse de performance EXPLAIN ANALYZE révélant les goulots d\'étranglement des analyses séquentielles. Recommandations : index multicolonne et vues matérialisées.' },
    },
  ],
  },

  /*TIPE*/
  {
    id: 'tipe-regression-optimization',
      type: 'dataAnalysis',
      typeColor: '#2ecc71',
    name: {
      en: 'Regression Optimization for Sensor Parameters',
      fr: 'Optimisation du choix de régression pour paramètres de capteurs',
    },
    description: {
      en: 'Machine learning research project using neural networks to automatically select optimal regression methods based on sensor characteristics. Applied to CALIPSO satellite lidar data for atmospheric aerosol profiling.',
      fr: 'Projet de recherche en apprentissage automatique utilisant des réseaux de neurones pour sélectionner automatiquement la méthode de régression optimale selon les caractéristiques des capteurs. Appliqué aux données lidar du satellite CALIPSO pour le profilage des aérosols atmosphériques.',
    },
    stack: ['Python', 'TensorFlow', 'Keras', 'Neural Networks', 'Scikit-learn', 'NumPy', 'SciPy', 'Regression Analysis', 'LSTM', 'Data Science'],
    sourceCode: '',
    livePreview: '',
    image: '',
    images: [],
    teamSize: 1,
    role: {
      en: 'Dev',
      fr: 'Dev',
    },
    year: 2021,
    wip: false,
    detailedDescription: {
      en: `This research project (TIPE - Travail d'Initiative Personnelle Encadré) for the 2021 competitive exam session addresses a fundamental problem in experimental physics: temporal differentiation of sampled measurements amplifies noise and causes divergence at short timescales. Polynomial regression mitigates this issue but choosing the optimal polynomial degree is often arbitrary and computationally expensive.

  I developed a neural network-based system that automatically selects the best regression method based on sensor parameters. The workflow: (1) Generate synthetic sensor data with controlled noise characteristics, (2) Evaluate multiple regression methods (NumPy polynomial fits from degree 0-5, SciPy regression) using a composite efficiency metric combining RMSLE (Root Mean Squared Log Error), Pearson correlation coefficient, and inverse computation time, (3) Train neural network architectures (both Sequential and Functional API with 2 hidden layers) to predict optimal regression from sensor parameters, (4) Apply the trained model to real sensor data, including the CALIPSO satellite's CALIOP lidar receiver (10 MHz digitization rate).

  Key innovation: The efficiency function (time⁻¹ + R_pearson + RMSLE) balances accuracy, correlation, and computational cost. The neural network uses a Dense architecture with ReLU activation, input dimension = number of sensor parameters, and softmax output layer for regression method selection (6 classes: degree 0-5 polynomials + SciPy). Training on 150+ sensor samples achieved successful prediction of optimal regression orders (e.g., linear degree 1 for DHT11 temperature/humidity, degree 4 for HCSR04 ultrasonic sensor).`,
      fr: `Ce projet de recherche (TIPE - Travail d'Initiative Personnelle Encadré) pour la session 2021 des concours aborde un problème fondamental en physique expérimentale : la dérivation temporelle de mesures échantillonnées amplifie le bruit et provoque des divergences aux temps courts. La régression polynomiale atténue ce problème, mais le choix du degré optimal est souvent arbitraire et coûteux en calcul.

  J'ai développé un système basé sur des réseaux de neurones pour sélectionner automatiquement la meilleure méthode de régression en fonction des paramètres du capteur. Le processus : (1) Génération de données synthétiques de capteurs avec caractéristiques de bruit contrôlées, (2) Évaluation de multiples méthodes de régression (polynômes NumPy degrés 0-5, régression SciPy) avec une métrique composite (RMSLE, coefficient de Pearson, temps de calcul inverse), (3) Entraînement de réseaux de neurones (architectures Sequential et Functional API avec 2 couches cachées), (4) Application aux données réelles du lidar CALIOP du satellite CALIPSO (taux de numérisation 10 MHz).

  Innovation clé : La fonction d'efficacité (temps⁻¹ + R_pearson + RMSLE) équilibre précision, corrélation et coût computationnel. Architecture Dense avec activation ReLU, softmax en sortie (6 classes). Entraînement sur 150+ échantillons capteurs a permis des prédictions réussies (degré linéaire 1 pour DHT11, degré 4 pour HCSR04).`,
    },
    features: [
      { en: 'Automatic regression method selection from sensor parameters', fr: 'Sélection automatique de la méthode de régression à partir des paramètres du capteur' },
      { en: 'Composite efficiency metric: RMSLE + Pearson correlation + inverse time', fr: 'Métrique composite : RMSLE + corrélation de Pearson + inverse du temps' },
      { en: 'Neural network architectures (Sequential & Functional API with LSTM)', fr: 'Architectures de réseaux de neurones (Sequential & Functional API avec LSTM)' },
      { en: 'Polynomial regression testing (degree 0-5) from NumPy and SciPy', fr: 'Tests de régression polynomiale (degrés 0-5) de NumPy et SciPy' },
      { en: 'Application to CALIPSO satellite lidar data (10 MHz digitization)', fr: 'Application aux données lidar du satellite CALIPSO (numérisation 10 MHz)' },
      { en: 'Sensor database: DHT11, HCSR04, PIR, thermistor, photoresistor', fr: 'Base de données capteurs : DHT11, HCSR04, PIR, thermistance, photorésistance' },
      { en: 'MinMaxScaler normalization and train-test split evaluation', fr: 'Normalisation MinMaxScaler et évaluation train-test' },
    ],
    challenges: [
      { en: 'Temporal derivation of sampled measurements amplifies noise at short timescales', fr: 'La dérivation temporelle des mesures échantillonnées amplifie le bruit aux temps courts' },
      { en: 'Arbitrary regression polynomial degree selection in automated analysis pipelines', fr: 'Choix arbitraire du degré polynomial de régression dans les pipelines d\'analyse automatisés' },
      { en: 'Computational cost of evaluating multiple regression methods per sensor', fr: 'Coût computationnel de l\'évaluation de multiples méthodes de régression par capteur' },
      { en: 'Limited training data for real sensors → synthetic data generation approach', fr: 'Données d\'entraînement limitées pour capteurs réels → approche de génération de données synthétiques' },
    ],
    reportPDFs: [
      {
        title: 'TIPE Soutenance - Optimisation du choix de régression',
        description: {
          en: 'Full research presentation (40 slides) covering problem motivation, CALIPSO satellite context, neural network architecture design, database generation, training results, and CALIOP lidar application.',
          fr: 'Présentation complète de recherche (40 diapos) couvrant la motivation du problème, contexte satellite CALIPSO, architecture réseau neuronal, génération de base de données, résultats d\'entraînement et application au lidar CALIOP.',
        },
        src: `${process.env.PUBLIC_URL}/reports/tipe/TIPE_soutenance.pdf`,
      },
    ],
    sprints: [
      {
        title: { en: 'Problem Definition & Literature Review', fr: 'Définition du problème & revue de littérature' },
        description: { en: 'Identified core problem: temporal derivation of sampled measurements causes noise amplification. Studied regression methods for noise mitigation. Selected CALIPSO satellite as application case for aerosol profile differentiation.', fr: 'Identification du problème central : la dérivation temporelle amplifie le bruit. Étude des méthodes de régression. Sélection du satellite CALIPSO comme cas d\'application pour la différentiation des profils d\'aérosols.' },
      },
      {
        title: { en: 'Regression Efficiency Framework', fr: 'Cadre d\'efficacité des régressions' },
        description: { en: 'Implemented efficiency evaluation function combining RMSLE (log error), Pearson correlation (trend accuracy), and inverse computation time (speed). Created synthetic sensor data generator with configurable noise parameters. Tested NumPy polyfit (degrees 0-5) and SciPy regression.', fr: 'Implémentation de la fonction d\'évaluation combinant RMSLE (erreur logarithmique), corrélation de Pearson (précision des tendances) et inverse du temps de calcul (vitesse). Création d\'un générateur de données synthétiques. Tests des régressions NumPy (degrés 0-5) et SciPy.' },
      },
      {
        title: { en: 'Neural Network Architecture Design', fr: 'Conception de l\'architecture du réseau neuronal' },
        description: { en: 'Built two architectures: Sequential (2 Dense layers, ReLU, softmax) and Functional API (Input → Dense(nb_param×2) → Dense(nb_param) → Dense(6)). Used categorical cross-entropy loss, Adam optimizer. Trained on 150+ samples with MinMaxScaler normalization.', fr: 'Construction de deux architectures : Sequential (2 couches Dense, ReLU, softmax) et Functional API (Input → Dense(nb_param×2) → Dense(nb_param) → Dense(6)). Loss categorical cross-entropy, optimiseur Adam. Entraînement sur 150+ échantillons avec normalisation MinMaxScaler.' },
      },
      {
        title: { en: 'Model Training & CALIPSO Application', fr: 'Entraînement & application CALIPSO' },
        description: { en: 'Trained both models for 10-30 epochs. Achieved successful predictions: DHT11 → degree 1, HCSR04 → degree 4, photoresistor → degree 3. Applied model to CALIOP lidar receiver (10 MHz digitization rate, 120s acquisition time). Results: Functional API suggested SciPy regression, Sequential suggested NumPy degree 1 polynomial.', fr: 'Entraînement des deux modèles sur 10-30 époques. Prédictions réussies : DHT11 → degré 1, HCSR04 → degré 4, photorésistance → degré 3. Application au lidar CALIOP (10 MHz, 120s). Résultats : API Functional suggère SciPy, Sequential suggère polynôme NumPy degré 1.' },
      },
    ],
  },

/*FAST TYPER*/
  {
    id: 'fast-typer',
    type: 'Web Dev',
    typeColor: '#3498db',
    name: {
      en: 'FastTyper',
      fr: 'FastTyper',
    },
    description: {
      en: 'A typing speed trainer built while following the OpenClassrooms JavaScript course.',
      fr: 'Un entraînement de vitesse de frappe développé en suivant le cours JavaScript d’OpenClassrooms.',
    },
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/sam8314/fast-typer',
    livePreview: '',
    teamSize: '1',
    role: {
      en: 'Dev',
      fr: 'Dev',
    },
    year: '2026',
    wip: false,
    detailedDescription: {
      en: 'FastTyper was created as part of the OpenClassrooms course "Apprenez à programmer avec JavaScript". The app focuses on user input handling, real-time typing metrics, and DOM updates to provide a smooth typing practice experience.',
      fr: 'FastTyper a été créé dans le cadre du cours OpenClassrooms « Apprenez à programmer avec JavaScript ». L’application met l’accent sur la gestion des entrées utilisateur, les métriques de frappe en temps réel et la mise à jour du DOM pour offrir une expérience d’entraînement fluide.',
    },
    features: [
      {
        en: 'Real-time typing speed and accuracy feedback',
        fr: 'Retour en temps réel sur la vitesse et la précision de frappe',
      },
      {
        en: 'Dynamic text generation based on JavaScript training exercises',
        fr: 'Génération dynamique de texte basée sur les exercices de formation JavaScript',
      },
      {
        en: 'Responsive interface built with HTML and CSS',
        fr: 'Interface responsive créée avec HTML et CSS',
      },
    ],
    challenges: [
      {
        en: 'Managing keyboard input and preventing default browser behavior',
        fr: 'Gestion des entrées clavier et prévention du comportement par défaut du navigateur',
      },
      {
        en: 'Updating the DOM efficiently while tracking user progress',
        fr: 'Mise à jour efficace du DOM tout en suivant la progression de l’utilisateur',
      },
      {
        en: 'Building a clean UI with stateful JavaScript logic',
        fr: 'Conception d’une interface claire avec une logique JavaScript basée sur l’état',
      },
    ],
    images: [],
    sprints: [
      { title: { en: 'Sprint 1: Typing mechanics', fr: 'Sprint 1 : Mécanique de frappe' }, description: { en: 'Set up text display, keyboard event handling, and basic timer logic.', fr: 'Mise en place de l’affichage du texte, de la gestion des événements clavier et de la logique de minuterie de base.' } },
      { title: { en: 'Sprint 2: Feedback and scoring', fr: 'Sprint 2 : Feedback et score' }, description: { en: 'Added speed/accuracy indicators and score tracking to improve practice sessions.', fr: 'Ajout d’indicateurs de vitesse/ précision et du suivi du score pour améliorer les sessions d’entraînement.' } },
      { title: { en: 'Sprint 3: Polish and responsiveness', fr: 'Sprint 3 : Finition et responsive' }, description: { en: 'Refined the UI, responsive layout, and course-based JavaScript behavior.', fr: 'Affinement de l’interface, mise en page responsive et comportement JavaScript inspiré du cours.' } },
    ],
  },

  /*BAXANDALL*/
  {
    id: 'baxandall',
    type: 'embedded',
    typeColor: '#34495e',
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

  /*ALTER FLUGHAFEN*/
  {
    id: 'alter-flughafen',
    type: 'gamedev',
    typeColor: '#c0392b',
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

  /*ANDROID WALLPAPER CHANGER*/
  {
  id: 'android-wallpaper-changer',
  type: 'mobile dev',
  typeColor: '#e67e22',
  name: {
    en: 'Android Wallpaper Changer',
    fr: 'Changeur de fond d\'écran Android',
  },
  description: {
    en: 'Early Android app that allows users to set custom wallpapers, with plans for gallery albums, image management, and auto-rotation frequency settings.',
    fr: 'Première application Android permettant aux utilisateurs de définir des fonds d\'écran personnalisés, avec des fonctionnalités prévues pour galeries d\'images, gestion et rotation automatique.',
  },
  stack: ['Java', 'Android SDK', 'XML', 'Android Studio', 'GitHub', 'OpenClassrooms', 'Ubuntu'],
  sourceCode: '',
  livePreview: '',
  image: '',
  images: [],
  teamSize: 2,
  role: {
    en: 'Dev',
    fr: 'Dev',
  },
  year: 2016,
  wip: false,
  detailedDescription: {
    en: `This Android wallpaper application was my first mobile development project, created during high school (ICN - Computer Science and Digital Creation). The project started as a 3D game in Unity but was pivoted to an Android app due to technical challenges. I took full responsibility for programming the application using Android Studio, while my teammate handled the image gallery curation.

The app allows users to set wallpapers from a built-in selection. It includes a main screen displaying a wallpaper preview with a "Set as Wallpaper" button. When pressed, the app uses Android's WallpaperManager API to apply the selected image to the device home screen. The app was developed and tested using the Android emulator (Nexus 5X) and required enabling virtualization in the BIOS.

Key technical learning included: installing and configuring Android Studio on Ubuntu 16.04 LTS, understanding SDK/API/JDK versions, working with XML layouts, Java event handling, and the Gradle build system. The project followed OpenClassrooms tutorials and served as a hands-on introduction to mobile development, GitHub integration, and emulator debugging.

Planned features (not fully implemented due to project timeline): image gallery with albums (landscapes, abstract, sports, music, black & white), delete and set wallpaper options per image, home screen image, and settings panel for auto-rotation frequency.`,
    fr: `Cette application Android de fonds d'écran a été mon premier projet de développement mobile, réalisé au lycée dans le cadre de l'option ICN (Informatique et Création Numérique). Le projet a commencé comme un jeu 3D sur Unity mais a été réorienté vers une application Android en raison de difficultés techniques. J'étais responsable de la programmation de l'application avec Android Studio, tandis que ma coéquipière gérait la galerie d'images.

L'application permet aux utilisateurs de définir des fonds d'écran à partir d'une sélection intégrée. Elle comprend un écran principal affichant un aperçu du fond d'écran avec un bouton "Définir en tant que papier peint". En appuyant, l'application utilise l'API WallpaperManager d'Android pour appliquer l'image sélectionnée à l'écran d'accueil. L'application a été développée et testée avec l'émulateur Android (Nexus 5X) et nécessitait l'activation de la virtualisation dans le BIOS.

Les apprentissages techniques clés incluent : installation et configuration d'Android Studio sur Ubuntu 16.04 LTS, compréhension des versions SDK/API/JDK, travail avec les layouts XML, gestion d'événements Java, et le système de build Gradle. Le projet s'est appuyé sur des tutoriels OpenClassrooms et a servi d'introduction pratique au développement mobile, à l'intégration GitHub et au débogage sur émulateur.

Fonctionnalités prévues (non entièrement réalisées) : galerie d'images avec albums (paysages, abstrait, sport, musique, noir & blanc), options supprimer/définir par image, écran d'accueil, et panneau de paramètres pour la fréquence de rotation automatique.`,
  },
  features: [
    { en: 'Set wallpaper from built-in image selection', fr: 'Définir un fond d\'écran à partir d\'une sélection d\'images intégrée' },
    { en: 'WallpaperManager API integration for Android', fr: 'Intégration de l\'API WallpaperManager pour Android' },
    { en: 'XML-based UI layout with TextView, Button, ImageView', fr: 'Interface utilisateur XML avec TextView, Button, ImageView' },
    { en: 'Event handling with OnClickListener', fr: 'Gestion d\'événements avec OnClickListener' },
    { en: 'Android emulator testing (Nexus 5X)', fr: 'Tests sur émulateur Android (Nexus 5X)' },
    { en: 'GitHub version control integration', fr: 'Intégration du contrôle de version GitHub' },
  ],
  challenges: [
    { en: 'Setting up Android Studio on Ubuntu 16.04 LTS (driver issues, BIOS virtualization)', fr: 'Installation d\'Android Studio sur Ubuntu 16.04 LTS (problèmes de pilotes, virtualisation BIOS)' },
    { en: 'Learning Android SDK, API levels, and JDK compatibility from scratch', fr: 'Apprentissage de zéro du SDK Android, niveaux d\'API et compatibilité JDK' },
    { en: 'Pivoting from Unity 3D game to Android app due to technical blockers', fr: 'Réorientation d\'un jeu Unity 3D vers une application Android en raison de blocages techniques' },
    { en: 'First exposure to XML layouts and Java mobile event handling', fr: 'Première exposition aux layouts XML et à la gestion d\'événements Java mobile' },
  ],
  reportPDFs: [],
  sprints: [
    {
      title: { en: 'Project Setup & IDE Discovery', fr: 'Configuration du projet & découverte de l\'IDE' },
      description: { en: 'Installed Android Studio on Ubuntu 16.04, configured SDK/API/JDK, enabled BIOS virtualization, set up AVD emulator (Nexus 5X), created first "Hello World" project.', fr: 'Installation d\'Android Studio sur Ubuntu 16.04, configuration SDK/API/JDK, activation virtualisation BIOS, configuration émulateur AVD (Nexus 5X), création premier projet "Hello World".' },
    },
    {
      title: { en: 'Core Wallpaper Functionality', fr: 'Fonctionnalité principale de fond d\'écran' },
      description: { en: 'Modified Hello World to display wallpaper preview image, title text, instruction text, and "Set as Wallpaper" button. Implemented WallpaperManager API with setResource() method and IOException handling.', fr: 'Modification de Hello World pour afficher un aperçu du fond d\'écran, texte titre, texte instruction et bouton "Définir". Implémentation de l\'API WallpaperManager avec méthode setResource() et gestion IOException.' },
    },
    {
      title: { en: 'Polish & Icon Customization', fr: 'Finition & personnalisation de l\'icône' },
      description: { en: 'Changed default app icon to custom image. Tested on emulator and verified wallpaper persistence after app exit. Documented code and prepared project wiki page.', fr: 'Changement de l\'icône d\'application par défaut. Test sur émulateur et vérification de la persistance du fond d\'écran après fermeture. Documentation du code et préparation de la page wiki du projet.' },
    },
  ],
  },

  /* UNITY */
  {
    id: 'unity-viking-rpg',
    type: 'gamedev',
    typeColor: '#c0392b',
    name: {
      en: 'Unity Viking RPG (First 3D Game)',
      fr: 'Jeu Viking RPG sur Unity (Premier jeu 3D)',
    },
    description: {
      en: 'First attempt at 3D game development: an open-world Viking RPG with quests, NPCs, and a Nordic temple environment. Built with Unity 3D using assets from the Unity Asset Store.',
      fr: 'Première tentative de développement de jeu 3D : un RPG Viking en monde ouvert avec quêtes, PNJ et un environnement de temple nordique. Réalisé avec Unity 3D et des assets de l\'Asset Store.',
    },
    stack: ['Unity 3D', '3D Game Development', 'Asset Store', 'OpenClassrooms', 'RPG Design'],
    sourceCode: '',
    livePreview: '',
    image: '',
    images: [],
    teamSize: 2,
    role: {
      en: 'Dev',
      fr: 'Dev',
    },
    year: 2016,
    wip: false,
    detailedDescription: {
      en: `This was my first 3D game development project, created during high school (ICN - Computer Science and Digital Creation). The goal was to build an open-world Viking RPG featuring a village, Nordic temple, quest system, NPCs with animations, weapons, and enemy encounters (dragons, skeletons). We used Unity 3D as the game engine.

  Due to our limited programming experience at the time, we leveraged the Unity Asset Store for pre-built environments (Viking village, Nordic temple), character models, and animations. I handled the Unity interface, scene setup, asset importing, terrain modification, first-person controller integration, weapon attachment, and NPC placement. My teammate contributed to scenario writing and game design.

  Key technical achievements included: importing and configuring a complete Viking village environment, expanding the player's accessible area by modifying the volume boundary (collider/respawn volume), successfully attaching a weapon (axe, then sword) to the first-person character, downloading and placing an NPC soldier from the Asset Store with pre-built animations and movement scripts.

  The project ultimately faced a critical blocker: compilation errors in the imported NPC's scripts that were incompatible with our recent Unity version. With limited C# knowledge and no online resources available for that specific version, we had to abandon the project. This experience was pivotal—it revealed the importance of programming fundamentals and directly motivated us to start a new project learning Java and Android development (the Wallpaper Changer app).`,
      fr: `Ce fut mon premier projet de développement de jeu 3D, réalisé au lycée dans le cadre de l'option ICN (Informatique et Création Numérique). L'objectif était de construire un RPG Viking en monde ouvert avec un village, un temple nordique, un système de quêtes, des PNJ avec animations, des armes et des ennemis (dragons, squelettes). Nous avons utilisé Unity 3D comme moteur de jeu.

  En raison de notre expérience limitée en programmation à l'époque, nous avons utilisé l'Asset Store d'Unity pour les environnements pré-construits (village viking, temple nordique), les modèles de personnages et les animations. Je me suis occupée de l'interface Unity, de la configuration des scènes, de l'importation des assets, de la modification du terrain, de l'intégration du contrôleur première personne, de l'attachement des armes et du placement des PNJ. Ma coéquipière a contribué à l'écriture du scénario et au design du jeu.

  Les réalisations techniques clés incluent : l'importation et la configuration d'un village viking complet, l'expansion de la zone accessible au joueur en modifiant les limites de volume (collider/respawn volume), l'attachement réussi d'une arme (hache, puis épée) au personnage en vue subjective, le téléchargement et le placement d'un soldat PNJ depuis l'Asset Store avec animations et scripts de mouvement pré-intégrés.

  Le projet a finalement rencontré un blocage critique : des erreurs de compilation dans les scripts du PNJ importé, incompatibles avec notre version récente d'Unity. Avec des connaissances limitées en C# et aucune ressource en ligne disponible pour cette version spécifique, nous avons dû abandonner le projet. Cette expérience a été décisive : elle a révélé l'importance des fondamentaux de la programmation et nous a directement motivées à démarrer un nouveau projet pour apprendre Java et le développement Android (l'application Wallpaper Changer).`,
    },
    features: [
      { en: 'Open-world Viking village environment from Asset Store', fr: 'Environnement de village viking en monde ouvert depuis l\'Asset Store' },
      { en: 'Nordic temple area for quest progression', fr: 'Zone de temple nordique pour la progression des quêtes' },
      { en: 'First-person controller (FPS) camera perspective', fr: 'Contrôleur en vue subjective (FPS)' },
      { en: 'Weapon attachment system (axe → sword)', fr: 'Système d\'attachement d\'arme (hache → épée)' },
      { en: 'NPC soldier with pre-built animations and movement scripts', fr: 'PNJ soldat avec animations et scripts de mouvement pré-intégrés' },
      { en: 'Terrain boundary expansion (collider/respawn volume)', fr: 'Expansion des limites de terrain (collider/volume de réapparition)' },
      { en: 'Planned: quest system, health bars, enemies (dragons, skeletons)', fr: 'Prévu : système de quêtes, barres de vie, ennemis (dragons, squelettes)' },
    ],
    challenges: [
      { en: 'Script compilation errors in imported NPC assets due to recent Unity version incompatibility', fr: 'Erreurs de compilation des scripts des PNJ importés en raison d\'une incompatibilité de version Unity' },
      { en: 'No online resources/forum solutions available for our specific Unity version', fr: 'Aucune ressource en ligne/solution de forum disponible pour notre version spécifique d\'Unity' },
      { en: 'Limited C# programming knowledge to debug and fix asset scripts', fr: 'Connaissances limitées en programmation C# pour déboguer et corriger les scripts des assets' },
      { en: 'Player movement restricted by invisible volume boundary (solved by expanding it)', fr: 'Déplacement du joueur limité par une limite de volume invisible (résolu en l\'agrandissant)' },
      { en: 'Windows permission issues with asset imports (resolved with teacher help)', fr: 'Problèmes de droits Windows avec les imports d\'assets (résolus avec l\'aide du professeur)' },
      { en: 'Weapon animation integration for axe and sword', fr: 'Intégration des animations d\'arme pour hache et épée' },
    ],
    reportPDFs: [],
    sprints: [
      {
        title: { en: 'Game Design & Tool Discovery', fr: 'Design du jeu & découverte de l\'outil' },
        description: { en: 'Wrote scenario (Viking village + Nordic temple), defined RPG scope (quests, dragons, skeletons). Discovered Unity 3D interface (Scene, Game, Hierarchy, Project panels). Watched YouTube tutorials and OpenClassrooms courses.', fr: 'Écriture du scénario (village viking + temple nordique), définition du scope RPG (quêtes, dragons, squelettes). Découverte de l\'interface Unity 3D (panneaux Scene, Game, Hierarchy, Project). Visionnage de tutoriels YouTube et cours OpenClassrooms.' },
      },
      {
        title: { en: 'Environment & Character Setup', fr: 'Configuration de l\'environnement & du personnage' },
        description: { en: 'Imported Viking village from Asset Store, chose Nordic temple environment. Decided on FPS (first-person) over TPC. Downloaded and attached axe weapon to character (later switched to sword). Fixed player boundary by expanding volume collider.', fr: 'Import du village viking depuis l\'Asset Store, choix de l\'environnement du temple nordique. Décision d\'utiliser la vue FPS plutôt que TPC. Téléchargement et attachement d\'une hache (puis épée) au personnage. Correction des limites du joueur en agrandissant le collider de volume.' },
      },
      {
        title: { en: 'NPC Integration & Critical Block', fr: 'Intégration des PNJ & blocage critique' },
        description: { en: 'Downloaded soldier NPC from Asset Store with pre-built animations and scripts. Resolved Windows permission issues (teacher assisted). Hit compilation errors in NPC scripts incompatible with recent Unity version. No online help available → project abandoned.', fr: 'Téléchargement d\'un soldat PNJ depuis l\'Asset Store avec animations et scripts pré-intégrés. Résolution des problèmes de droits Windows (assisté par professeur). Rencontre d\'erreurs de compilation dans les scripts du PNJ incompatibles avec la version récente d\'Unity. Aucune aide en ligne disponible → abandon du projet.' },
      },
    ],
  },

]

const educationHistory = [
  /*KTH*/
  {
    id: 'kth',
    school: {
      en: 'Royal Institute of Technology, Sweden (KTH)',
      fr: 'Ecole Polytechnique Royale de Suède (KTH)',
    },
    degree: {
      en: 'Bachelor of Science - BS, Information Technology',
      fr: 'Bachelor of Science - BS, Informatique',
    },
    period: '08/2023 – 06/2027',
    activities: {
      en: 'Chairperson of the committee for equality, diversity and equal conditions; Board member of the university chapter.',
      fr: 'Présidente du comité pour l’égalité, la diversité et des conditions équitables ; Membre du conseil du chapitre universitaire.',
    },
    skills: {
      en: ['Redux.js', 'RISC-V', 'React.js', 'Statistical Analysis Tools', 'Java', 'MIPS Assembly', 'SQL databases', 'C', 'MATLAB', 'JavaScript', 'PostgreSQL', 'Logisim', 'Algorithmic problem solving', 'Rust', 'Project management', 'SQL'],
      fr: ['Redux.js', 'RISC-V', 'React.js', 'Outils d’analyse statistique', 'Java', 'Assembleur MIPS', 'Bases de données SQL', 'C', 'MATLAB', 'JavaScript', 'PostgreSQL', 'Logisim', 'Résolution de problèmes algorithmiques', 'Rust', 'Gestion de projet', 'SQL'],
    },
    courses: [
      {
        name: 'Programming I',
        topics: 'Java, algorithmic problem solving, object oriented design',
      },
      {
        name: 'Digital Design',
        topics: 'CMOS circuit design, Logisim',
      },
      {
        name: 'Embedded Electronics',
        topics: 'Electrical circuit analysis',
      },
      {
        name: 'Intro to IT',
        topics: 'Teamwork, Version Control',
      },
      {
        name: 'Discrete Maths',
        topics: 'Error correcting codes, Hamming codes, graph theory',
      },
      {
        name: 'Algebra and Geometry',
        topics: '',
      },
      {
        name: 'Calculus in One Variable',
        topics: '',
      },
      {
        name: 'Basic Course in Maths',
        topics: '',
      },
      {
        name: 'Algorithms and Data Structures',
        topics: 'Algorithmic in C',
      },
      {
        name: 'Calculus in Several Variables',
        topics: '',
      },
      {
        name: 'Electromagnetism and Waves',
        topics: '',
      },
      {
        name: 'Industrial Management',
        topics: 'Product costing, CI analysis, bookkeeping, accounting, annual report, financial analysis',
      },
      {
        name: 'Intercultural Competence',
        topics: '',
      },
      {
        name: 'Probability Theory and Statistics',
        period: 'P1',
        topics: 'Matlab',
      },
      {
        name: 'Computer Hardware Engineering',
        period: 'P1',
        topics: 'C, MIPS, RISC-V, MARS simulator, RARS simulator, Logisim',
      },
      {
        name: 'Data Storage Paradigms',
        period: 'P2',
        topics: 'SQL, PostgreSQL, Maven, pgAdmin4',
      },
      {
        name: 'Operating Systems',
        period: 'P2',
        topics: '',
      },
      {
        name: 'Compilers and Execution Environments',
        period: 'P2',
        topics: 'Rust',
      },
      {
        name: 'Concurrent Programming',
        period: 'P3',
        topics: '',
      },
      {
        name: 'Networks and Communication',
        period: 'P3',
        topics: '',
      },
      {
        name: 'Digitalisation and Innovation',
        period: 'P3',
        topics: '',
      },
      {
        name: 'Project in Info and Com Tech',
        period: 'P4',
        topics: '',
      },
      {
        name: 'Interaction Programming and Dynamic Web',
        period: 'P2',
        topics: 'JS, React, Redux, HTML, CSS, JSX',
      },
      {
        name: 'Degree Project in IT',
        period: 'P1/P2 or P3/P4',
        topics: '',
      },
      {
        name: 'Ethical Hacking 1',
        period: 'P1',
        topics: '',
      },
      {
        name: 'Ethical Hacking 2',
        period: 'P2',
        topics: '',
      },
      {
        name: 'Introduction to Computer Security',
        period: 'P4',
        topics: '',
      },
    ],
  },

  /* GRENBOBLE */
  {
    id: 'grenoble-inp',
    school: {
      en: 'INP Phelma, Grenoble',
      fr: 'INP Phelma, Grenoble',
    },
    degree: {
      en: "Engineering diploma, Electronic & Communications Engineering",
      fr: "Diplôme d'ingénieur, Ingénierie électronique et des communications",
    },
    period: '09/2021 – 06/2022',
    activities: {
      en: 'Astronomy club member.',
      fr: 'Membre du club d’astronomie.',
    },
    firstYearCourses: {
      en: ['Data structures', 'Algorithmic', 'Probability and statistics', 'Analog and digital electronics', 'Automation', 'Computers and microprocessors', 'Signal processing'],
      fr: ['Structures de données', 'Algorithmique', 'Probabilités et statistiques', 'Électronique analogique et numérique', 'Automatisation', 'Ordinateurs et microprocesseurs', 'Traitement du signal'],
    },
    skills: {
      en: ['GNU Octave', 'C', 'GitLab', 'Signal processing', 'Bash', 'Object-oriented programming'],
      fr: ['GNU Octave', 'C', 'GitLab', 'Traitement du signal', 'Bash', 'Programmation orientée objet'],
    },
  },

  /* FAIDHERBE */
  {
    id: 'lycee-faiderbe',
    school: {
      en: 'Lycée Faidherbe, Lille',
      fr: 'Lycée Faidherbe, Lille',
    },
    degree: {
      en: 'Undergraduate courses for national competitive exams in Physics, Mathematics and Engineering',
      fr: 'Cours préparatoires aux concours nationaux en Physique, Mathématiques et Ingénierie',
    },
    period: '09/2019 – 06/2021',
    activities: {
      en: 'Preparation for entrance to Grenoble INP - Phelma.',
      fr: 'Préparation à l’intégration de Grenoble INP - Phelma.',
    },
    skills: {
      en: ['Keras', 'WordPress', 'Python', 'SQL databases', 'TensorFlow', 'SQL'],
      fr: ['Keras', 'WordPress', 'Python', 'Bases de données SQL', 'TensorFlow', 'SQL'],
    },
  },

  /* FENELON */
  {
    id: 'lycee-fenelon',
    school: {
      en: 'Lycée Fénelon, Lille',
      fr: 'Lycée Fénelon, Lille',
    },
    degree: {
      en: 'Baccalauréat of Science, Maths Major, Graduated with Highest Honors',
      fr: 'Baccalauréat scientifique, spécialité Mathématiques, mention Très Bien',
    },
    period: '09/2016 - 06/2019',
    activities: {
      en: 'Member of the ICT and robotics club (2h per week)',
      fr: "Membre du club ICN d'informatique et robotique (2h par semaine)",
    },
    skills: {
      en: ['Game dev', 'Unity', 'Android Studio', 'mobile app dev'],
      fr: ['Game dev', 'Unity', 'Android Studio', 'applications mobiles'],
    },
  },
]

const hackathonsHistory = [
  /* Bean Hacks 2026*/
  {
    title: 'BeanHacks',
    organizer: 'DevPost',
    judges: 'UC Berkeley Students',
    year: '2026',
    teckstack:{
      en: '',
      fr: ''
    },
    status:{
      en: 'Enrolled',
      fr: 'Inscrite'
    },
    link: 'https://beanhacks.devpost.com/',
  },

  /*Hack the kitty*/
  {
    title: 'Hack the Kitty',
    organizer: 'coding.kitty',
    judges: '',
    year: '2026',
    teckstack:{
      en: '',
      fr: ''
    },
    status:{
      en: 'Enrolled',
      fr: 'Inscrite'
    },
    link: 'https://hackthekitty.com/',
  },

  /*United Hacks V7*/
  {
    title: 'United Hacks V7',
    organizer: 'United Hacks',
    judges: '',
    year: '2026',
    teckstack:{
      en: '',
      fr: ''
    },
    status:{
      en: 'Enrolled',
      fr: 'Inscrite'
    },
    link: 'https://unitedhacks.hackunited.org/',
  },

]

const standaloneCourses = [
  {
    title: {
      en: 'Apprenez à programmer avec JavaScript',
      fr: 'Apprenez à programmer avec JavaScript',
    },
    provider: 'OpenClassrooms',
    year: '2026',
    notes: {
      en: 'Project-based JavaScript training completed during FastTyper development.',
      fr: 'Formation JavaScript basée sur des projets, réalisée pendant le développement de FastTyper.',
    },
  },
  {
    title: {
      en: 'Modélisez vos bases de données',
      fr: 'Modélisez vos bases de données',
    },
    provider: 'OpenClassrooms',
    year: '2025',
    link: 'https://openclassrooms.com/fr/courses/6938711-modelisez-vos-bases-de-donnees',
    notes: {
      en: 'Database modeling course covering relational databases and design principles.',
      fr: 'Cours de modélisation de bases de données couvrant les bases de données relationnelles et les principes de conception.',
    },
  },
  {
    title: {
      en: 'Gérez du code avec Git et GitHub',
      fr: 'Gérez du code avec Git et GitHub',
    },
    provider: 'OpenClassrooms',
    year: '2016',
    link: 'https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github',
    notes: {
      en: 'Version control and collaboration using Git and GitHub.',
      fr: 'Contrôle de version et collaboration avec Git et GitHub.',
    },
  },
  {
    title: {
      en: 'Concevez votre réseau TCP/IP',
      fr: 'Concevez votre réseau TCP/IP',
    },
    provider: 'OpenClassrooms',
    year: '2022',
    link: 'https://openclassrooms.com/fr/courses/6944606-concevez-votre-reseau-tcp-ip',
    notes: {
      en: 'Network design and TCP/IP protocol fundamentals.',
      fr: 'Conception de réseau et fondamentaux des protocoles TCP/IP.',
    },
  },
  {
    title: {
      en: 'Analysez les signaux 1D',
      fr: 'Analysez les signaux 1D',
    },
    provider: 'OpenClassrooms',
    year: '2021',
    notes: {
      en: 'Signal processing course focusing on 1D signals.',
      fr: 'Cours de traitement du signal axé sur les signaux 1D.',
    },
  },
  {
    title: {
      en: 'Apprenez à programmer en C',
      fr: 'Apprenez à programmer en C',
    },
    provider: 'OpenClassrooms',
    year: '2014',
    notes: {
      en: 'Introduction to programming in C language.',
      fr: 'Introduction à la programmation en langage C.',
    },
  },
  {
    title: {
      en: 'Scrum Fundamentals Certified',
      fr: 'Scrum Fundamentals Certified',
    },
    provider: 'ScrumStudy',
    year: '2026',
    link: 'https://www.scrumstudy.com/certification/scrum-fundamentals-certified',
    wip: true,
    notes: {
      en: 'Currently pursuing Scrum Fundamentals certification.',
      fr: 'Actuellement en cours de certification Scrum Fundamentals.',
    },
  },
]

const skills = [
  'Python', 'Java', 'JavaScript/TypeScript', 'React', 'PostgreSQL', 'HTML/CSS',
  'JDBC', 'Maven', 'REST APIs', 'Unit Testing',
  'Pandas', 'Matplotlib', 'TensorFlow/Keras (basic)', 'Algorithm Design',
  'C', 'Assembly (MIPS/RISC‑V)', 'Linux', 'Bash', 'Multithreading (pthreads, OpenMP)',
  'Git/GitHub/GitLab', 'Docker', 'CI/CD', 'VS Code', 'DBeaver', 'pgAdmin4',
  'Agile/Scrum', 'LaTeX', 'GIMP',
  'Database Design (Conceptual, Logical, Physical)',
  'ER Diagram',
  'OLAP Queries',
  'Query Optimization',
  'Astah Professional',
  'TensorFlow',
  'Keras',
  'Neural Networks (Dense, LSTM)',
  'Regression Analysis (Polynomial, SciPy)',
]

const contact = {
  email: 'sa.serbouti@protonmail.com',
}

export { header, about, projects, educationHistory, standaloneCourses, skills, contact, hackathonsHistory }
