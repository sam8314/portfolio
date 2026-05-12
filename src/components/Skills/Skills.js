import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import uniqid from 'uniqid'
import { skills, projects } from '../../portfolio'
import { useLanguage } from '../../contexts/language'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import './Skills.css'

const Skills = () => {
  const { strings, language } = useLanguage()
  const history = useHistory()
  const animationRef = useDropAnimation()
  const [selectedSkill, setSelectedSkill] = useState(null)

  // Filter projects that use the selected skill
  const relatedProjects = selectedSkill
    ? projects.filter(project =>
        project.stack.some(tech =>
          tech.toLowerCase().includes(selectedSkill.toLowerCase()) ||
          selectedSkill.toLowerCase().includes(tech.toLowerCase())
        )
      )
    : []

  const handleSkillClick = (skill) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null) // Deselect if already selected
    } else {
      setSelectedSkill(skill) // Select new skill
    }
  }

  const handleProjectClick = (projectId) => {
    history.push(`/project/${projectId}`)
  }

  if (!skills.length) return null

  return (
    <section className='section skills' id='skills' ref={animationRef}>
      <h2 className='section__title'>{strings.skillsTitle}</h2>

      <div className='skills__split-view'>
        <div className='skills__left'>
          <ul className='skills__list'>
            {skills.map((skill) => (
              <li
                key={uniqid()}
                className={`skills__list-item btn btn--plain ${selectedSkill === skill ? 'skills__list-item--selected' : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className='skills__right'>
          {selectedSkill ? (
            <>
              <h3 className='skills__projects-title'>
                {strings.skillsProjectsTitle || 'Projects using'} {selectedSkill}
              </h3>
              {relatedProjects.length > 0 ? (
                <div className='skills__table-wrapper'>
                  <table className='skills__projects-table'>
                    <thead>
                      <tr>
                        <th>{strings.projectName || 'Project Name'}</th>
                        <th>{strings.projectType || 'Type'}</th>
                        <th>{strings.projectYear || 'Year'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {relatedProjects.map((project) => (
                        <tr 
                          key={project.id} 
                          className='skills__project-row'
                          onClick={() => handleProjectClick(project.id)}
                        >
                          <td className='skills__project-name'>
                            {project.name[language] || project.name.en}
                          </td>
                          <td className='skills__project-type'>
                            <span
                              className='project-type-badge'
                              style={{ backgroundColor: project.typeColor }}
                            >
                              {project.type}
                            </span>
                          </td>
                          <td className='skills__project-year'>
                            {project.year}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className='skills__no-projects'>
                  {strings.noProjectsForSkill || 'No projects found using this skill.'}
                </p>
              )}
            </>
          ) : (
            <div className='skills__hover-prompt'>
              <p className='skills__hover-text'>
                {strings.clickSkillPrompt || 'Click on a skill to see projects that use it.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills