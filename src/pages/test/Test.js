import React from 'react'
import { Link } from 'react-router-dom'
import subject from '../../json/Subject'
import './test.css'
import { Button } from '../../comonents/AdvancedButton'

const Test = () => {
  console.log(subject)
  return (
    <div>
       <div className="test_main center">

<div className="test_left">
<div className='flex items-center justify-center flex-col mt-48 m-0'>
<div className='font-bold text-7xl text-gray-900 heading'>Choose A Test  </div>
<div className='font-bold text-3xl text-cyan-900 phy mt-4'> Best Of Luck...</div>
</div>
</div>
<div className="test_right center">
  {subject.map((item,index)=>
  {
    return(
      <div className="test_card" key={index}>
         <div className="test_card center">
        <div className="test_no">Test No : {item.test}</div> 
        <div className="test_subject"><b>Subject :</b> {item.subject}</div>  
        <div className="test_subject"><b>Total Marks :</b> 200</div>
        <div className="test_subject"><b>Time :</b> 200 minuts</div>
       <Button className="button_register w-60  " variant="primary">Attempt Now </Button>
          </div>
          
      </div>
     
    )
  })}

         
</div>
</div>
    </div>
  )
}

export default Test