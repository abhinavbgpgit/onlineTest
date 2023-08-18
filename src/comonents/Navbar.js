import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../images/test_logo_3.png'
import { NavLink } from 'react-router-dom'
import { Button } from './AdvancedButton'
const Navbar = () => {


  const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
  return (
            
    <div className="n-wrapper">
    
    <div className="n-left">
        <div className="n-name">
        <NavLink to="/">  <img  className="logo"src={logo} alt='hmm' ></img></NavLink>
        </div>
          </div>

    <div className="n-middle">       
        <div className="n-list">
        <ul style={{listStyleType: 'none'}}>               
                <li><NavLink className='link' to="/patient">Home</NavLink> </li>               
                <li><NavLink className='link' to="/payment">Take test</NavLink></li>
                <li><NavLink className='link' to="/reports">Success stories</NavLink></li>  
                <li><NavLink className='link' to="/staffinfo">Score Boared</NavLink></li> 
                <li><NavLink className='link' to="/staffinfo">About test</NavLink></li>              
            </ul>
            </div>
    </div>


    <div className="n-right" >         
      <NavLink className='link ' to="/login">
      <Button className="button_register w-30  " variant="primary" onClick={()=>{}}>Log Out</Button>
      </NavLink>
      {/* <div>
      <p> {currentTime.toLocaleTimeString()}</p>
      <p> {currentTime.toDateString()}</p>
    </div> */}
      
    </div>
</div>
        
   
  )
}

export default Navbar