import React from "react";
import test1 from "../../images/carousel/higher_confidence.png";
import "./slide.css";
import {registerShowModal,registerHideModal} from '../../features/user/openRegisterModalSlice';
import { loginShowModal,loginHideModal } from "../../features/user/openLoginModalSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Slid1 = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
 const redirectIfLoggedIn=() => {
  const status=localStorage.getItem('loginStatus');
  if(status==="true")
  {
    navigate('/testlandingpage');
    }
    else
    {
      dispatch(registerShowModal());
    }
  
 }
  return (
    <div>
      <div className="slid_main">
        <div className="slid_left">
          <div className="slid_left_box">
            <div className="what_you_will_get">Why you choose us ?</div>
            <div className="slid_heading">Higher Confidence</div>
            <div className="line"></div>
            <div className="slid_description">
              Our Online tests make you feel more confident because you can take
              them in a comfortable setting, get instant feedback on how you're
              doing, and they adjust to your level, so you're not overwhelmed.
              This helps you believe in your abilities and get better at what
              you're learning.
            </div>
            <div className="slid_button" onClick={()=>redirectIfLoggedIn()}>Try Test For Free </div>
          </div>
        </div>
        <div className="slid_right">
          <img className="test11" src={test1} alt="test1" height="700px" />
        </div>
      </div>
    </div>
  );
};

export default Slid1;
