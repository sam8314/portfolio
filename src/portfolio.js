const header = {
  homepage: 'https://sam8314.github.io/portfolio', // Update this to your GitHub Pages URL
  title: 'Samia Serbouti',
}

const about = {
  name: 'Samia Serbouti',
  role: 'Software Engineering from KTH with Backend Focus',
  picture: 'https://media.licdn.com/dms/image/v2/D4E03AQH0_5sOvg1wxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694356364808?e=1779321600&v=beta&t=ajJD6Te-rVFMz80bAzEzg_1eVphh77PXT6bdvmwfDcA',
  
  description: `Engineering student at KTH with hands-on experience in PostgreSQL, Python, and full-stack development. Strong foundation in database systems, algorithms, and software engineering. Passionate about sustainable digitalization and data-driven solutions for real-world problems. My coursework includes Databases, Software Engineering, Data Structures, Algorithms, and Computer Networks. I'm actively improving skills in DevOps practices, data analysis, and security fundamentals, with a goal of contributing across the data-infrastructure-security stack.`,
  
  resume: '/portfolio/Resume_Serbouti.pdf', // Local PDF file in public folder
  social: {
    linkedin: 'https://www.linkedin.com/in/samia-serbouti-0595b1229',
    github: 'https://github.com/sam8314',
    email: 'sa.serbouti@protonmail.com',
  },
}

const projects = [
  {
    id: 'housebite',
    name: 'HouseBite, Virtual Pantry Manager',
    description: 'A progressive web app that turns your household into a shared smart pantry: tracking expiry dates, suggesting recipes to reduce waste, scanning receipts, and managing shared budgets. Built for households to waste less and spend less.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Mantine UI', 'Spoonacular API', 'Docker', 'OpenAI OCR', 'PWA'],
    sourceCode:'',
    livePreview: 'https://housebite.app/',
    image: '',
    teamSize: 7,
    role: 'Product Owner',
    year: 2026,
    wip: false,
    detailedDescription: `HouseBite is a comprehensive household pantry solution that helps families reduce food waste and manage their budgets effectively. The application features real-time synchronization across household members, intelligent recipe suggestions based on available ingredients, and automated expiry tracking.`,
    features: [
      'Smart pantry inventory with expiry date tracking',
      'Recipe suggestions based on available ingredients',
      'AI receipt scanning for automatic item entry with OpenAi',
      'Shared household budgets and expense tracking',
      'Progressive Web App for mobile and desktop',
      'Real-time synchronization with Supabase',
      'Comprehensive account management with Google login or email confirmation'
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
      { title: 'Sprint 1: Project Foundation', description: 'Core project setup. Core frontend and backend implementation. Share household model that the rest of the app builds on. Households: create, join via invite code, member allocations' },
      { title: 'Sprint 2: Core Product Experience', description: 'Focused on delivering the core user-facing features that define the everyday HouseBite experience. Household dashboard with a filterable “expiring soon” view. Recipe suggestions, with support for diets and intolerances. Receipt scanning. Account page with dietary restriction profiles for each member' },
      { title: 'Sprint 3: Product Identity & Robustness', description: 'Focused on improving the product identity and refining key household and receipt workflows. Visual identity refresh with a custom logo. Finished shopping list flow and admin roles per household. Email verification, household colours, and receipt export to Excel' },
      { title: 'Sprint 4: Final tweaks', description: 'The last sprint built on the stronger product foundation from the first three sprints and focused on the highest-value final improvements.' },
    ],
  },
  {
    id: 'slso-energy',
    name: 'SLSO Healthcare Energy Analysis',
    description: 'Data analysis project for Stockholm County healthcare provider (SLSO) to identify energy inefficiencies across 185+ facilities. Applied z-score anomaly detection, weather correlation analysis (Pearson correlation), and temporal pattern identification to flag clinics with unreasonable energy consumption.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis', 'Weather Data', 'Sustainability'],
    sourceCode: 'https://github.com/daDevBoat/SLSOProject',
    livePreview: '',
    image: '',
    images: [
    ],
    teamSize: 5,
    role: 'Dev',
    year: 2025,
    wip: false,
    detailedDescription: `A comprehensive data analysis project aimed at identifying energy inefficiencies in Stockholm County's healthcare facilities. Using statistical methods and weather correlation analysis, we identified patterns and anomalies in energy consumption across 185+ buildings.`,
    features: [
      'Z-score anomaly detection for energy consumption',
      'Pearson correlation analysis with weather data',
      'Temporal pattern identification across seasons',
      'Building classification system (D-class, E-class)',
    ],
    challenges: [],
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
    id: 'socket-programming',
    name: 'TCP Networking suite',
    description: 'A comprehensive networking toolkit demonstrating TCP socket programming, HTTP proxy servers, and concurrent client handling in Java.',
    stack: ['Networking', 'Java', 'Concurrent Programming', 'HTTP'],
    teamSize: 1,
    role: 'Dev',
    year: 2026,
    wip: false,
    detailedDescription: '',
    sourceCode: 'https://github.com/sam8314/socket-programming',
    sprints:[
      {title: 'TCP Client', description:'Reusable TCP client library with advanced features'},
      {title: 'TCP Ask', description:'Command-line TCP client. Manual testing and debugging of TCP servers'},
      {title: 'HTTP Ask', description:'Single-threaded HTTP-to-TCP proxy. Simple HTTP gateway to TCP services'},
      {title: 'ConcHTTPAsk', description:'Multi-threaded HTTP proxy. Production-ready concurrent request handling'}
    ]
  },
  {
    id: 'university-staff',
    name: 'University Staff Management App',
    description: 'Database application for university course layout planning, teaching load allocation, and staff scheduling. Supports course instances, teaching activities, department and teacher management, and full load reporting.',
    stack: ['Java', 'JDBC', 'PostgreSQL', 'Maven', 'Java Swing', 'FlatLaf'],
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
    role: 'Dev',
    year: 2025,
    wip: false,
    detailedDescription: `This project implements a single university database application for course layout and teaching load allocation. It stores course layouts with unique course codes, names, HP, minimum and maximum student limits, and teaching activities. Course instances are created for specific academic periods with registered student counts, and the app calculates derived examination and administration hours based on HP and enrollment.

The system supports planning of lectures, labs, tutorials, seminars, and other teaching activities. It applies multiplication factors for preparation time, so planned hours are transformed into actual teacher workload. Departments, teachers, and managers are modeled so allocations can be tracked across course instances. A teacher can be allocated to multiple course instances, but no more than four in the same period.

The database is designed around the project task requirements: flexible course layouts, course instances per period, teaching activities, department and employee details, and report queries for planned versus actual workloads. The application also provides teaching cost calculations and allocation management through a JDBC + Swing desktop interface.`,
    features: [
      'Course layout planning and course instance modeling',
      'Teaching activity and workload allocation',
      'Teaching cost reporting for course instances and departments',
      'Teacher allocation limits and period constraints',
      'Flexible activity types with preparation factor rules',
    ],
    reportPDFs: [
      {
        title: 'Sprint 1 Report',
        description: 'Project setup, conceptual model, and database schema design and implementation in PostgreSQL via pgAdmin4',
        src: '/reports/university-staff/sprint-1-report.pdf',
      },
      {
        title: 'Sprint 2 Report',
        description: 'Implementation of an OLAP (Online Analytical Processing) queries and views as well as an efficiency analysis of the efficiency of one of the queries with EXPLAIN ANALYZE',
        src: '/reports/university-staff/sprint-2-report.pdf',
      },
      {
        title: 'Sprint 3 Report',
        description: 'Implementation of a layered Java application with focus on correct ACID transaction handling and a clean separation of concerns between view, controller, service, and integration (DAO) layers',
        src: '/reports/university-staff/sprint-3-report.pdf',
      },
    ],
    sprints: [
      { title: 'Sprint 1: Database Design', description: 'Design of the logical/physical model on Astah and wrote build and populate scripts in PostgreSQL' },
      { title: 'Sprint 2: Core CRUD', description: 'Wrote OLAP queries and views with thorough efficiency analysis' },
      { title: 'Sprint 3: Allocation Logic', description: 'Built layered JDBC app using Maven and Flatlaf UI' },
    ],
  },
  {
    id: 'fast-typer',
    name: 'FastTyper',
    description: 'A JS webapp that helps users grow their typing speed',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/sam8314/fast-typer',
    livePreview: '',
    teamSize: '1',
    role: 'Dev',
    year: '2026',
    wip: true,
    detailedDescription: '',
    features: [],
    challenges: [],
    images: [],
    sprints: [
      {title: 'Sprint 1: ', description: ''},
      {title: 'Sprint 1: ', description: ''},
      {title: 'Sprint 1: ', description: ''},
      
    ],
  },
  {
    id: 'alter-flughafen',
    name: 'Alter Flughafen',
    description: 'A 2D educational game in Python to teach about wildlife conservation. Created during volunteer work in Karlsruhe, Germany. Designed to engage diverse age groups in environmental awareness.',
    stack: ['Python', 'Game dev'],
    sourceCode: 'https://github.com/sam8314/alter-flughafen-V1',
    livePreview: '',
    image: '',
    teamSize: 1,
    role: 'Dev',
    year: 2022,
    wip: false,
    detailedDescription: ``,
    features: [
      'GUI',
    ],
    challenges: [],
    images: [],
    sprints: [
      { title: 'Sprint 1: Core Architecture', description: 'Designed system architecture, set up C++ project structure' },
      { title: 'Sprint 2: Implementation', description: 'Implemented core simulation logic and resource management' },
      { title: 'Sprint 3: Testing', description: 'Testing, debugging, and performance optimization' },
    ],
  },
  {
    id: 'baxandall',
    name: 'Baxandall Filter',
    description: 'A bass and treble filter built with no potentiometer',
    stack: 'Embedded electronics',
    year: 2024,
    wip: false,
    teamSize: 1,
    images: ['baxandall/baxandall.png']
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
