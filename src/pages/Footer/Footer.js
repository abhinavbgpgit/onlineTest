
import React from "react";
import playStoreIcon from "../../images/googleplay.png";
import { BsFacebook, BsYoutube, BsWhatsapp} from 'react-icons/bs'
import { AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="text-white">

      <div className="bg-[#092C43] px-[230px] py-4">
        <span className="text-[18px] font-semibold">+ QUICK LINKS - </span>
        <span className="text-base">Explore popular categories</span>
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
          <BsFacebook className="text-xl ml-2"/>
          <AiFillTwitterCircle className="text-2xl"/>
          <BsYoutube className="text-2xl"/>
          <BsWhatsapp className="text-xl"/>
        </div>

        <div>
          Copyright @ 2010-2023 CareerOrbits.com.All Right Reserved.
        </div>

      </div>
    </div>
  );
};

export default Footer;

