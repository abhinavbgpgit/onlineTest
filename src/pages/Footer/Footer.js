import React from "react";
import playStoreIcon from "../../images/googleplay.png";
import { BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css";
import { AiOutlineCaretDown } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="text-white">
      <div className="bg-[#75b4df] px-[230px] py-4 flex items-center ">
        <AiOutlineCaretDown className="cursor-pointer" />
        <span className="text-[18px] ml-2 font-semibold text-blue-700 hover:text-blue-950 cursor-pointer ">
          Quick Links{" "}
        </span>
        {/* <span className="text-base">Explore popular categories</span> */}
      </div>
      
      <div className="bg-[#092C43] pl-[230px] pr-[500px] py-10 flex items-center justify-between">
        <div className="text-[17px]">
          <h1 className="font-bold pb-4">IIt JEE Advanced</h1>
          <p>IIT JEE Advanced Preparation Courses</p>
          <p>IIT JEE Advanced Examination</p>
          <p>IIT JEE Advanced Mock Tests</p>
        </div>

        <div className="text-[17px]">
          <h1 className="font-bold pb-4">JEE Advanced</h1>
          <p>JEE Main Preparation Courses</p>
          <p>JEE Main Examination</p>
          <p>JEE Main Test Series</p>
        </div>       

        
        <div className="text-[17px]">
          <h1 className="font-bold pb-4">NEET-UG</h1>
          <p>NEET-UG Preparation Courses</p>
          <p>NEET Crash Course</p>
          <p>NEET Online Test Series</p>
        </div>       
      </div>

      <div className="bg-[#173C5A] px-[230px] py-10 flex items-center justify-between">
        <div className="text-[17px]">
          <h1 className="font-bold pb-4">MORE</h1>
          <p>Know About us</p>
          <p>Testinomials</p>
        </div>

        <div className="text-[17px]">
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

      <div className="bg-[#092C43] py-4 px-[230px] flex items-center justify-between">
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
