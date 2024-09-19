import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-[282px] w-full px-[300px] flex flex-col justify-center gap-[86px]">
      <div className="flex justify-between ">
        <div>
          <img src="./pclogo.png" alt="" />
        </div>
        <div className="flex gap-[38px]">
          <div className="flex gap-5 items-center">
            <FiPhone className="text-white w-5 h-5" />
            <div className="text-white">(976) 7007-1234</div>
          </div>
          <div className="flex gap-5 items-center">
            <IoMailOutline className="text-white w-5 h-5" />
            <div className="text-white">contact@ecommerce.mn</div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px]"></div>
      <div className="flex justify-between">
        <div className="text-white font-medium">© 2024 Ecommerce MN</div>
        <div className="flex gap-[26px]">
          <FaFacebook className="text-white w-5 h-5" />
          <FaInstagram className="text-white w-5 h-5" />
          <FaTwitter className="text-white w-5 h-5" />
          <FaLinkedin className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
