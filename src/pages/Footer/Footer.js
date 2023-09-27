import React, { useState } from "react";
import playStoreIcon from "../../images/googleplay.png";
import { BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css";
import { AiOutlineCaretDown } from "react-icons/ai";
const Footer = () => {
  const [toggle, setToggle]=useState(false)
  return (
    <div className="text-white">
      <div className="bg-[#75b4df] px-[230px] py-4 flex items-center " onClick={()=>setToggle(!toggle)}>
        <AiOutlineCaretDown className="cursor-pointer" />
        <span className="text-[18px] ml-2 font-semibold text-blue-700 hover:text-blue-950 cursor-pointer ">
          Quick Links{" "}
        </span>
        <span className="text-base mx-5 text-gray-900">Explore popular categories</span>
      </div>
      {toggle && (
 <div className="bg-[#ebf1f5] pl-[230px] pr-[500px] py-10 flex items-center justify-between text-black slow_motion">
 <div className="text-[17px]">
   <h1 className="font-bold pb-4">IIT JEE Advanced</h1>
   <p>IIT JEE Test Chaperwise</p>
   <p>IIT JEE Test Full Syllabus </p>

 </div>

 <div className="text-[17px]">
   <h1 className="font-bold pb-4">JEE Advanced</h1>
   <p>JEE Main Test Chaperwise</p>
   <p className="">JEE Main Test Full Syllabus</p>  
 </div>       

 
 <div className="text-[17px]">
   <h1 className="font-bold pb-4">NEET-UG</h1>
   <p>NEET Test Chaperwise</p>
   <p>NEET Test Full Syllabus</p>

 </div>       
</div>

      )}
     

      <div className="bg-[#296f9e] px-[230px] py-5 flex items-center justify-between text-white">
        <div className="text-[17px] flex gap-10">
          <div>Know About us</div>
          <div>Testinomials</div>
       
          <div>Contact Us</div>
          <div>Sitemap</div>
        </div>

        <div>
          <h1 className="text-xl font-bold">
            Prepare Anytime, Anywhere! Download App Now!
          </h1>
          <img className="w-[150px]" src={playStoreIcon} alt="" />
        </div>
      </div>

      <div className="bg-[#75b4df] py-4 px-[230px] flex items-center justify-between text-blue-950">
        <div className="flex items-center justify-center gap-3 text-base">
          <div>Privacy</div>
          <div>|</div>
          <div>Terms & Conditions</div>
          <div className="ml-9">| Follow us:</div>
          <BsFacebook className="text-xl ml-2" />
          <AiFillTwitterCircle className="text-2xl" />
          <BsYoutube className="text-2xl" />
          <BsWhatsapp className="text-xl" />
        </div>

        <div>
          Copyright @ 2010-2023 VedicTechnologies.com. All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
