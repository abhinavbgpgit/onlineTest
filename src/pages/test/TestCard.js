import React from 'react'
import { Button } from '../../components/AdvancedButton'
import { NavLink } from 'react-router-dom'
const TestCard = ({item}) => {
  return (
    <div className="test_card" >
         <div className="test_card center">
        <div className="test_no">Test ID : {item.test}</div> 
        <div className="test_subject"><b>Subject :</b> {item.topic}</div>  
        <div className="test_subject"><b>Total Marks :</b> 200</div>
        <div className="test_subject"><b>Time :</b> 200 minuts</div>
        <NavLink key={item.test} to={`/test/${item.test}`}><Button className="button_register w-60  " variant="primary">Attempt Now </Button></NavLink>
       
          </div>
          
      </div>
  )
}

export default TestCard