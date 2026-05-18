import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    navEducation: 'Education',
    navHackathons: 'Hackathons',
    searchPlaceholder: 'Search projects, skills...',
    noResults: 'No results found',
    resumeButton: 'Resume',
    emailButton: 'Email me',
    projectNotFound: 'Project not found',
    backToHome: 'Back to Home',
    backToHomepage: 'Back to Homepage',
    teamSizeLabel: 'Team Size:',
    roleLabel: 'Role:',
    yearLabel: 'Year:',
    person: 'person',
    people: 'people',
    overview: 'Overview',
    keyFeatures: 'Key Features',
    technologiesUsed: 'Technologies Used',
    developmentSprints: 'Development Sprints',
    documents: 'Documents',
    documentsInEnglishNote: 'These documents are in English.',
    documentAvailable: 'is available as a PDF.',
    openInNewTab: 'Open in a new tab',
    openReport: 'Open Report',
    viewSourceCode: 'View Source Code',
    liveDemo: 'Live Demo',
    moreAboutProject: 'More about the project',
    toggleLanguageLabel: 'Toggle language',
    languageButton: 'FR',
    educationTitle: 'Education',
    educationActivitiesLabel: 'Activities & associations',
    educationFirstYearLabel: 'First-year coursework',
    educationSkillsLabel: 'Key skills developed',
    educationCoursesTitle: 'Standalone courses',
    educationAllCoursesLabel: 'All Courses',
    courseProvider: 'Provider',
    courseYear: 'Year',
    courseNotes: 'Notes',
    courseName: 'Course Name',
    courseYear: 'Year',
    courseTopics: 'Topics',
    introGreeting: "hi, I'm",
    contactTitle: 'Contact',
    aboutRolePrefix: '',
    projectsTitle: 'Projects',
    skillsTitle: 'Skills',
    skillsProjectsTitle: 'Projects using',
    projectName: 'Project Name',
    projectType: 'Type',
    projectYear: 'Year',
    noProjectsForSkill: 'No projects found using this skill.',
    hoverSkillPrompt: 'Click on a skill to see projects that use it.',
    personTooltip: 'Person',
    roleTooltip: 'Role',
    yearTooltip: 'Year',
    wipTooltip: 'Work in Progress',
    sourceCodeLabel: 'Source code',
    livePreviewLabel: 'Live preview',
    pdfFallback: 'Open in a new tab',
    link: 'Link',
    hackathonsTitle: 'Hackathons',
    hackathonTitle: 'Hackathon Name',
    hackathonOrganizer: 'Organizer',
    hackathonYear: 'Year',
    hackathonTeckStack: 'Technologies',
    hackathonStatus: 'Status',
    hackathonJudges: 'Judges',

  },
  fr: {
    navProjects: 'Projets',
    navSkills: 'Compétences',
    navContact: 'Contact',
    navEducation: 'Formation',
    navHackathons: 'Hackathons',
    searchPlaceholder: 'Rechercher projets, compétences...',
    noResults: 'Aucun résultat trouvé',
    resumeButton: 'CV',
    emailButton: 'Envoyez-moi un email',
    projectNotFound: 'Projet introuvable',
    backToHome: 'Retour à l’accueil',
    backToHomepage: 'Retour à la page d’accueil',
    teamSizeLabel: 'Taille de l’équipe :',
    roleLabel: 'Rôle :',
    yearLabel: 'Année :',
    person: 'personne',
    people: 'personnes',
    overview: 'Vue d’ensemble',
    keyFeatures: 'Fonctionnalités clés',
    technologiesUsed: 'Technologies utilisées',
    developmentSprints: 'Sprints de développement',
    documents: 'Documents',
    documentsInEnglishNote: 'Ces documents sont en anglais.',
    documentAvailable: 'est disponible en PDF.',
    openInNewTab: 'Ouvrir dans un nouvel onglet',
    openReport: 'Ouvrir le rapport',
    viewSourceCode: 'Voir le code source',
    liveDemo: 'Démonstration',
    moreAboutProject: 'En savoir plus sur le projet',
    toggleLanguageLabel: 'Changer de langue',
    languageButton: 'EN',
    educationTitle: 'Formation',
    educationActivitiesLabel: 'Activités et associations',
    educationFirstYearLabel: 'Cours de première année',
    educationSkillsLabel: 'Compétences clés acquises',
    educationCoursesTitle: 'Formations indépendantes',
    educationAllCoursesLabel: 'Tous les cours',
    courseProvider: 'Organisme',
    courseYear: 'Année',
    courseNotes: 'Remarques',
    courseName: 'Nom du cours',
    courseYear: 'Année',
    courseTopics: 'Sujets',
    introGreeting: 'bonjour, je suis', 
    contactTitle: 'Contact',
    aboutRolePrefix: '',
    projectsTitle: 'Projets',
    skillsTitle: 'Compétences',
    skillsProjectsTitle: 'Projets utilisant',
    projectName: 'Nom du projet',
    projectType: 'Type',
    projectYear: 'Année',
    noProjectsForSkill: 'Aucun projet trouvé utilisant cette compétence.',
    hoverSkillPrompt: 'Cliquez sur une compétence pour voir les projets qui l\'utilisent.',
    personTooltip: 'Personne',
    roleTooltip: 'Rôle',
    yearTooltip: 'Année',
    wipTooltip: 'Travail en cours',
    sourceCodeLabel: 'Code source',
    livePreviewLabel: 'Aperçu',
    pdfFallback: 'Ouvrir dans un nouvel onglet',
    link: 'Lien',
    hackathonsTitle: 'Hackathons',
    hackathonTitle: 'Nom du hackathon',
    hackathonOrganizer: 'Organisme',
    hackathonYear: 'Année',
    hackathonTeckStack: 'Technologies',
    hackathonStatus: 'Status',
    hackathonJudges: 'Juges',

  },
}

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Initialize from localStorage, default to 'en' if not found
    return localStorage.getItem('language') || 'en'
  })

  // Save to localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'))
  }

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, strings: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }
