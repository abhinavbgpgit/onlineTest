import React from "react";
import imgweakness from "../../images/carousel/imgweakness.png";

const Slid3 = () => {
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
            <div className="slid_button">Try For Free </div>
          </div>
        </div>
        <div className="slid_right">
          <img className="test11" src={imgweakness} alt="test1" />
        </div>
      </div>
    </div>
  );
};



export default Slid3;
