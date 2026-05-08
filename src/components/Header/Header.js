import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <div className='header center justify-right'>
      <SearchBar />
      <Navbar />
    </div>
  )
}

export default Header
