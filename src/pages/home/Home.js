import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/AdvancedButton";
import "./home.css";
import Carousel from '../../components/Carousel';
import TestPreparation from "./TestPreparation";
const Home = () => {
  return (
    <div>
      <div className="corcoul">
        <Carousel/>
         <TestPreparation/>

 {/* 2nd part of the home */}



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
