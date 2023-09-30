import React, { useEffect, useState } from "react";
// import "./loginmodal.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  registerShowModal,
  registerHideModal,
} from "../../features/user/openRegisterModalSlice";
import {
  loginShowModal,
  loginHideModal,
} from "../../features/user/openLoginModalSlice";

const RegistrationModal = () => {
  const toggleModal = useSelector((state) => state.registerModal.registerModalShow);
  useEffect(() => {
    console.log(toggleModal);
  }, [toggleModal]);

  const dispatch = useDispatch();
  
  return (
    <div>
      {toggleModal && (
        <div
          id="defaultModal"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.56)" }}
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100%] max-h-full"
        >
          <div class="cursor-default select-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-2xl max-h-full bg-red">
            <div className="flex justify-center">
              <div
                className="bg-[#F5F9F9] mt-[20px] text-2xl p-[40px] rounded-[10px] relative"
                style={{
                  "box-shadow": "rgba(21, 1, 1, 0.2)0px 20px 18px 10px",
                }}
              >
                <div className="md:text-[43px] mb-2">
                  Let's create your account.
                </div>
                <div className="detail_line text-xl">
                  Please fill in the details below to sign.up
                </div>
                <RiCloseFill
                  className="absolute top-3 right-3 cursor-pointer text-[30px] text-red-600"
                  onClick={() => dispatch(registerHideModal())}
                />
                <div className="mt-8">
                  {/* <input
                      className="inputbox name"
                      placeholder="First Name"
                      type="text"
                    />
                    <input
                      className="inputbox name"
                      placeholder="Last Name"
                      type="text"
                    /> */}
                  <div className="flex justify-between items-center">
                    <div>
                      <label
                        for="first_name"
                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="last_name"
                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* <div>
                    <input
                      className="inputbox"
                      placeholder="abc@gmail.com"
                      type="email"
                    />
                  </div> */}
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                      placeholder="john.doe@company.com"
                      required
                    />
                  </div>
                  {/* <div>
                    <input
                      className="inputbox"
                      placeholder="Enter mobile number"
                      type="text"
                    />
                  </div> */}
                  <div>
                    <label
                      for="phone"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>

                  {/* <div>
                    <input
                      className="inputbox"
                      placeholder="Enter Password Here"
                      type="password"
                    />
                  </div> */}
                  <div class="mb-6">
                    <label
                      for="password"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                      placeholder="•••••••••"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="confirm_password"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="confirm_password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 px-3 py-[6px]"
                      placeholder="•••••••••"
                      required
                    />
                  </div>

                  {/* <div className="check_box">
                    <input type="checkbox" />
                    <div className="term">
                      I agree to Term & Conditions and Privacy Policy
                    </div>
                  </div> */}
                  <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        class="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <button className="bg-[#50A150] pt-2 pb-3 px-5 text-white font-sans tracking-tight mb-3 rounded-[30px] translate-x-[43%] md:translate-x-[80%]" style={{"box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px]"}}>Create Account</button>

                <div className="text-center text-xl">
                  <div>-----------OR------------</div>
                  <div>Already have an account? <span className="text-blue-500  border-blue-700 cursor-pointer hover:no-underline" onClick={()=>{dispatch(registerHideModal());dispatch(loginShowModal())}}>Log in</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationModal;
