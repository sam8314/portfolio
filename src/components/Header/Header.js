import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const { homepage, title } = header
  const animationRef = useDropAnimation()

  return (
    <div className='header center justify-right' ref={animationRef}>
      <Link to='/' className='home-icon' aria-label='home'>
        <HomeIcon fontSize='large' />
      </Link>
      <div className='search-bar-wrapper'>
        <SearchBar />
      </div>
      <Navbar />
    </div>
  )
}

export default Header