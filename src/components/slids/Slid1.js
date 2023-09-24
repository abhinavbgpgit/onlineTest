import React from 'react'
import test1 from '../../images/carousel/higher_confidence.png'
import './slid1.css'

const Slid1 = () => {
  return (
    <div>
             <div className="corcoul">  


<div className="carousel_main">

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
    <img className="test11" src={test1} alt="test1" height="700px"/>
  </div>
</div>

      </div>
    </div>
  )
}

export default Slid1