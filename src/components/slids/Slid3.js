import React from "react";
import imgweakness from "../../images/carousel/imgweakness.png";
import "./slide.css";
import {registerShowModal,registerHideModal} from '../../features/user/openRegisterModalSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
const Slid3 = () => {
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
              Online tests offer a convenient and structured way to gauge one's
              strengths and weaknesses, enabling targeted efforts towards
              personal or professional development. By highlighting areas of
              deficiency through online tests, individuals can tailor their
              learning and training to enhance their overall competence and
              performance.
            </div>
            <div className="slid_button" onClick={()=>redirectIfLoggedIn()}>Try Test For Free</div>
          </div>
        </div>
        <div className="slid_right">
          <img className="test13" src={imgweakness} alt="test1"  />
        </div>
      </div>
    </div>
  );
};



export default Slid3;
