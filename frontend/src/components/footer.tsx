import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-[282px] w-full px-[300px]">
      <div className="flex justify-between ">
        <div>
          <img src="./pclogo.png" alt="" />
        </div>
        <div className="flex gap-[38px]">
          <div className="flex gap-5 items-center">
            <FiPhone className="text-white border rounded-full" />
            <div className="text-white">(976) 7007-1234</div>
          </div>
          <div className="flex gap-5 items-center">
            <IoMailOutline className="text-white border rounded-full" />
            <div className="text-white">contact@ecommerce.mn</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-white">© 2024 Ecommerce MN</div>
        <div className="flex">
          <FaFacebook className="text-white" />
          <FaInstagram className="text-white" />
          <FaTwitter className="text-white" />
          <FaLinkedin className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
