import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/AdvancedButton";
import "./home.css";
import test2 from '../../images/carousel/test5.webp'
import Carousel from '../../components/Carousel';
const Home = () => {
  return (
    <div>
      <div className="corcoul">
        <Carousel/>


 {/* 2nd part of the home */}

<div className="main_home1">

  <div className="carousel_left">
    <div className="carousel_left_box">
<div className="what_you_will_get">Why you choose us ?</div>
<div className="carousel_heading">Higher Confidence</div>
<div className="line"></div>
<div className="carousel_description">
Our Online tests make you feel more confident because you can take them in a comfortable setting, get instant feedback on how you're doing, and they adjust to your level, so you're not overwhelmed. This helps you believe in your abilities and get better at what you're learning.
</div>
<div className="carousel_button">Try For Free </div>

    </div>


  </div>
  <div className="carousel_right">
    <img className="test1" src={test2} alt="test1" />
  </div>
</div>

      </div>
      <div className="home_main center">
        <div className="home_left">
          <div className="flex items-center justify-center flex-col mt-48 m-0">
            <div className="font-bold text-7xl text-cyan-900 heading">
              Crack NEET UG{" "}
            </div>
            <div className="font-bold text-3xl text-cyan-900 phy">
              {" "}
              With our trusted test series
            </div>
          </div>
        </div>
        <div className="home_right center">
          <div className="free_test_card center">
            <Link to="/test"> Try test for free</Link>
          </div>
          <div className="subscription_card center">
            Unlock All Tests
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
