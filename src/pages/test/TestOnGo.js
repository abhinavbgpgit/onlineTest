import React from 'react'
import questions from '../../json/Questions'
import Subject from '../../json/Subject';
import { FcOk } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/AdvancedButton'
import './testongo.css'

const TestOnGo = () => {
  const param=useParams()
  console.log(param)
  const foundSubject = Subject.filter((subject) => subject.test === param.id); 
  return (
    <div>
       <div className='instrunction_main p-10'>
      <div className=''>
     
        <div className="instr_heading text-center text-5xl font-bold  text-green-700 ">
          {foundSubject[0].topic}
        </div>
       
      </div>
     
     
      <div className="instrunctions_2 hmm ">
      <div className="instr_heading text-center text-3xl font-bold  text-red-700 mt-4">
          About this test 
        </div>
        <ul className="instrunctions_1_2 mt-4">
          <li className="items_1">
            <div className=""><FcOk className='item_1_icon_icon_icon '/></div>
            <div className="item_1_text">
              {" "}
             You have not visited the question yet
            </div>
          </li>
          <li className="items_2">
            <div className=""><FcOk className='item_1_icon_icon_icon '/></div>
            <div className="item_2_text">
              {" "}
              You have not answered the question.
            </div>
          </li>
          <li className="items_3">
            <div className=""><FcOk className='item_1_icon_icon_icon '/></div>
            <div className="item_3_text">
              {" "}
              You have answered the question.
            </div>
          </li>
          <li className="items_4">
            <div className=""><FcOk className='item_1_icon_icon_icon '/></div>
            <div className="item_4_text">
              {" "}
              You have marked the question for review.
            </div>
          </li>
          <li className="items_3">
            <div className=""><FcOk className='item_1_icon_icon_icon '/></div>
            <div className="item_3_text">
              {" "}
              You have answered the question.
            </div>
          </li>
          <li className="items_4">
            <div className=""><FcOk className='item_1_icon_icon_icon '/></div>
            <div className="item_4_text">
              {" "}
              You have marked the question for review.
            </div>
          </li>
        </ul>
      </div>     
      <NavLink  to={`/testfile`}><Button className="button_go_to_test_new   " variant="primary">Proceed To Test </Button></NavLink>
      </div>
    </div>
  )
}

export default TestOnGo