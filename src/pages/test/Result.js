import React from "react";
import "./result.css";
import { FcOk } from "react-icons/fc";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai";
import PiChart from "./PiChart";

const Result = () => {
  return (
    <div>
       <div className="score_board">Score Board</div>
      <div className="result_main">       
        <div className="first_column">
          <div className="grade center">
           <div className="grade_name">Grade</div>
           <div className="dgade_tilte">A+</div>
            
            </div>
          <div className="time_spent_per_question center">
          <div className="time_spent_per_question_text">Time Spent Per Question</div>
          <div className="time_spent_per_question_value">3.2 min</div>
          </div>

        </div>

        <div className="second_column">
          <div className="result center flex-col">
          <div className="result_heading">
            Your Score
          </div>
          <div className="result_circle center">
            56/100
          </div>
          </div>
          <div className="answers">
            <div className="correct center flex-col">
             <div className="correct_icon"><FcOk className="icon_ok"/></div>
             <div className="correct_text">Correct</div>
             <div className="correct_number">2</div>
             <div className="correct_question_text">Questions</div>
            </div>
            <div className="wrong center flex-col">
            <div className="wrong_icon"><AiOutlineCloseCircle className="icon_wrong"/></div>
             <div className="wrong_text">Wrong</div>
             <div className="wrong_number">8</div>
             <div className="wrong_question_text">Questions</div>
            </div>
            <div className="not_attempted center flex-col">
            <div className="not_attempted_icon"><AiOutlineMinusCircle className="icon_not_attempted"/></div>
             <div className="not_attempted_text">Skipped</div>
             <div className="not_attempted_number">8</div>
             <div className="not_attempted_text">Questions</div>
            </div>
          </div>
        </div>
        <div className="third_column">
        <div className="question_wise_analysis"><PiChart/></div>
          <div className="percentile center flex-col">
            


          <div className="percentage_text">Percentage of Marks</div>
          <div className="percentage_value">45%</div>
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
