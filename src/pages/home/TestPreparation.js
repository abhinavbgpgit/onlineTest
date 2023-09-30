import React from 'react'
import test_content from '../../images/home/hello.webp';
import './testPreparation.css'
import mockTestIcon from '../../images/prevyearmocktesticon.png'
import detailedReportIcon from '../../images/detailedreport icon.png'
import {registerShowModal,registerHideModal} from '../../features/user/openRegisterModalSlice';
import { useDispatch } from 'react-redux'

const TestPreparation = () => {
  const dispatch = useDispatch();
  return (
    <div>
       <div className="testPreparation_main">
       <div className="testPreparation_right">
  <img className="test__praparation_img" src={test_content} alt="test1" />
</div>
<div className="testPreparation_left">
  <div className="testPreparation_left_box">
<div className="testPreparation_what_you_will_get">Ace your tests to build confidence for your exams</div>
<div className="testPreparation_heading">Take your Test Preparation </div>
<div className="testPreparation_heading mt-[-10px]">To the next level</div>
<div className="testPreparation_description w-[80%]">
  <div className='pl-[86px] relative'>
    <img className='w-16 absolute top-3 left-2' src={mockTestIcon} alt="" />
    <h1 className='text-[20px] font-bold'>Previous Years Papers & Mock Tests</h1>
    <p className='text-[17px]'>Revise and prepare with previous years papers & free Mock Tests for assured success</p>
  </div>
  <div className='pl-[86px] relative mt-10'>
    <img className='w-16 absolute top-2 left-2' src={detailedReportIcon} alt="" />
    <h1 className='text-[20px] font-bold'>Detailed Reports</h1>
    <p className='text-[17px]'>Get detailed report and analysis to improve your learning and make your NEET exam simplified.</p>
  </div>
</div>
<div className="testPreparation_button" onClick={()=>dispatch(registerShowModal())}>Try Test For Free</div>

  </div>


</div>

</div> 
    </div>
  )
}

export default TestPreparation