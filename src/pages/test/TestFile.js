import React from 'react';
import './testfile.css';
import { useState, useEffect } from 'react';
import { Button } from "../../comonents/AdvancedButton";
import questions from '../../json/Questions';
const TestFile = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [currentSecond, setCurrentSecond] = useState(new Date().getSeconds());
  const numbers = Array.from({ length: 50 }, (_, index) => index + 1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setCurrentMinute(now.getMinutes());
      setCurrentSecond(now.getSeconds());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
<div className="floating_navbar">
<div className="test_name">Test Name :<span style={{color:"#2F4F4F"}}>Cell Structure</span>  </div>
<div className="time_remaining">
 <b>Time Remaining : </b> 
  <div className="time">
    <div className="hour center">{currentHour}</div> 
    <div className="colon">:</div>
    <div className="minut center">{currentMinute}</div>
    <div className="colon">:</div>
    <div className="second center">{currentSecond}</div>
  </div>
</div>
</div>
<div className="main_test">
  <div className="test_left">
<div className="question_no center">Question No : 34 (out of 100)</div>

<div className="question">
<b>Question : </b>
{
  questions.map((item)=>
  {
    return(
      <div>{item.first_question}</div>
    )
  })
}



Six cars Creta, Eco sports, Jeep, Nano, Safari and Swift are standing in a row facing North but not necessarily in the same order. Creta is second to the left of Eco sports. Two cars are standing between Eco sports and Nano which is not an immediate neighbour of Creta. Jeep is standing to the immediate left of Swift. How many cars are standing between Safari and Swift?
</div>
<ul className="options">
  <li className="option">One</li>
  <li className="option">Two</li>
  <li className="option">Three</li>
  <li className="option">Four</li>
  </ul>

  </div>
  <div className="test_file_right">
<div className="color_code">
  <div className="color_code_text">Color Code</div>
  <div className="color_code_items">
    <div className="color_code_item center">
      <div className="square_1 center">16</div>
      <div className="square_1_text ml-2">Answered</div>

    </div>
    <div className="color_code_item center">
    <div className="square_2 center">16</div>
      <div className="square_1_text ml-2">Marked For Review</div>
    </div>
    <div className="color_code_item center">
    <div className="square_3 center">16</div>
      <div className="square_1_text ml-2">Not Visited</div>
    </div>
    <div className="color_code_item center">
    <div className="square_4 center">16</div>
      <div className="square_1_text ml-2">Visited Not Answered</div>
    </div>
  </div>
</div>
<div className="question_analyser">

{
  numbers.map((item)=>
  {
    return(
      <div className='question_analyser_item center'>{item}</div>
    )
  })
}

</div>

  </div>
</div>
<div className="bottom_buttons">
  <div className="left_buttons">
    <Button className="bg-violet-700">Mark for Review & next</Button>
  <Button className="bg-sky-500 ml-5">Clear Response</Button>
  </div>
    <Button >Save & next</Button>
</div>
    </div>
  )
}

export default TestFile