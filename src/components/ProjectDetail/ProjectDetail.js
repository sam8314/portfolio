import { useParams, useHistory } from 'react-router-dom'
import { projects } from '../../portfolio'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CloseIcon from '@material-ui/icons/Close'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { useState, useRef } from 'react'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const history = useHistory()
  const project = projects.find((p) => p.id === projectId)
  const [zoomedImage, setZoomedImage] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideshowRef = useRef(null)

  const handleImageClick = (index) => {
    setZoomedImage(index)
  }

  const closeZoom = () => {
    setZoomedImage(null)
  }

  const getImageCaption = (projectId, imageIndex) => {
    // Hardcode custom captions for each project and image index
    const captions = {
      // Example: replace with your project IDs and custom text
      'housebite': {
        0: 'Users can join several households and see at a quick glance which products should be consumed first.',
        1: 'Users can customize their accounts and set their personal diets that apply across all of their households.',
        2: 'Users can track the overall budget of each household',
        3: 'Users can see all the products in a specific household delete them in bulk or search for recipes using selected products.',
        4: 'An OpenAI scanner can parse any receipt and suggest expiration dates (which the user can edit) and then adds them to a households pantry.',
        5: 'Users can search and save their favourite recipes but also add the missing ingredients to the shopping list of a household.',
        6: 'A shared shopping list allows for live edits for efficient shopping.'
      },
      'university-app': {
        0: 'Custom caption for first image',
        1: 'Custom caption for second image'
      }
      // Add more projects as needed
    };

    return captions[projectId]?.[imageIndex] || `${project.name} screenshot ${imageIndex + 1}`;
  }

  const nextZoomedImage = () => {
    setZoomedImage((prev) => (prev + 1) % project.images.length)
  }

  const prevZoomedImage = () => {
    setZoomedImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  if (!project) {
    return (
      <div className='project-detail'>
        <div className='project-detail__container'>
          <h2>Project not found</h2>
          <button onClick={() => history.push('/')} className='btn btn--outline'>
            <ArrowBackIcon /> Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='project-detail'>
      <div className='project-detail__container'>
        <button onClick={() => history.push('/')} className='btn btn--outline back-btn'>
          <ArrowBackIcon /> Back to Homepage
        </button>

        <div className='project-detail__header'>
          <h1>{project.name}</h1>
          <div className='project-detail__meta'>
            <span className='meta-badge'>
              <strong>Team Size:</strong> {project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}
            </span>
            <span className='meta-badge'>
              <strong>Role:</strong> {project.role}
            </span>
            <span className='meta-badge'>
              <strong>Year:</strong> {project.year}
            </span>
            {project.wip && <span className='meta-badge wip-badge'>WIP</span>}
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <div className='project-detail__slideshow'>
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
                  alt={`${project.name} screenshot ${currentSlide + 1}`}
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
                alt={`${project.name} screenshot ${zoomedImage + 1}`}
                className='zoomed-image'
              />
              <p className='zoom-caption'>{getImageCaption(project.id, zoomedImage)}</p>
            </div>
          </div>
        )}

        <div className='project-detail__content'>
          <section className='detail-section'>
            <h2>Overview</h2>
            <p>{project.detailedDescription}</p>
          </section>

          {project.features && project.features.length > 0 && (
            <section className='detail-section'>
              <h2>Key Features</h2>
              <ul className='feature-list'>
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircleIcon className='list-icon' />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.stack && project.stack.length > 0 && (
            <section className='detail-section'>
              <h2>Technologies Used</h2>
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
              <h2>Development Sprints</h2>
              <div className='sprints-stepper'>
                {project.sprints.map((sprint, index) => (
                  <div key={index} className='sprint-step'>
                    <div className='sprint-step__number'>{index + 1}</div>
                    <div className='sprint-step__content'>
                      <h3>{sprint.title}</h3>
                      <p>{sprint.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.reportPDFs && project.reportPDFs.length > 0 && (
            <section className='detail-section'>
              <h2>Sprint Report PDFs</h2>
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
                          <strong>{report.title}</strong> is available as a PDF. 
                          <a href={report.src} target='_blank' rel='noopener noreferrer'>Open in a new tab</a>.
                        </p>
                      </object>
                    </div>
                    <div className='pdf-report-info'>
                      <h3>{report.title}</h3>
                      <p>{report.description}</p>
                      <a
                        href={report.src}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn--outline pdf-open-btn'
                      >
                        Open Report
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
                <GitHubIcon /> View Source Code
              </a>
            )}
            {project.livePreview && (
              <a
                href={project.livePreview}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--live-demo'
              >
                Live Demo
              </a>
            )}
            {project.id === 'housebite' && (
              <a
                href='https://arpega75.github.io/houseBite/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--live-demo'
              >
                More about the project
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
