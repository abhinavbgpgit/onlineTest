import React from 'react'
import test_content from '../../images/home/hello.webp';
import './testPreparation.css'
const TestPreparation = () => {
  return (
    <div>
       <div className="testPreparation_main">
       <div className="carousel_right">
  <img className="test__praparation_img" src={test_content} alt="test1" />
</div>
<div className="testPreparation_left">
  <div className="testPreparation_left_box">
<div className="what_you_will_get">Ace your tests to build confidence for your exams</div>
<div className="testPreparation_heading">Take your Test Preparation </div>
<div className="testPreparation_heading">to the next level</div>
<div className="line"></div>
<div className="testPreparation_description">
Our Online tests make you feel more confident because you can take them in a comfortable setting, get instant feedback on how you're doing, and they adjust to your level, so you're not overwhelmed. This helps you believe in your abilities and get better at what you're learning.
</div>
<div className="testPreparation_button">Try For Free </div>

  </div>


</div>

</div> 
    </div>
  )
}

export default TestPreparation