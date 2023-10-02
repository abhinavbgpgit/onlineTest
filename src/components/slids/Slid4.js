import React from "react";
import instantfeedback from "../../images/carousel/instantfeedback.png";
import "./slide.css";
import {registerShowModal} from '../../features/user/openRegisterModalSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
const Slid4 = () => {
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
            <div className="slid_heading">Identifying Weaknesses</div>
            <div className="line"></div>
            <div className="slid_description">
            Our educational team provides instant feedback to students,
                offering them timely insights into their performance, strengths,
                and areas that need improvement, fostering a proactive and
                constructive learning experience. This immediate feedback loop
                encourages students to make real-time adjustments to enhance
                their understanding and mastery of the subject matter.
            </div>
            <div className="slid_button" onClick={()=>redirectIfLoggedIn()}>Try Test For Free</div>
          </div>
        </div>
        <div className="slid_right">
          <img className="test11" src={instantfeedback} alt="test1" height="700px" />
        </div>
      </div>
    </div>
  );
};




export default Slid4;
