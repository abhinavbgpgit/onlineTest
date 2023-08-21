import React from 'react'
import { Link } from 'react-router-dom'
import subject from '../../json/Subject'
import './test.css'
import TestCard from './TestCard'


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
     <TestCard item={item} key={index}/>     
    )
  })}

         
</div>
</div>
    </div>
  )
}

export default Test