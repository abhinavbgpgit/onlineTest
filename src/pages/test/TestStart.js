import React from 'react'
import { Button } from '../../comonents/AdvancedButton'
import { NavLink, useParams } from 'react-router-dom'
import Subject from '../../json/Subject'
const TestStart = () => {
    const param=useParams()
    const foundSubject = Subject.filter((subject) => subject.test === param.id);
    
    console.log(foundSubject);
    console.log(param)
    console.log(Subject)
  return (
    <div>
      <div className="home_main center">
        <div className="home_left">
          <div className="flex items-center justify-center flex-col mt-48 m-0">
            <div className="font-bold text-7xl text-cyan-900 heading">
             {foundSubject[0].subject}
            </div>
            <div className="font-bold text-6xl text-pink-900 phy mt-8">
              {" "}
             {foundSubject[0].topic}
            </div>
          </div>
        </div>
        <div className="home_right center">
          <div className="free_test_card center">
            <NavLink to="/test"> Go to Test </NavLink>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default TestStart