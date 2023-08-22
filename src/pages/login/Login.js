import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Button } from "../../comonents/AdvancedButton";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("hello");
  const [password, setPassword] = useState("hello");
  const verifyLogin = () => {
    userName === "hello" && password === "hello"
      ? navigate("/home")
      : navigate("/login");
  };
  return (
    <div className="login_top sm:flex-wrap 
     ">
      {/* <Link to='/register'>go to register pages</Link> */}
      <div className="login_right ">
      <div className='flex items-center justify-center flex-col m-0 '>
  <div className='md:text-green-500    sm:text-red-500  text-9xl font-bold shadow-text '>Online </div>
  <div className='font-bold text-5xl text-cyan-900 phy '> Test Series Portal</div>
  </div>
        </div>
      <div className="login_main">
        <div className="login_left">
       <div className="login_text_up font-bold text-6xl mb-5 text-white shadow-text">Login</div>
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
                className="input  input-sm input-bordered rounded-lg w-80 "
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
                placeholder="Enter your Email"
                className="input  input-sm input-bordered w-80 rounded-lg"
              />
            </div>
            <Button className="button_register w-80  " variant="primary" onClick={()=>verifyLogin()}>
           Login
          </Button>

          </div>
          <div className="newuser_section mt-20 flex justify-center items-center flex-col">

            <div className="new_user_text"> New User ?</div>
          <Button className="button_register" variant="primary">
            <Link to="/register">Please Register</Link>
          </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
