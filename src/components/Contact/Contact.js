import { contact } from '../../portfolio'
import { useLanguage } from '../../contexts/language'
import './Contact.css'

const Contact = () => {
  const { strings } = useLanguage()
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>{strings.contactTitle}</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          {strings.emailButton}
        </span>
      </a>
    </section>
  )
}

export default Contact
