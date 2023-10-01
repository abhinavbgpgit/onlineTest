import React from "react";
import test1 from "../../images/carousel/test5.webp";
import "./slide.css";
import {registerShowModal,registerHideModal} from '../../features/user/openRegisterModalSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
const Slid2 = () => {
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
            <div className="slid_heading">Time Management</div>
            <div className="line"></div>
            <div className="slid_description">
              Time management during online tests helps you stay focused,
              complete questions accurately, and finish on time, boosting your
              chances of success. Efficient time management also reduces stress,
              allowing you to approach the test with confidence and perform at
              your best.
            </div>
            <div className="slid_button" onClick={()=>redirectIfLoggedIn()}>Try Test For Free</div>
          </div>
        </div>
        <div className="slid_right">
          <img className="test11" src={test1} alt="test1" height="700px" />
        </div>
      </div>
    </div>
  );
};

export default Slid2;
