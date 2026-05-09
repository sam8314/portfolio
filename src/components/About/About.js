import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import { useLanguage } from '../../contexts/language'
import { getLocalizedValue } from '../../utils/i18n'
import './About.css'

const About = () => {
  const { language, strings } = useLanguage()
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

      <div className='about__intro'>
        {name && (
          <h1>
            {strings.introGreeting} <span className='about__name'>{name}</span>
          </h1>
        )}

        {role && <h2 className='about__role'>{getLocalizedValue(role, language)}</h2>}
        <p className='about__desc'>{getLocalizedValue(description, language)}</p>
      </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
              {strings.resumeButton}
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
