import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../assets/logo.png'

function Navbar() {


  return (

    <nav className="navbar">

      <h2 className="logo"><img className='logomarca' src={Logo} alt="" /></h2>
      <ul className="nav-links">
        <li><a href="#App"> Home</a></li>
        <li><a href="#ConteudoPageHome"> Sobre</a></li>
        <li><a href="#ConeteudoPageWorks"> Serviços</a></li>
        <li><a href="#TitlePageOrça"> Contato</a></li>
      </ul>
    </nav >

  )
}

export default Navbar