import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../images/test_logo_3.png'
import { NavLink,useNavigate } from 'react-router-dom'
import { Button } from './AdvancedButton'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { logout } from '../features/user/authSlice'
import { useDispatch } from 'react-redux'
const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch=useDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated);
  console.log(isAuthenticated)

  const navigate=useNavigate()
  const navigateToLogin=() => {
    navigate('/login')  
  }
  return (
            
    <div className="n-wrapper">      
<div className="logo_header">
<span class=" ml-10 self-center text-2xl font-bold text-white whitespace-nowrap dark:text-white">Nitin Test Portal</span>
</div>
<div className="logo_header_shadow"></div>
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      {/* <img src={logo} class="h-12 " alt="Flowbite Logo"></img> */}
      {/* <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Nitin Test Portal</span> */}
  </a>
  <div class="flex md:order-2">
    {isAuthenticated?( <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={()=>{dispatch(logout())}}>Logout</button>
    ):(<button type="button" class="sm:hidden md:hidden xl:inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={()=>{navigateToLogin()}}>Login</button> 
    )}
      {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={()=>{navigateToLogin()}}>Login</button> */}
    <div className="download_app sm:hidden md:hidden xl:inline-block ml-5 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-10 md:mr-10  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Download App</div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      </button>  


  </div>

  <div
        className={`${
          isDropdownOpen ? '' : 'hidden '
        }w-full md:w-auto sm:hidden md:hidden xl:inline-block`}
        id="navbar-default"
      >
        <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1 z-50" id="navbar-sticky" >
    <ul class=" nav_ui flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-[50px]  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/" onClick={()=>{toggleDropdown()}} class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={()=>{toggleDropdown()}} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Test</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={()=>{toggleDropdown()}} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Take test</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={()=>{toggleDropdown()}} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Score Boared</NavLink>
      </li>
    </ul>
  </div>
      </div>

 
  </div>
</nav>

</div>
        
   
  )
}

export default Navbar