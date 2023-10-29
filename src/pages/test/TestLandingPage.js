import React from 'react'
import { Link } from 'react-router-dom'
import subject from '../../json/Subject'
import './testlandingpage.css'
import TestCard from './TestCard'


const TestLandingPage = () => {
  console.log(subject)
  return (
    <div>
      <div className="test_main center ">
<div className="hello_shadow">HELLO</div>
        <div className="test_left">
          <div className='flex items-center justify-center flex-col mt-48 m-0'>
            <div className="greeting_user mt-10">Hello <span>Vikram</span></div>
            <div className='font-bold text-5xl text-gray-900 heading mt-10'>Welcome to Vedic Test Portal</div>
            <div className='font-bold text-3xl text-cyan-900 phy mt-10'> Choose one of your desired <span className='text-red-500'>Test Area</span></div>
         <div className="buy_button mt-5">Buy All Test</div>
          </div>
        </div>
        <div className="test_right center">


          {/* {subject.map((item, index) => {
            return (
              <TestCard item={item} key={index} />
            )
          })} */}


        </div>
      </div>
    </div>
  )
}

export default TestLandingPage