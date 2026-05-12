import { useState } from 'react'
import { contact } from '../../portfolio'
import { useLanguage } from '../../contexts/language'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import SendIcon from '@material-ui/icons/Send'
import './Contact.css'

const Contact = () => {
  const { strings } = useLanguage()
  const animationRef = useDropAnimation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  if (!contact.email) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Here you would typically send the form data to a backend service
    // For now, we'll just log it and show a success message
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      console.log('Form data:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='section contact' id='contact' ref={animationRef}>
      <div className='contact__container'>
        <div className='contact__header'>
          <h2 className='section__title'>{strings.contactTitle}</h2>
          <p className='contact__description'>
            {strings.contactDescription || "I would love to hear from you. For projects, internships, hackathon..."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className='contact__form'>
          <div className='contact__form-row'>
            <div className='contact__form-group'>
              <label htmlFor='firstName' className='contact__label'>
                {strings.firstName || 'First name'} <span className='contact__required'>*</span>
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
                className='contact__input'
                placeholder={strings.firstNamePlaceholder || 'First name'}
              />
            </div>

            <div className='contact__form-group'>
              <label htmlFor='lastName' className='contact__label'>
                {strings.lastName || 'Last name'} <span className='contact__required'>*</span>
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
                className='contact__input'
                placeholder={strings.lastNamePlaceholder || 'Last name'}
              />
            </div>
          </div>

          <div className='contact__form-group'>
            <label htmlFor='email' className='contact__label'>
              {strings.emailLabel || 'Email'} <span className='contact__required'>*</span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='contact__input'
              placeholder={strings.emailPlaceholder || 'you@example.com'}
            />
          </div>

          <div className='contact__form-group'>
            <label htmlFor='message' className='contact__label'>
              {strings.messageLabel || 'Message'} <span className='contact__required'>*</span>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className='contact__textarea'
              placeholder={strings.messagePlaceholder || 'Leave me a message...'}
            />
          </div>

          {submitStatus === 'success' && (
            <div className='contact__success'>
              {strings.successMessage || 'Thank you! Your message has been sent successfully.'}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className='contact__error'>
              {strings.errorMessage || 'Something went wrong. Please try again or write at sa.serbouti@protonmail.com'}
            </div>
          )}

          <button type='submit' className='contact__submit' disabled={isSubmitting}>
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <SendIcon /> {strings.sendButton || 'Send message'}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact