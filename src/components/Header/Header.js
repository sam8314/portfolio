import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/language'
import './Header.css'

const Header = () => {
  const animationRef = useDropAnimation()
  const { language, toggleLanguage, strings } = useLanguage()

  return (
    <div className='header' ref={animationRef}>
      <div className='header-left-group'>
        <Link to='/' className='home-icon' aria-label='home'>
          <HomeIcon fontSize='large' />
        </Link>
        <button
          type='button'
          onClick={toggleLanguage}
          className='header__lang'
          aria-label={strings.toggleLanguageLabel}
        >
          {language === 'en' ? 'FR' : 'ENG'}
        </button>
      </div>
      <Navbar />
      <SearchBar />
    </div>
  )
}

export default Header