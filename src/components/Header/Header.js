import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <div className='header center justify-right'>
      <Navbar />
    </div>
  )
}

export default Header
