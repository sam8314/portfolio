import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import { useDropAnimation } from '../../hooks/useDropAnimation'
import './Header.css'

const Header = () => {
  const { homepage, title } = header
  const animationRef = useDropAnimation()

  return (
    <div className='header center justify-right' ref={animationRef}>
      <SearchBar />
      <Navbar />
    </div>
  )
}

export default Header
