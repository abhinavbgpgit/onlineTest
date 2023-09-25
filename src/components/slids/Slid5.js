import React from 'react'
import imgfamiliarity from '../../images/carousel/imgfamiliarity.png'
import './slid5.css'

const Slid5 = () => {
  return (
    <div>
             <div className="corcoul">  


<div className="carousel5_main">

  <div className="carousel_left">
    <div className="carousel_left_box">
<div className="what_you_will_get">Why you choose us ?</div>
<div className="carousel_heading">Familiarity with the </div>
<div className="carousel_heading">Test Format</div>
<div className="line"></div>
<div className="carousel_description">
When students attend our online tests, they gain valuable experience with the exam format, becoming more comfortable with the layout, question types, and time constraints. This familiarity enhances their test-taking confidence and can lead to improved performance on future assessments.
</div>
<div className="carousel_button">Try For Free </div>

    </div>


  </div>
  <div className="carousel_right">
    <img id="slide5img" src={imgfamiliarity} alt="test1"/>
  </div>
</div>

      </div>
    </div>
  )
}

export default Slid5