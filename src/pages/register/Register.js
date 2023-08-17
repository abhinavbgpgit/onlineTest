import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../../comonents/AdvancedButton";
import { FcBusinessman } from "react-icons/fc";
import './register.css'
const Register = () => {
  return (
    <div className="register_top ">
      {/* <Link to='/register'>go to register pages</Link> */}

      <div className="register_main">
        <div className="register_left ">
       <div className="register_text_up font-bold text-6xl mb-5 text-white shadow-text">register</div>
          <div className="blury"></div>
          <FcBusinessman className="user_icon" />
          <div className="form">
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-white font-semibold ">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="input  input-sm input-bordered w-80 "
              />
            </div>
            <div className="form-control w-full max-w-xs mt-1">
              <label className="label">
                <span className="label-text text-white font-semibold ">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input  input-sm input-bordered w-80 "
              />
            </div>
            <div className="form-control w-full max-w-xs mt-1">
              <label className="label">
                <span className="label-text text-white font-semibold ">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input  input-sm input-bordered w-80 "
              />
            </div>
            <Button className="button_register w-80  " variant="primary" onClick={()=>{}}>
           register
          </Button>
<div className="register_by_phone_number text-center text-white mt-2 cursor-pointer ">
  Register by Phone Number
</div>
          </div>
          <div className="newuser_section mt-10 flex justify-center items-center flex-col">

            <div className="new_user_text"> Already existing User ?</div>
          <Button className="button_register" variant="primary">
            <Link to="/">Please Login</Link>
          </Button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Register