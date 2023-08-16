import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Button } from "../../comonents/AdvancedButton";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const verifyLogin=()=>
  {
    userName==="hello" && password==="hello" ?navigate('/home') :navigate('/login');
  }
  return (
    <div className="login_top ">
      {/* <Link to='/register'>go to register pages</Link> */}

      <div className="login_main">
        <div className="login_left ">
            <div className="blury" ></div>
            <FcBusinessman className="user_icon"/>
        <div className="new_user_text"> New User ?</div>
          <Button className='button_register' variant="primary"><Link to='/register' >Please Register</Link></Button>
            </div>          
        <div className="login_right">

        <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" onChange={(e)=>setUserName(e.target.value)}></input>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
				</div>
				<button class="button login__submit" onClick={()=>verifyLogin()}>
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Login;
