import React from 'react'
import instantfeedback from '../../images/carousel/instantfeedback.png'
import './slid4.css'
import { useInstantTransition } from 'framer-motion'

const Slid4 = () => {
  return (
    <div>
             <div className="corcoul">  


<div className="carousel_main">

  <div className="carousel_left">
    <div className="carousel_left_box">
<div className="what_you_will_get">Why you choose us ?</div>
<div className="carousel_heading">Instant Feedback</div>
<div className="line"></div>
<div className="carousel_description">
Our educational team provides instant feedback to students, offering them timely insights into their performance, strengths, and areas that need improvement, fostering a proactive and constructive learning experience. This immediate feedback loop encourages students to make real-time adjustments to enhance their understanding and mastery of the subject matter.
</div>
<div className="carousel_button">Try For Free </div>

    </div>


  </div>
  <div className="carousel_right">
    <img id="slide4img" src={instantfeedback} alt="test1" />
  </div>
</div>

      </div>
    </div>
  )
}

export default Slid4