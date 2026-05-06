import { useParams, useHistory } from 'react-router-dom'
import { projects } from '../../portfolio'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const history = useHistory()
  const project = projects.find((p) => p.id === projectId)

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
            <div className='slideshow-container'>
              {project.images.map((img, index) => (
                <div key={index} className='slide'>
                  <img
                    src={
                      img.startsWith('http')
                        ? img
                        : `${process.env.PUBLIC_URL}/images/${img}`
                    }
                    alt={`${project.name} screenshot ${index + 1}`}
                  />
                </div>
              ))}
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
                  <li key={index}>{feature}</li>
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
                className='btn btn--primary'
              >
                <LaunchIcon /> Live Demo
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
