import React, { useEffect, useState } from 'react'
import './loginmodal.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { loginShowModal,loginHideModal } from '../../features/user/openLoginModalSlice';

const LoginModal = () => {
    const [toggleLoginModal,setToggleLoginModal]=useState(false)
    // const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated);
    const toggleModal=useSelector((state)=>state.loginModal.loginModalShow)
    useEffect(()=>
    {
        console.log(toggleModal)
    },[toggleModal])

    const dispatch=useDispatch();
  return (
    <div>        


{
    toggleModal && (

        
        <div id="defaultModal"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.56)' }} tabindex="-1" aria-hidden="true" class="fixed top-0   right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class=" domain  w-full max-w-2xl max-h-full bg-red">
      
    <div className='login_page_modal'>
        <div className="main_container">
            <div className="create_account_line">Let's create your account.</div>
            <div className="detail_line">Please fill in the details below to sign.up</div>
         <RiCloseFill className='close_button' onClick={()=>dispatch(loginHideModal())}/>
           <div className="login_input_field">
           <div className="name_field">
              <input className='inputbox name' placeholder='First Name' type="text" />
               <input className='inputbox name' placeholder='Last Name' type="text" />
            </div>
             
            <div><input className='inputbox' placeholder='abc@gmail.com' type="email" /></div>
            <div><input className='inputbox' placeholder='Enter mobile number' type="text" /></div>
            <div><input className='inputbox' placeholder='Enter Password Here' type="password" /></div>
            <div><input className='inputbox' placeholder='Enter Password Here' type="password" /></div>

           <div className="check_box">
            <input type="checkbox" /><div className='term'>I agree to Term & Conditions and Privacy Policy</div></div>  
            </div>

            <button>Create Account</button>
         
        
        <div className="new_login_link">
          <div>-----------OR------------</div>
          <div>Already have an account? Log in</div>
        </div>
        </div>
        </div>
    
    </div >
   

</div>
    )
}


    </div>
  )
}

export default LoginModal