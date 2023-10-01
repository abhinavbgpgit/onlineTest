import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/AdvancedButton";
import "./home.css";
import Carousel from '../../components/Carousel';
import TestPreparation from "./TestPreparation";
import AnyTimeTest from "./AnyTimeTest";
const Home = () => {
  localStorage.setItem('home',"papa")
  return (
    <div>
      <div className="corcoul">
        <Carousel/>
         <TestPreparation/>
         <AnyTimeTest/>
         

 {/* 2nd part of the home */}



      </div>
     </div>
  );
};

export default Home;
