import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/language'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const { strings } = useLanguage()

  return (
    <nav className='center nav'>
      <ul className='nav__list'>
        {projects.length ? (
          <li className='nav__list-item'>
            <Link
              to={{ pathname: '/', hash: '#projects' }}
              className='link link--nav'
            >
              {strings.navProjects}
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <Link
              to={{ pathname: '/', hash: '#skills' }}
              className='link link--nav'
            >
              {strings.navSkills}
            </Link>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <Link
              to={{ pathname: '/', hash: '#contact' }}
              className='link link--nav'
            >
              {strings.navContact}
            </Link>
          </li>
        ) : null}
        <li className='nav__list-item'>
          <Link
            to='/education'
            className='link link--nav'
          >
            {strings.navEducation}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar