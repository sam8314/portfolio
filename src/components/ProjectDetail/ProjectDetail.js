import { useParams } from 'react-router-dom'
import { projects } from '../../portfolio'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useState, useRef } from 'react'
import { useLanguage } from '../../contexts/language'
import { getLocalizedValue } from '../../utils/i18n'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const { language, strings } = useLanguage()
  const project = projects.find((p) => p.id === projectId)
  const [zoomedImage, setZoomedImage] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideshowRef = useRef(null)
  const containerRef = useDropAnimation()
  const headerRef = useDropAnimation(100)
  const slideshowRef2 = useDropAnimation(200)
  const descRef = useDropAnimation(300)

  const handleImageClick = (index) => {
    setZoomedImage(index)
  }

  const closeZoom = () => {
    setZoomedImage(null)
  }

  const getImageCaption = (projectId, imageIndex) => {
    const captions = {
      'housebite': {
        0: {
          en: 'Users can join several households and see at a quick glance which products should be consumed first.',
          fr: 'Les utilisateurs peuvent rejoindre plusieurs foyers et voir en un coup d’œil quels produits doivent être consommés en premier.',
        },
        1: {
          en: 'Users can customize their accounts and set their personal diets that apply across all of their households.',
          fr: 'Les utilisateurs peuvent personnaliser leur compte et définir des régimes personnels valables pour tous leurs foyers.',
        },
        2: {
          en: 'Users can track the overall budget of each household',
          fr: 'Les utilisateurs peuvent suivre le budget global de chaque foyer',
        },
        3: {
          en: 'Users can see all the products in a specific household delete them in bulk or search for recipes using selected products.',
          fr: 'Les utilisateurs peuvent voir tous les produits d’un foyer spécifique, les supprimer en masse ou chercher des recettes avec les produits sélectionnés.',
        },
        4: {
          en: 'An OpenAI scanner can parse any receipt and suggest expiration dates (which the user can edit) and then adds them to a households pantry.',
          fr: 'Un scanner OpenAI peut analyser un reçu, suggérer des dates de péremption (modifiables par l’utilisateur) et les ajouter au garde-manger du foyer.',
        },
        5: {
          en: 'Users can search and save their favourite recipes but also add the missing ingredients to the shopping list of a household.',
          fr: 'Les utilisateurs peuvent rechercher et enregistrer leurs recettes favorites, puis ajouter les ingrédients manquants à la liste de courses du foyer.',
        },
        6: {
          en: 'A shared shopping list allows for live edits for efficient shopping.',
          fr: 'Une liste de courses partagée permet des modifications en direct pour un shopping efficace.',
        },
      },
      'university-staff': {
        0: {
          en: 'The complete logical-physical database schema on Astah Professional',
          fr: 'Le schéma logique-physique complet sur Astah Professional',
        },
        1: {
          en: 'The schema for courses',
          fr: 'Le schéma des cours',
        },
        2: {
          en: 'The schema for a university employee',
          fr: 'Le schéma d’un employé universitaire',
        },
        3: {
          en: 'The schema for a person',
          fr: 'Le schéma d’une personne',
        },
        4: {
          en: 'The user can compute the cost for a course based on hourly pay',
          fr: 'L’utilisateur peut calculer le coût d’un cours en fonction du taux horaire',
        },
        5: {
          en: 'The user can allocate a teacher to a course',
          fr: 'L’utilisateur peut affecter un enseignant à un cours',
        },
        6: {
          en: 'After allocation',
          fr: 'Après affectation',
        },
        7: {
          en: 'The user can deallocate a teacher to a course',
          fr: 'L’utilisateur peut désaffecter un enseignant d’un cours',
        },
        8: {
          en: 'The user can create new types of activities for a course',
          fr: 'L’utilisateur peut créer de nouveaux types d’activités pour un cours',
        },
      },
      'slso-energy': {
        0: {
          en: 'Spotting faulty buildings to immediate action: our strategy alignes with Höjer et al.’s path of intensifying',
          fr: 'Identifier les bâtiments défaillants et passer rapidement à l’action : notre stratégie s’aligne sur la voie d’intensification de Höjer et al.',
        },
        1: {
          en: 'Distribution analysis of outside temperature to electricity consumption correlation',
          fr: 'Analyse de distribution de la corrélation entre température extérieure et consommation électrique',
        },
        2: {
          en: 'Distribution of correlation coefficients and standard deviation broken down by building energy types',
          fr: 'Distribution des coefficients de corrélation et de l’écart type par type d’énergie des bâtiments',
        },
        3: {
          en: 'Z-score distribution confirms that the consumptions follow an approximately normal distribution',
          fr: 'La distribution des scores Z confirme que les consommations suivent une distribution approximativement normale',
        },
        4: {
          en: 'The monthly spike results show that a strong seasonal pattern in consumption anomalie',
          fr: 'Les résultats des pics mensuels montrent un fort motif saisonnier dans les anomalies de consommation',
        },
        5: {
          en: 'Energy class analysis suggests that buildings with low energy class are most likely to consume more energy and implies higher chance for spikes',
          fr: 'L’analyse des classes énergétiques suggère que les bâtiments à faible classe énergétique consomment davantage et ont plus de risques de pics',
        },
        6: {
          en: 'Monthly distribution of peak energy consumption flags across the buildings',
          fr: 'Distribution mensuelle des indicateurs de consommation maximale dans les bâtiments',
        },
      },
    }

    return getLocalizedValue(captions[projectId]?.[imageIndex], language) || `${getLocalizedValue(project.name, language)} screenshot ${imageIndex + 1}`
  }

  const nextZoomedImage = () => {
    setZoomedImage((prev) => (prev + 1) % project.images.length)
  }

  const prevZoomedImage = () => {
    setZoomedImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  if (!project) {
    return (
      <div className='project-detail' ref={containerRef}>
        <div className='project-detail__container'>
          <h2>{strings.projectNotFound}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className='project-detail' ref={containerRef}>
      <div className='project-detail__container'>
        <div className='project-detail__header' ref={headerRef}>
          <h1>{getLocalizedValue(project.name, language)}</h1>
          <div className='project-detail__meta'>
            <span className='meta-badge'>
              <strong>{strings.teamSizeLabel}</strong> {project.teamSize} {project.teamSize === 1 ? strings.person : strings.people}
            </span>
            <span className='meta-badge'>
              <strong>{strings.roleLabel}</strong> {getLocalizedValue(project.role, language)}
            </span>
            <span className='meta-badge'>
              <strong>{strings.yearLabel}</strong> {project.year}
            </span>
            {project.wip && <span className='meta-badge wip-badge'>WIP</span>}
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <div className='project-detail__slideshow' ref={slideshowRef2}>
            <div className='slideshow-main'>
              {project.images.length > 1 && (
                <button className='slide-arrow left' onClick={() => setCurrentSlide((s) => (s - 1 + project.images.length) % project.images.length)}>
                  <ChevronLeftIcon />
                </button>
              )}

              <div className='main-image-wrap'>
                <img
                  src={
                    project.images[currentSlide].startsWith('http')
                      ? project.images[currentSlide]
                      : `${process.env.PUBLIC_URL}/images/${project.images[currentSlide]}`
                  }
                  alt={`${getLocalizedValue(project.name, language)} screenshot ${currentSlide + 1}`}
                  onClick={() => handleImageClick(currentSlide)}
                  className='main-slide-image'
                />
              </div>

              {project.images.length > 1 && (
                <button className='slide-arrow right' onClick={() => setCurrentSlide((s) => (s + 1) % project.images.length)}>
                  <ChevronRightIcon />
                </button>
              )}
            </div>

            {project.images.length > 1 && (
              <div className='slideshow-thumbs'>
                {project.images.map((img, index) => (
                  <img
                    key={index}
                    src={img.startsWith('http') ? img : `${process.env.PUBLIC_URL}/images/${img}`}
                    alt={`thumb-${index}`}
                    className={`thumb ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {zoomedImage !== null && (
          <div className='image-zoom-modal' onClick={closeZoom}>
            <div className='zoom-content' onClick={(e) => e.stopPropagation()}>
              <button className='close-zoom' onClick={closeZoom}>
                <CloseIcon />
              </button>
              {project.images.length > 1 && (
                <>
                  <button className='zoom-arrow left' onClick={prevZoomedImage}>
                    <ChevronLeftIcon />
                  </button>
                  <button className='zoom-arrow right' onClick={nextZoomedImage}>
                    <ChevronRightIcon />
                  </button>
                </>
              )}
              <img
                src={
                  project.images[zoomedImage].startsWith('http')
                    ? project.images[zoomedImage]
                    : `${process.env.PUBLIC_URL}/images/${project.images[zoomedImage]}`
                }
                alt={`${getLocalizedValue(project.name, language)} screenshot ${zoomedImage + 1}`}
                className='zoomed-image'
              />
              <p className='zoom-caption'>{getImageCaption(project.id, zoomedImage)}</p>
            </div>
          </div>
        )}

        <div className='project-detail__content' ref={descRef}>
          <section className='detail-section'>
            <h2>{strings.overview}</h2>
            <p>{getLocalizedValue(project.detailedDescription, language)}</p>
          </section>

          {project.features && project.features.length > 0 && (
            <section className='detail-section'>
              <h2>{strings.keyFeatures}</h2>
              <ul className='feature-list'>
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircleIcon className='list-icon' />
                    {getLocalizedValue(feature, language)}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.stack && project.stack.length > 0 && (
            <section className='detail-section'>
              <h2>{strings.technologiesUsed}</h2>
              <div className='tech-stack'>
                {project.stack.map((tech, index) => (
                  <span key={index} className='tech-badge'>
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.sprints && project.sprints.length > 0 && (
            <section className='detail-section'>
              <h2>{strings.developmentSprints}</h2>
              <div className='sprints-stepper'>
                {project.sprints.map((sprint, index) => (
                  <div key={index} className='sprint-step'>
                    <div className='sprint-step__number'>{index + 1}</div>
                    <div className='sprint-step__content'>
                      <h3>{getLocalizedValue(sprint.title, language)}</h3>
                      <p>{getLocalizedValue(sprint.description, language)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.reportPDFs && project.reportPDFs.length > 0 && (
            <section className='detail-section'>
              <h2>{strings.documents}</h2>
              <p className='documents-note'>{strings.documentsInEnglishNote}</p>
              <div className='pdf-report-grid'>
                {project.reportPDFs.map((report, index) => (
                  <div key={index} className='pdf-report-card'>
                    <div className='pdf-report-preview'>
                      <object
                        data={report.src}
                        type='application/pdf'
                        width='100%'
                        height='240'
                      >
                        <p>
                          <strong>{getLocalizedValue(report.title, language)}</strong> {strings.documentAvailable}
                          <a href={report.src} target='_blank' rel='noopener noreferrer'>
                            {strings.openInNewTab}
                          </a>.
                        </p>
                      </object>
                    </div>
                    <div className='pdf-report-info'>
                      <h3>{getLocalizedValue(report.title, language)}</h3>
                      <p>{getLocalizedValue(report.description, language)}</p>
                      <a
                        href={report.src}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn--outline pdf-open-btn'
                      >
                        {strings.openReport}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className='detail-section project-links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--outline'
              >
                <GitHubIcon /> {strings.viewSourceCode}
              </a>
            )}
            {project.livePreview && (
              <a
                href={project.livePreview}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--live-demo'
              >
                {strings.liveDemo}
              </a>
            )}
            {project.id === 'housebite' && (
              <a
                href='https://arpega75.github.io/houseBite/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--live-demo'
              >
                {strings.moreAboutProject}
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail