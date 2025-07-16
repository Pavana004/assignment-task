import React from "react";
import section_2Img from "../../assets/images/sec-2.png";
import icon_1 from "../../assets/images/icon-1.png";
import icon_2 from "../../assets/images/icon-2.png";
import icon_3 from "../../assets/images/icon-3.svg";
import icon_4 from "../../assets/images/icon-4.svg";

const Section_2 = () => {
  const data = [
    {
      title: "Audience",
      img: icon_1,
      note: "Tap into a wide panel of respondents for any of your market research needs. ",
    },
    {
      title: "Qualitative Research",
      img: icon_2,
      note: "Tap into a wide panel of respondents for any of your market research needs.  ",
    },
    {
      title: "Quantitative Research",
      img: icon_3,
      note: "Tap into a wide panel of respondents for any of your market research needs.  ",
    },
    {
      title: "Quality Checks",
      img: icon_4,
      note: "Tap into a wide panel of respondents for any of your market research needs.  ",
    },
  ];

  const handleNavigate = () => {
    //navigate Function
  };

  return (
    <div className="w-full flex md:w-full lg:w-full  ">
      <div className="w-[90%] md:w-[90%] lg:w-[90%] lg:flex justify-center pt-10 pb-10  ">
        <div className="w-[50%]  flex mx-auto lg:justify-center pl-10 ">
          <img src={section_2Img} alt="sec-2" className="w-[550px] h-[430px]" />
        </div>
        <div className="w-[40%] grid grid-cols-1 mx-auto lg:grid-cols-2 gap-10 ">
          {data.map((res) => {
            return (
              <div className="group w-[256px] h-[304px] transition-colors cursor-pointer bg-white duration-300 ease-in-out hover:bg-[#E8505E]  border-[2px] border-black rounded-lg p-3 relative">
                <img src={res.img} alt={res.title} />
                <h1 className="text-[16px] font-bold">{res.title}</h1>
                <p className="mt-4">{res.note}</p>
                <div
                  onClick={handleNavigate}
                  className="w-[75px] h-[40px] bg-[#E8505E] group-hover:bg-white  absolute bottom-0 right-0 rounded flex justify-center items-center"
                >
                  <svg
                    className="w-10 h-6 text-white group-hover:text-black transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section_2;
