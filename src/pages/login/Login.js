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
      className="login_top sm:flex-wrap w-full flex items-center justify-center flex-wrap"
      style={{ backgroundImage: "linear-gradient(90deg, #ffffff, #adafaf)" }}
    >
      {/* <Link to='/register'>go to register pages</Link> */}
      <div className="login_right w-[90%] lg:w-[50%] h-[30vh]">
        <div className="flex items-center justify-center flex-col m-0 ">
          <div className="text-rose-500 text-[90px] md:text-9xl font-bold shadow-text mt-12"
            style={{
              textShadow: "2px 2px 0px rgba(255, 255, 255, 1),5px 4px 0px rgba(0, 0, 0, 0.15)"
            }}>
            Online{" "}
          </div>
          <div className="font-bold text-4xl md:text-5xl text-cyan-900 phy ">
            {" "}
            Test Series Portal
          </div>
        </div>
      </div>
      <div
        className="login_main w-[95%] md:max-w-[620px] md:h-[80vh] bg-[bisque] rounded-[20px] border-[3px] border-white overflow-hidden flex items-center justify-center mt-[62px] mb-[62px]"
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <div className="login_left w-full h-full bg-[url(/src/images/sky.avif)] bg-[rgba(0, 0, 0, 0.61)] backdrop-blur-[5px] bg-cover flex items-center justify-center flex-col rounded-[20px]">
          <div className="login_text_up font-bold text-6xl mb-10 mt-12 text-white shadow-text "
            style={{ textShadow: "4px 2px 3px #a4abc3" }}>
            Login
          </div>
          <div className="blury h-full w-full bg-[#202d81] absolute opacity-10 z-40 rounded-tl-20 "></div>
          <FcBusinessman className="user_icon h-[80px] w-[80px] bg-white rounded-[50%] border-[5px] border-[#C8D1DC] z-[100]"
            style={{ boxShadow: " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }} />
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
              className="button_register w-80  mt-[20px] z-[99]"
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
              className="button_register mt-[20px] mb-12 z-[99]"
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
