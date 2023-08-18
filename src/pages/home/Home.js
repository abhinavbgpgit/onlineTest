import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../../comonents/AdvancedButton";
import './home.css'
const Home = () => {
  return (
    <div>
       <div className="home_main center">

         <div className="home_left">
         <div className='flex items-center justify-center flex-col mt-48 m-0'>
  <div className='font-bold text-7xl text-cyan-900 heading'>Crack NEET UG  </div>
  <div className='font-bold text-3xl text-cyan-900 phy'> With our trusted test series</div>
  </div>
         </div>
         <div className="home_right center">
          <div className="free_test_card center">
          <Link to='/test'> Try test for free</Link>
          </div>
          <div className="subscription_card center">
            View Subscription Plans
          </div>
         </div>
       </div>
      
       
       

    </div>
  )
}

export default Home