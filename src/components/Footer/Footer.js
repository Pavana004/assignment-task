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
    <div className=" mx-auto  pt-10 pb-10 bg-custom-color relative ">
      <div className=" px-10 sm:px-6 lg:px-8 max-w-7xl w-full   flex mx-auto flex-col relative ">
        <div className="px-10 flex flex-col lg:flex-row  justify-between w-full gap-3 pb-8  ">
          <div className="flex flex-col lg:w-[20%] w-[50%] lg:gap-8 gap:10  ">
            <img src={logo} alt="logo" className="w-fit" />
            <div className="flex  overflow-hidden lg:justify-between gap-4 lg:gap-0">
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
          <div className="flex mx-auto text-white w-full lg:w-[25%]  flex-col gap-3  ">
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
          <div className="flex mx-auto text-white w-full lg:w-[25%]  flex-col gap-3  ">
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
              <p className=" cursor-pointer hover:underline">
                Product Research
              </p>
              <p className=" cursor-pointer hover:underline">
                Consumer Research and Segmentation
              </p>
            </div>
          </div>
          <div className="flex mx-auto text-white w-full lg:w-[25%]  flex-col gap-3  ">
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
          <div className="flex mx-auto text-white w-full lg:w-[25%]  flex-col gap-3 ">
            <div>
              <h2 className=" font-semibold">Connect</h2>
            </div>
            <div className="flex flex-col gap-1">
              Link tag should to add to navigate
              <p className=" cursor-pointer hover:underline">Join Our Panel</p>
              <p className=" cursor-pointer hover:underline">Request a Bid</p>
              <p className=" cursor-pointer hover:underline">Careers</p>
              <p className=" cursor-pointer hover:underline">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mx-auto overflow-hidden ">
        <div className="px-10 py-4 sm:px-6 lg:px-2 max-w-7xl w-full justify-between flex mx-auto  ">
          <div className="flex gap-2 text-white  items-center px-14  ">
            <img src={Copyright} alt="logo" className="w-[14px] h-[14px]" />
            <p className="text-[12px]">
              Copyright 2025. All Rights Reserved.51
            </p>
          </div>

          <div className="w-[56px] h-[40px] bg-white hover:bg-red-500 hover:text-white opacity-30  flex justify-center items-center ">
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
      </div>
    </div>
  );
};

export default Footer;
