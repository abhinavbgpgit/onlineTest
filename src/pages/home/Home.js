import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../../comonents/AdvancedButton";
const Home = () => {
  return (
    <div>
        <h1> Landing Page </h1>
        <Button className='button_register' variant="success"> <Link to='/'>Login page</Link></Button>
       

    </div>
  )
}

export default Home