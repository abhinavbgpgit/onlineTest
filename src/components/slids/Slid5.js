import React from "react";
import imgfamiliarity from "../../images/carousel/imgfamiliarity.png";
import "./slide.css";


const Slid5 = () => {
  return (
    <div>
      <div className="slid_main">
        <div className="slid_left">
          <div className="slid_left_box">
            <div className="what_you_will_get">Why you choose us ?</div>
            <div className="slid_heading">Familiarity with the Test Format</div>
            <div className="line"></div>
            <div className="slid_description">
            When students attend our online tests, they gain valuable
                experience with the exam format, becoming more comfortable with
                the layout, question types, and time constraints. This
                familiarity enhances their test-taking confidence and can lead
                to improved performance on future assessments.
            </div>
            <div className="slid_button">Try Test For Free</div>
          </div>
        </div>
        <div className="slid_right">
          <img className="test15" src={imgfamiliarity} alt="test1"  />
        </div>
      </div>
    </div>
  );
};


export default Slid5;
