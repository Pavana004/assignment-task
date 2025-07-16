import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Copyright from "../../assets/images/copyrightpng";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoVimeo } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container overflow-hidden bg-custom-color pt-10 relative">
      <div className=" flex p-6 w-[80%] mx-auto gap-5 ">
        <div className="flex flex-col w-[20%] gap-8 ">
          <img src={logo} alt="logo" />
          <div className="flex  overflow-hidden justify-between">
            <div className="w-[40px] h-[40px] rounded-full border-[1px] border-white flex justify-center items-center">
              <FaLinkedinIn size={20} color="white" />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-[1px] border-white flex justify-center items-center">
              <FaXTwitter size={20} color="white" />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-[1px] border-white flex justify-center items-center">
              <IoLogoVimeo size={20} color="white" />
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-white w-[25%]  flex-col gap-3 ">
          <div>
            <h2 className=" font-semibold">Research Methods</h2>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" cursor-pointer hover:underline">
              Qualitative Research
            </p>
            <p className=" cursor-pointer hover:underline">
              Quantitative Research
            </p>
            <p className=" cursor-pointer hover:underline">Fieldwork</p>
            <p className=" cursor-pointer hover:underline">Surveys</p>
            <p className=" cursor-pointer hover:underline">
              Focus Group Discussions
            </p>
            <p className=" cursor-pointer hover:underline">Quality checks</p>
          </div>
        </div>
        <div className="flex mx-auto text-white w-[25%]  flex-col gap-3 ">
          <div>
            <h2 className=" font-semibold">Capabilites</h2>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" cursor-pointer hover:underline">
              Branding and Advertising Communication
            </p>
            <p className=" cursor-pointer hover:underline">
              Market Opportunity Research
            </p>
            <p className=" cursor-pointer hover:underline">Product Research</p>
            <p className=" cursor-pointer hover:underline">
              Consumer Research and Segmentation
            </p>
          </div>
        </div>
        <div className="flex mx-auto text-white w-[25%]  flex-col gap-3 ">
          <div>
            <h2 className=" font-semibold">Legal</h2>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" cursor-pointer hover:underline">Privacy</p>
            <p className=" cursor-pointer hover:underline">AI Policy</p>
            <p className=" cursor-pointer hover:underline">Fieldwork</p>
            <p className=" cursor-pointer hover:underline">Surveys</p>
            <p className=" cursor-pointer hover:underline">
              Business Conduct and Ethics
            </p>
            <p className=" cursor-pointer hover:underline">Site Disclaimer</p>
          </div>
        </div>
        <div className="flex mx-auto text-white w-[25%]  flex-col gap-3 ">
          <div>
            <h2 className=" font-semibold">Connect</h2>
          </div>
          <div className="flex flex-col gap-1">
            {/* Link tag should to add to navigate */}

            <p className=" cursor-pointer hover:underline">Join Our Panel</p>
            <p className=" cursor-pointer hover:underline">Request a Bid</p>
            <p className=" cursor-pointer hover:underline">Careers</p>
            <p className=" cursor-pointer hover:underline">Contact Us</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-2 text-white mx-auto p-6 w-[80%]  items-center">
        <img src={Copyright} alt="logo" className="w-[14px] h-[14px]" />
        <p className="text-[12px]">Copyright 2025. All Rights Reserved.</p>
      </div>

      <div className=" absolute w-[56px] h-[40px] bg-white hover:bg-red-500 hover:text-white opacity-30 bottom-3 right-[2%] flex justify-center items-center">
        {isVisible && (
          <SlArrowUp
            size={40}
            color="black"
            className="font-bold cursor-pointer"
            onClick={handleScrollToTop}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
