import React from 'react'
import test1 from '../../images/carousel/test5.webp'
import './slid5.css'

const Slid5 = () => {
  return (
    <div>
             <div className="corcoul">  


<div className="carousel_main">

  <div className="carousel_left">
    <div className="carousel_left_box">
<div className="what_you_will_get">Why you choose us ?</div>
<div className="carousel_heading">Time Management</div>
<div className="line"></div>
<div className="carousel_description">
Time management during online tests helps you stay focused, complete questions accurately, and finish on time, boosting your chances of success. Efficient time management also reduces stress, allowing you to approach the test with confidence and perform at your best.
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

export default Slid5