import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import GroupIcon from '@material-ui/icons/Group'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { useLanguage } from '../../contexts/language'
import { getLocalizedValue } from '../../utils/i18n'
import './ProjectContainer.css'

const ProjectContainer = ({ project, allProjects }) => {
  const { language, strings } = useLanguage()
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const history = useHistory()

  const handleCardClick = () => {
    if (project.id) {
      history.push(`/project/${project.id}`)
    }
  }

  const handleSkillHover = (skill) => {
    setHoveredSkill(skill)
    // Trigger global skill highlight
    document.querySelectorAll('.project__stack-item').forEach((item) => {
      if (item.textContent === skill) {
        item.classList.add('highlighted')
      }
    })
  }

  const handleSkillLeave = () => {
    setHoveredSkill(null)
    // Remove all highlights
    document.querySelectorAll('.project__stack-item').forEach((item) => {
      item.classList.remove('highlighted')
    })
  }

  return (
    <div
      className='project'
      onClick={handleCardClick}
      style={{
        borderTop: project.typeColor ? `4px solid ${project.typeColor}` : 'none',
      }}
    >

      {project.image && (
        <img
          src={
            project.image.startsWith('http')
              ? project.image
              : `${process.env.PUBLIC_URL}/images/${project.image}`
          }
          alt={`${getLocalizedValue(project.name, language)} screenshot`}
          className='project__image'
        />
      )}

      <div className='project__content'>
        <h3>{getLocalizedValue(project.name, language)}</h3>

        <div className='project__metadata'>
          <span className='metadata-badge' title={strings.personTooltip}>
            <GroupIcon className='metadata-icon' /> {project.teamSize}
          </span>
          <span className='metadata-badge' title={strings.roleTooltip}>
            {getLocalizedValue(project.role, language)}
          </span>
          <span className='metadata-badge' title={strings.yearTooltip}>
            <DateRangeIcon className='metadata-icon' /> {project.year}
          </span>
          {project.wip && (
            <span className='metadata-badge wip-badge' title={strings.wipTooltip}>
              WIP
            </span>
          )}
        </div>

        <p className='project__description'>{getLocalizedValue(project.description, language)}</p>

        <div className='project__footer'>
          {project.stack && (
            <ul className='project__stack'>
              {project.stack.map((item) => (
                <li
                  key={uniqid()}
                  className='project__stack-item'
                  onMouseEnter={() => handleSkillHover(item)}
                  onMouseLeave={handleSkillLeave}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className='project__links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label={strings.sourceCodeLabel}
                className='link link--icon'
                onClick={(e) => e.stopPropagation()}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label={strings.livePreviewLabel}
                className='btn btn--live-demo'
                onClick={(e) => e.stopPropagation()}
                target='_blank'
                rel='noopener noreferrer'
              >
                {strings.liveDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
