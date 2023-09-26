import React from 'react'
import mockTestIcon from '../../images/prevyearmocktesticon.png'
import detailedReportIcon from '../../images/detailedreport icon.png'
import test_content from '../../images/home/ANY_TIME_TEST.png';
import downloadAppplay from '../../images/home/playstore.png';
import downloadAppstore from '../../images/home/appstore.png';
import './anytimetest.css'

const AnyTimeTest = () => {
  return (
    <div>
             <div className="any_time_text_main">
   
<div className="any_time_text_left">
  <div className="any_time_text_left_box">
<div className="what_you_will_get">Ace your tests to build confidence for your exams</div>
<div className="any_time_text_heading">Take your Test from anywhere </div>
<div className="any_time_text_heading mt-[-10px]">And any time</div>
<div className="any_time_text_description w-[80%]">
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
<div className=' buttons flex items-center'>
<div className="any_time_text_button">Download Our App </div>
<img className="any_time_text_img_play" src={downloadAppplay} alt="test1"  />
<img className="any_time_text_img_store" src={downloadAppstore} alt="test1"  />
</div>
  </div>


</div>
<div className="any_time_text_right">
  <img className="test__praparation_img" src={test_content} alt="test1" />
</div>
</div> 
    </div>
  )
}

export default AnyTimeTest