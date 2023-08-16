import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../../comonents/AdvancedButton";
const Register = () => {
  return (
    <div>
        <div className="register">
      {/* <Link to='/register'>go to register pages</Link> */}

      <div className="login_main">
        <div className="login_left ">
            <div className="blury" ></div>
        <div className="new_user_text">Already existing User ?</div>
          <Button className='button_register' variant="primary"><Link to='/login' >Please Login</Link></Button>
            </div>          
        <div className="login_right"></div>
      </div>
    </div>

    </div>
  )
}

export default Register