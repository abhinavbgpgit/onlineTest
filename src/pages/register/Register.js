import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../../components/AdvancedButton";
import { FcBusinessman } from "react-icons/fc";
import './register.css'
import { motion } from "framer-motion"
import { BiLogIn } from "react-icons/bi";
import girl from '../../images/girl.png'


const Register = () => {
  return (
    <div className="register_top  bg-cover flex  justify-center flex-wrap"
      // style={{ backgroundImage: "linear-gradient(90deg, #ffffff , #adafaf)" }}
      >
      {/* <Link to='/register'>go to register pages</Link> */}
      <div className="register_right w-[90%] lg:w-[50%] ">
        <div className='flex items-center justify-center flex-col '>
          <div className='font-bold text-[60px] md:text-8xl text-rose-500 '
            style={{
              textShadow: "2px 2px 0px rgba(255, 255, 255, 1),5px 4px 0px rgba(0, 0, 0, 0.15)"
            }}
          >Online </div>
          <div className='font-bold text-4xl md:text-5xl text-white phy'
           style={{
            textShadow: "2px 2px 0px rgba(0, 0, 0, 1),5px 4px 0px rgba(0, 0, 0, 0.15)"
          }}
          > Test Series Portal</div>
        </div>
        <div className="animation mt-20">
        <motion.div 
        initial={{marginLeft:"-800px"}} 
        animate={{ marginLeft: "220px" }} 
        transition={{
          'easeInOut': "linear",
          duration: 1,
          x: { duration: 1 }
        }}
        >
        <div className="line1 mt-5 ">Familiarity with the Test Format</div>
        </motion.div>
        <motion.div 
        initial={{marginLeft:"-800px"}} 
        animate={{ marginLeft: "220px" }} 
        transition={{
          'easeInOut': "linear",
          duration: 1,
          x: { duration: 2 },
          delay: 1
        }}
        >
        <div className="line1 mt-5">Time Management</div>
        </motion.div>
        <motion.div 
        initial={{marginLeft:"-800px"}} 
        animate={{ marginLeft: "220px" }} 
        transition={{
          'easeInOut': "linear",
          duration: 1,
          x: { duration: 1 },
          delay: 2
        }}

        >
        <div className="line1 mt-5 ">Identifying Weaknesses</div>
        </motion.div>
          
        <motion.div 
        initial={{marginLeft:"-800px"}} 
        animate={{ marginLeft: "220px" }} 
        transition={{
          'easeInOut': "linear",
          duration: 1,
          x: { duration: 1 },
          delay: 3
        }}

        >
        <div className="line1 mt-5 ">Instant Feedback</div>
        </motion.div>
          
        <motion.div 
        initial={{marginLeft:"-800px"}} 
        animate={{ marginLeft: "220px" }} 
        transition={{
          'easeInOut': "linear",
          duration: 1,
          x: { duration: 1 },
          delay: 4
        }}

        >
        <div className="line1 mt-5 ">Higher Confidence</div>
        </motion.div>
          
        </div>
        <img className='girl_picture' src={girl} alt="lkl" />
      </div>
      <div className="register_main mt-20 w-[95%] md:max-w-[620px] md:h-[80vh]  border-[3px] border-white rounded-[20px] overflow-hidden flex items-center justify-center
       mb-[62px]"
        style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
        <div className="register_left w-full  h-full bg-cover flex items-center justify-center flex-col rounded-[20px]">
          <div className="register_text_up font-bold text-3xl mb-11 mt-12 text-black"
            style={{ textShadow: "4px 2px 3px #a4abc3" }}>Create Account</div>
          <div className="blury  w-full  opacity-10 z-40 rounded-tl-20 "></div>
          <div className="form z-[500]">
           
          {/* bg-[url(/src/images/sky.avif)] */}
          <div className="form-control w-full max-w-xs mt-1">
              <label className="label">
                <span className="label-text text-black font-semibold ">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input  input-sm input-bordered w-80 rounded-lg"
              />
            </div>
           
           <div className="form-control w-full max-w-xs mt-3">
              <label className="label">
                <span className="label-text text-black font-semibold ">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="input  input-sm input-bordered w-80 rounded-lg"
              />
            </div>
           
            <div className="form-control w-full max-w-xs  mt-3">
              <label className="label">
                <span className="label-text text-black font-semibold ">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input  input-sm input-bordered w-80 rounded-lg"
              />
            </div>

            <div className="form-control w-full max-w-xs  mt-3 ">
              <label className="label">
                <span className="label-text text-black font-semibold ">
                  Phone Number
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your  Phone Number"
                className="input  input-sm input-bordered w-80 rounded-lg"
              />
            </div>

            <Button className="mt-10 z-[99] w-80" variant="primary" onClick={() => { }}>
              register
            </Button>
           
          </div>
          <div className="newuser_section mt-10 flex justify-center items-center flex-col">

            <div className="new_user_text text-white z-[99] mt-[14px]"> Already existing User ?</div>
          <div className="login_user_relative">
            <Button className="button_register mt-[20px] mb-12 z-[99]" variant="primary">
              <Link to="/login"><div style={{marginLeft:"-20px"}}>Please Login</div></Link>
            </Button>
            <BiLogIn className='login_icon'/>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Register