import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import { useLanguage } from '../../contexts/language'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import './Skills.css'

const Skills = () => {
  const { strings } = useLanguage()
  const animationRef = useDropAnimation()
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills' ref={animationRef}>
      <h2 className='section__title'>{strings.skillsTitle}</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
