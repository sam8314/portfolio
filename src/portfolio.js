const header = {
  homepage: 'https://sam8314.github.io', // Update this to your GitHub Pages URL
  title: 'Sam Serbouti',
}

const about = {
  name: 'Samia Serbouti',
  role: 'Software Engineering Student @ KTH with Backend Focus',
  picture: 'https://media.licdn.com/dms/image/v2/D4E03AQH0_5sOvg1wxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694356364808?e=1779321600&v=beta&t=ajJD6Te-rVFMz80bAzEzg_1eVphh77PXT6bdvmwfDcA',
  
  description: `Backend-focused software engineering student at KTH with hands-on experience in PostgreSQL, Python, and full-stack development. Strong foundation in database systems, algorithms, and software engineering. Passionate about sustainable digitalization and data-driven solutions for real-world problems.

My coursework includes Databases, Software Engineering, Data Structures, Algorithms, and Computer Networks. I'm actively improving skills in DevOps practices, data analysis, and security fundamentals, with a goal of contributing across the data-infrastructure-security stack.`,
  
  resume: '/Resume_Serbouti.pdf', // Local PDF file in public folder
  social: {
    linkedin: 'www.linkedin.com/in/samia-serbouti-0595b1229',
    github: 'https://github.com/sam8314',
    email: 'sa.serbouti@protonmail.com',
  },
}

const projects = [
  {
    id: 'housebite',
    name: 'HouseBite – Smart Pantry & Household Manager',
    description: 'A progressive web app that turns your household into a shared smart pantry — tracking expiry dates, suggesting recipes to reduce waste, scanning receipts, and managing shared budgets. Built for households to waste less and spend less.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Mantine UI', 'Spoonacular API', 'Tesseract.js OCR', 'PWA'],
    sourceCode:'',
    livePreview: 'https://housebite.app/',
    image: 'housebite.png',
    teamSize: 7,
    role: 'Product Owner',
    year: 2026,
    wip: true,
    detailedDescription: `HouseBite is a comprehensive household management solution that helps families reduce food waste and manage their budgets effectively. The application features real-time synchronization across household members, intelligent recipe suggestions based on available ingredients, and automated expiry tracking.`,
    features: [
      'Smart pantry inventory with expiry date tracking',
      'Recipe suggestions based on available ingredients',
      'OCR receipt scanning for automatic item entry',
      'Shared household budgets and expense tracking',
      'Progressive Web App for mobile and desktop',
      'Real-time synchronization with Supabase',
    ],
    challenges: [
      'Implementing efficient OCR for receipt scanning',
      'Designing a scalable database schema for multi-household support',
      'Optimizing real-time synchronization performance',
    ],
    images: ['housebite.png', 'housebite.png', 'housebite.png'],
    sprints: [
      { title: 'Sprint 1: Core Setup', description: 'Set up React 19 + TypeScript + Vite project structure, configured Supabase backend, designed database schema' },
      { title: 'Sprint 2: Pantry Management', description: 'Implemented pantry inventory CRUD operations, expiry date tracking, and notifications' },
      { title: 'Sprint 3: Recipe Integration', description: 'Integrated Spoonacular API, built recipe suggestion algorithm based on available ingredients' },
      { title: 'Sprint 4: OCR & Budget', description: 'Implemented Tesseract.js for receipt scanning, built budget tracking and expense management' },
      { title: 'Sprint 5: PWA & Polish', description: 'Converted to PWA, added offline support, UI/UX improvements, testing and deployment' },
    ],
  },
  {
    id: 'slso-energy',
    name: 'SLSO Healthcare Energy Analysis',
    description: 'Data analysis project for Stockholm County healthcare provider (SLSO) to identify energy inefficiencies across 185+ facilities. Applied z-score anomaly detection, weather correlation analysis (Pearson correlation), and temporal pattern identification to flag clinics with unreasonable energy consumption. Identified that 55% of buildings had consumption spikes, with winter months accounting for 50.6% of anomalies. Flagged E-class buildings for unified action plans and D-class for individual assessment',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis', 'SMHI Weather Data', 'Energy Analytics'],
    sourceCode: 'https://github.com/sam8314/slso-energy-analysis',
    livePreview: '',
    image: 'slso-energy.png',
    teamSize: 4,
    role: 'Data Analyst',
    year: 2024,
    wip: false,
    detailedDescription: `A comprehensive data analysis project aimed at identifying energy inefficiencies in Stockholm County's healthcare facilities. Using statistical methods and weather correlation analysis, we identified patterns and anomalies in energy consumption across 185+ buildings.`,
    features: [
      'Z-score anomaly detection for energy consumption',
      'Pearson correlation analysis with weather data',
      'Temporal pattern identification across seasons',
      'Building classification system (D-class, E-class)',
      'Automated reporting and visualization',
    ],
    challenges: [
      'Handling missing and inconsistent data from multiple sources',
      'Correlating weather data with energy consumption patterns',
      'Developing actionable recommendations for diverse building types',
    ],
    images: ['slso-energy.png', 'slso-energy.png'],
    sprints: [
      { title: 'Sprint 1: Data Collection', description: 'Gathered energy consumption data from 185+ facilities, integrated SMHI weather data' },
      { title: 'Sprint 2: Data Cleaning', description: 'Cleaned and normalized data, handled missing values, established data quality metrics' },
      { title: 'Sprint 3: Statistical Analysis', description: 'Implemented z-score anomaly detection, Pearson correlation analysis with weather data' },
      { title: 'Sprint 4: Pattern Identification', description: 'Identified temporal patterns, classified buildings by energy efficiency' },
      { title: 'Sprint 5: Reporting', description: 'Created visualizations, generated actionable recommendations, prepared final report' },
    ],
  },
  {
    id: 'university-staff',
    name: 'University Staff Management App',
    description: 'JDBC application for university staff to manage course instances, teaching loads, and instructor allocations. Features include teaching cost calculation, activity allocation/deallocation, and dynamic teaching activity creation.',
    stack: ['Java', 'JDBC', 'PostgreSQL', 'Maven', 'Java Swing', 'FlatLaf'],
    sourceCode: 'https://github.com/sam8314/university-staff-app',
    livePreview: '',
    image: 'university-app.png',
    teamSize: 2,
    role: 'Backend Developer',
    year: 2024,
    wip: false,
    detailedDescription: `A desktop application designed to streamline university staff management, course allocation, and teaching load tracking. Built with Java Swing and PostgreSQL, it provides an intuitive interface for managing complex academic scheduling.`,
    features: [
      'Course instance management',
      'Teaching load calculation and tracking',
      'Instructor allocation and scheduling',
      'Dynamic teaching activity creation',
      'Real-time cost calculation',
      'Modern UI with FlatLaf theme',
    ],
    challenges: [
      'Designing efficient database queries for complex relationships',
      'Implementing transaction management for data consistency',
      'Creating an intuitive UI for complex scheduling operations',
    ],
    images: ['university-app.png', 'university-app.png'],
    sprints: [
      { title: 'Sprint 1: Database Design', description: 'Designed PostgreSQL schema, implemented JDBC connection layer' },
      { title: 'Sprint 2: Core CRUD', description: 'Built basic CRUD operations for courses, instructors, and activities' },
      { title: 'Sprint 3: Allocation Logic', description: 'Implemented teaching load calculation and allocation algorithms' },
      { title: 'Sprint 4: UI Development', description: 'Created Java Swing interface with FlatLaf, integrated with backend' },
      { title: 'Sprint 5: Testing & Polish', description: 'Unit testing, bug fixes, performance optimization, documentation' },
    ],
  },
  {
    id: 'alter-flughafen',
    name: 'Alter Flughafen (Legacy Airport Project)',
    description: '[Add a brief description here based on what this project does - e.g., "A simulation or visualization project for airport operations" or "C++ systems programming project"]. Update this with actual details from the repo.',
    stack: ['C++', 'Systems Programming', 'Git'],
    sourceCode: 'https://github.com/sam8314/alter-flughafen-V1',
    livePreview: '',
    image: '',
    teamSize: 3,
    role: 'Developer',
    year: 2023,
    wip: false,
    detailedDescription: `A C++ systems programming project focused on airport operations simulation. This project demonstrates low-level programming skills and understanding of system architecture.`,
    features: [
      'Airport operations simulation',
      'Resource management',
      'Event-driven architecture',
    ],
    challenges: [
      'Memory management in C++',
      'Concurrent operations handling',
      'Performance optimization',
    ],
    images: [],
    sprints: [
      { title: 'Sprint 1: Core Architecture', description: 'Designed system architecture, set up C++ project structure' },
      { title: 'Sprint 2: Implementation', description: 'Implemented core simulation logic and resource management' },
      { title: 'Sprint 3: Testing', description: 'Testing, debugging, and performance optimization' },
    ],
  },
  {
    id: 'ecological-game',
    name: 'Ecological Education Game (Ökombil)',
    description: 'Developed a 2D educational game in Python to teach wildlife conservation. Created during volunteer work in Karlsruhe, Germany. Designed to engage diverse age groups in environmental awareness.',
    stack: ['Python', '2D Game Development', 'GitHub', 'Environmental Education'],
    sourceCode: '',
    livePreview: '',
    image: 'ecological-game.png',
    teamSize: 2,
    role: 'Game Developer',
    year: 2023,
    wip: false,
    detailedDescription: `An educational game developed during volunteer work to teach children and young adults about wildlife conservation and environmental protection. The game uses interactive storytelling and challenges to engage players in learning about ecology.`,
    features: [
      '2D game mechanics with Python',
      'Educational content about wildlife conservation',
      'Interactive storytelling',
      'Age-appropriate difficulty levels',
      'Progress tracking and achievements',
    ],
    challenges: [
      'Balancing educational content with engaging gameplay',
      'Designing for diverse age groups',
      'Creating accessible and intuitive controls',
    ],
    images: ['ecological-game.png'],
    sprints: [
      { title: 'Sprint 1: Game Design', description: 'Designed game mechanics, educational content, and storyline' },
      { title: 'Sprint 2: Core Development', description: 'Implemented game engine, character movement, and basic interactions' },
      { title: 'Sprint 3: Content Creation', description: 'Added educational content, challenges, and achievements' },
      { title: 'Sprint 4: Testing & Refinement', description: 'User testing with target age groups, refinements, and bug fixes' },
    ],
  },
]

const skills = [
  // Full-Stack & Languages
  'Python', 'Java', 'JavaScript/TypeScript', 'React', 'PostgreSQL', 'HTML/CSS',
  // Backend & Databases
  'JDBC', 'Maven', 'REST APIs', 'Unit Testing',
  // Data & ML
  'Pandas', 'Matplotlib', 'TensorFlow/Keras (basic)', 'Algorithm Design',
  // Systems Programming
  'C', 'Assembly (MIPS/RISC‑V)', 'Linux', 'Bash', 'Multithreading (pthreads, OpenMP)',
  // DevOps & Tools
  'Git/GitHub/GitLab', 'Docker', 'CI/CD', 'VS Code', 'DBeaver', 'pgAdmin4',
  // Additional
  'Agile/Scrum', 'LaTeX', 'GIMP'
]

const contact = {
  email: 'sa.serbouti@protonmail.com',
}

export { header, about, projects, skills, contact }
