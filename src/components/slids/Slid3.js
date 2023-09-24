import React from 'react'
import imgweakness from '../../images/carousel/imgweakness.png'
import './slid3.css'

const Slid3 = () => {
  return (
    <div>
             <div className="corcoul">  


<div className="carousel_main">

  <div className="carousel_left">
    <div className="carousel_left_box">
<div className="what_you_will_get">Why you choose us ?</div>
<div className="carousel_heading">Identifying Weaknesses</div>
<div className="line"></div>
<div className="carousel_description">
Online tests offer a convenient and structured way to gauge one's strengths and weaknesses, enabling targeted efforts towards personal or professional development.
By highlighting areas of deficiency through online tests, individuals can tailor their learning and training to enhance their overall competence and performance.
</div>
<div className="carousel_button">Try For Free </div>

    </div>


  </div>
  <div className="carousel_right">
    <img id="slide3img" src={imgweakness} alt="test1"/>
  </div>
</div>

      </div>
    </div>
  )
}

export default Slid3