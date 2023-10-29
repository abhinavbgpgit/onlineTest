import React, { useState } from "react";
import playStoreIcon from "../../images/googleplay.png";
import downloadAppstore from '../../images/home/appstore.png';
import { BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "./footer.css";
import { AiOutlineCaretDown } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import  {FaAtlassian}  from "react-icons/fa6";

const showFooter = {
  height:"auto",
  opacity:1,
  transition:{
    duration:.3,
  }
}
const hideFooter = {
  height:0,
  opacity:0,
  transition:{
    duration:.3,
  }
}
const Footer = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="text-white">
      <div
        className="bg-[#75b4df] md:px-[230px] py-4 flex md:flex-row flex-col md:items-center pl-[10%]"
        onClick={() => setToggle(!toggle)}
      >
        <div className="flex items-center">
          <AiOutlineCaretDown className="cursor-pointer" />
          <span className="text-[18px] ml-2 font-semibold text-blue-700 hover:text-blue-950 cursor-pointer ">
            Quick Links{" "}
          </span>
        </div>
        <span className="text-base mx-5 text-gray-900">
          Explore popular categories
        </span>
      </div>
      <AnimatePresence>
        {toggle && (
        <motion.div initial={hideFooter} animate={showFooter} exit={hideFooter} className="bg-[#ebf1f5] pl-[10%] md:pl-[230px] md:pr-[500px] flex md:flex-row flex-col md:items-center justify-between text-black slow_motion ">
            <div className="text-[17px] py-7">
              <h1 className="font-bold md:pb-4">IIT JEE Advanced</h1>
              <p>IIT JEE Test Chaperwise</p>
              <p>IIT JEE Test Full Syllabus </p>
            </div>

            <div className="text-[17px]">
              <h1 className="font-bold mt-4 md:mt-0 md:pb-4">JEE Advanced</h1>
              <p>JEE Main Test Chaperwise</p>
              <p className="">JEE Main Test Full Syllabus</p>
            </div>

            <div className="text-[17px] py-7">
              <h1 className="font-bold mt-4 md:mt-0 md:pb-4">NEET-UG</h1>
              <p>NEET Test Chaperwise</p>
              <p>NEET Test Full Syllabus</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#296f9e] pl-[10%] md:px-[230px] py-5 flex md:flex-row flex-col md:items-center justify-between text-white">
        <div className="text-[17px] md:flex gap-10">
          <div>Know About us</div>
          <div>Testinomials</div>

          <div>Contact Us</div>
          <div>Sitemap</div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold mt-5 md:mt-0">
            Prepare Anytime, Anywhere! Download App Now!
          </h1>
          <figure className="flex items-center justify-between">
            <img className="w-[150px]" src={playStoreIcon} alt="" />
            <img className="w-[131px]" src={downloadAppstore} alt="test1"  />
          </figure>
        </div>
      </div>

      <div className="bg-[#75b4df] py-4 pl-[10%] md:px-[230px] flex md:flex-row flex-col md:items-center justify-between text-blue-950">
        <div className="md:flex items-center justify-center gap-3 text-base">
          <div>Privacy</div>
          <div className="hidden md:block">|</div>
          <div>Terms & Conditions</div>
          <div className="md:ml-9 flex items-center gap-5">
            | Follow us:
            <BsFacebook className="text-xl ml-2 hover:text-[#106BFF] hover:scale-[1.5] transition-all linear duration-300 cursor-pointer" />
            <FaAtlassian className="text-2xl rounded-[50%] hover:p-1 hover:text-white hover:bg-[#0B0B0B] hover:scale-[1.4] transition-all linear duration-300 cursor-pointer" />
            <BsYoutube className="text-2xl hover:text-[#FF0808] hover:scale-[1.5] transition-all linear duration-300 cursor-pointer" />
            <BsWhatsapp className="text-xl hover:text-[white] hover:bg-[#51CD5F] hover:scale-[1.5] transition-all linear duration-300 cursor-pointer" />
          </div>
        </div>

        <div className="mt-5 md:mt-0">
          Copyright @ 2010-2023 VedicTechnologies.com. All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
