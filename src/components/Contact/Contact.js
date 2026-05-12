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

  if (!contact.email) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Portfolio message from ${formData.firstName} ${formData.lastName}`
    const body = `Name: ${formData.firstName} ${formData.lastName}%0A%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`
    
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    
    // Optional: Clear form after "sending"
    setFormData({ firstName: '', lastName: '', email: '', message: '' })
  }

  return (
    <section className='section contact' id='contact' ref={animationRef}>
      <div className='contact__container'>
        <div className='contact__header'>
          <h2 className='section__title'>{strings.contactTitle}</h2>
          <p className='contact__description'>
            {strings.contactDescription || "I would love to hear from you."}
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
                placeholder="First name"
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
                placeholder="Last name"
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
              placeholder="you@example.com"
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
              placeholder="Your message..."
            />
          </div>

          <button type='submit' className='contact__submit'>
            <SendIcon /> {strings.sendButton || 'Open Email Client'}
          </button>
          
          <p className='contact__note' style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem', opacity: 0.7 }}>
            This will open your email client. Just click send!
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact