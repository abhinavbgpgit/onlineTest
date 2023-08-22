import React from 'react'
import './instrunction.css'
import { useLocation } from 'react-router-dom';
import Subject from '../../json/Subject';
import { FcDebian } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { Button } from '../../comonents/AdvancedButton'

const Instrunctions = () => {
    const location=useLocation();
    console.log(location);
    const foundSubject = Subject.filter((subject) => subject.test === location.state.id); 
  return (
    <>
    <div className='instrunction_main p-10'>
      <div className=''>
        <div className="instr_heading text-center text-5xl font-bold  text-lime-700 ">
          {foundSubject[0].topic}
        </div>
      </div>
      <div className="instruction ml-16 mt-10   text-blue-700">
        General Instructions :{" "}
      </div>
      <div className="instrunctions_1 ">
        <ul className="instrunctions_1_1">
          <li className="items">
            The clock has been set at the server and the countdown timer at the
            top right corner of your screen will display the time remaining for
            you to complete the exam. When the clock runs out the exam ends by
            default - you are not required to end or submit your exam.
          </li>
        </ul>
      </div>
      <div className="instrunctions_2 ">
      <div className="colors_of_question mb-6 text-3xl">Colors for Questions</div>  
        <ul className="instrunctions_1_2">
          <li className="items_1">
            <div className="item_1_icon"></div>
            <div className="item_1_text">
              {" "}
             You have not visited the question yet
            </div>
          </li>
          <li className="items_2">
            <div className="item_2_icon"></div>
            <div className="item_2_text">
              {" "}
              You have not answered the question.
            </div>
          </li>
          <li className="items_3">
            <div className="item_3_icon"></div>
            <div className="item_3_text">
              {" "}
              You have answered the question.
            </div>
          </li>
          <li className="items_4">
            <div className="item_4_icon"></div>
            <div className="item_4_text">
              {" "}
              You have marked the question for review.
            </div>
          </li>
        </ul>
      </div>



      <div className="instrunctions_2 ">
      <div className="colors_of_question mb-6 text-3xl">Navigating to a question </div>  
        <ul className="instrunctions_3">
          <li className="items_1">
            <div className=""><FcDebian className='item_1_icon_icon'/></div>
            <div className="item_1_text">
              {" "}
              Click on the question number on the question palette at the right of your screen to go to that numbered question directly. 
            </div>
          </li>
          <li className="items_2">
            <div className=""><FcDebian className='item_1_icon_icon'/></div>
            <div className="item_2_text">
              {" "}
              Click on Save and Next to save answer to current question and to go to the next question in sequence.
            </div>
          </li>
          <li className="items_3">
            <div className=""><FcDebian className='item_1_icon_icon'/></div>
            <div className="item_3_text">
              {" "}
              Click on Mark for Review to save answer to current question, mark it for review, and to go to the next question in sequence.
            </div>
          </li>
         
        </ul>
      </div>

      <div className="instrunctions_2 ">
      <div className="colors_of_question mb-6 text-3xl">Answering questions </div>  
        <ul className="instrunctions_3">
          <li className="items_1">
            <div className=""><FcMindMap className='item_1_icon_icon'/></div>
            <div className="item_1_text">
              {" "}
              To select your answer, click on one of the option buttons. 
            </div>
          </li>
          <li className="items_2">
            <div className=""><FcMindMap className='item_1_icon_icon'/></div>
            <div className="item_2_text">
              {" "}
              To change your answer, click the another desired option button
            </div>
          </li>
          <li className="items_3">
            <div className=""><FcMindMap className='item_1_icon_icon'/></div>
            <div className="item_3_text">
              {" "}
              To save your answer, you MUST click on <b>save & next</b> button
            </div>
          </li>
          <li className="items_3">
            <div className=""><FcMindMap className='item_1_icon_icon'/></div>
            <div className="item_3_text">
              {" "}
              To deselect a chosen answer, click on the chosen option again or click on the <b> Clear Response</b> button
            </div>
          </li>
          <li className="items_3">
            <div className=""><FcMindMap className='item_1_icon_icon'/></div>
            <div className="item_3_text">
              {" "}
              To mark a question for review click on <b>  Mark for Review </b> button
            </div>
          </li>
        </ul>
      </div>
      <NavLink  to={`/testongo/${location.state.id}`}><Button className="button_go_to_test w-40  " variant="primary">Go To Test </Button></NavLink>
      </div>
    </>
  );
}

export default Instrunctions