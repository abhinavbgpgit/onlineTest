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
    <div
      className="login_top sm:flex-wrap h-[90vh] w-full flex items-center justify-center"
      style={{ backgroundImage: "linear-gradient(90deg, #ffffff, #adafaf)" }}
    >
      {/* <Link to='/register'>go to register pages</Link> */}
      <div className="login_right w-[50%] h-[30vh]">
        <div className="flex items-center justify-center flex-col m-0 ">
          <div className="md:text-green-500    sm:text-red-500  text-9xl font-bold shadow-text ">
            Online{" "}
          </div>
          <div className="font-bold text-5xl text-cyan-900 phy ">
            {" "}
            Test Series Portal
          </div>
        </div>
      </div>
      <div
        className="login_main w-[30%] min-w-[400px] h-[80vh] bg-[bisque] rounded-[20px] border-[3px] border-white overflow-hidden flex items-center justify-center"
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <div className="login_left w-full h-full bg-[url(/src/images/sky.avif)] bg-[rgba(0, 0, 0, 0.61)] backdrop-blur-[5px] bg-cover flex items-center justify-center flex-col rounded-[20px]">
          <div className="login_text_up font-bold text-6xl mb-5 text-white shadow-text">
            Login
          </div>
          <div className="blury w-full h-full bg-[rgb(32, 45, 129)] absolute opacity-[0.1] z-[40] rounded-[20px 0px 0px 20px]"></div>
          <FcBusinessman className="user_icon w-[100px] h-[100px] bg-white rounded-[50%] shadow-md border-[5px] border-[rgb(77, 119, 166)] z-[100]" />
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
            <Button
              className="button_register w-80  "
              variant="primary"
              onClick={() => verifyLogin()}
            >
              Login
            </Button>
          </div>
          <div className="newuser_section mt-20 flex justify-center items-center flex-col">
            <div className="new_user_text text-white z-[99] mt-[10px]">
              {" "}
              New User ?
            </div>
            <Button
              className="button_register mt-[20px] z-[99]"
              variant="primary"
            >
              <Link to="/register">Please Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
