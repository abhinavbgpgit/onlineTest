import React , {useState}from 'react'
import './navbarstudent.css'
import logo from '../images/testpur_logo.png';
import { FcPhone } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavbarStudent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className='nav_main flex justify-between items-center'>
   <div className="logo_image"><img className="nav_logo" src={logo} alt="" /></div> 
   <div className={`menu_and_expert_section ${isMobileMenuOpen ? '' : 'hide'}`}>
   <ul className="menu flex">
    <li className="menu_item"><Link to='/'>Home</Link></li>
    <li className="menu_item">About TestPur</li>
    <li className="menu_item">About NEET</li>
    <li className="menu_item">TestPur Team</li>
    <li className="menu_item">Live Test</li>
</ul>
<div className="expert_section">
  <div className="expert">
   <div className="expert_icon">< FcPhone/></div>
   <div className="expert_number_text">
    <div className="expert_text">Talk to our experts</div>
    <div className="expert_number">+91-9570452922</div>
   </div>
  </div>
  <div className="login_button">
    Login
  </div>
</div>
    </div>   


    <div className="bar_button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  )
}

export default NavbarStudent