import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../../comonents/AdvancedButton";
import { FcBusinessman } from "react-icons/fc";
import './register.css'
const Register = () => {
  return (
    <div className="register_top w-full bg-cover flex items-center justify-center flex-wrap"
      style={{ backgroundImage: "linear-gradient(90deg, #ffffff , #adafaf)" }}>
      {/* <Link to='/register'>go to register pages</Link> */}
      <div className="register_right w-[90%] lg:w-[50%] h-[30vh]">
        <div className='flex items-center justify-center flex-col '>
          <div className='font-bold text-[90px] md:text-9xl text-rose-500 mt-12'
            style={{
              textShadow: "2px 2px 0px rgba(255, 255, 255, 1),5px 4px 0px rgba(0, 0, 0, 0.15)"
            }}
          >Online </div>
          <div className='font-bold text-4xl md:text-5xl text-cyan-900 phy'> Test Series Portal</div>
        </div>
      </div>
      <div className="register_main w-[95%] md:max-w-[620px] md:h-[80vh] bg-[bisque] border-[3px] border-white rounded-[20px] overflow-hidden flex items-center justify-center
      mt-[62px] mb-[62px]"
        style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
        <div className="register_left w-full bg-[url(/src/images/sky.avif)] bg-[rgba(0, 0, 0, 0.61)] backdrop-blur-[5px] h-full bg-cover flex items-center justify-center flex-col rounded-[20px]">
          <div className="register_text_up font-bold text-6xl mb-11 mt-12 text-white"
            style={{ textShadow: "4px 2px 3px #a4abc3" }}>register</div>
          <div className="blury h-full w-full bg-[#202d81] absolute opacity-10 z-40 rounded-tl-20 "></div>
          <div className="form z-[500]">
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-white font-semibold ">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="input  input-sm input-bordered w-80 rounded-lg"
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
                className="input  input-sm input-bordered w-80 rounded-lg"
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
                className="input  input-sm input-bordered w-80 rounded-lg"
              />
            </div>
            <Button className="button_register mt-[22px] z-[99] w-80  " variant="primary" onClick={() => { }}>
              register
            </Button>
            <div className="text-xl register_by_phone_number mt-3 text-center text-white cursor-pointer ">
              Or Register by Phone Number
            </div>
          </div>
          <div className="newuser_section mt-10 flex justify-center items-center flex-col">

            <div className="new_user_text text-white z-[99] mt-[14px]"> Already existing User ?</div>
            <Button className="button_register mt-[20px] mb-12 z-[99]" variant="primary">
              <Link to="/">Please Login</Link>
            </Button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Register