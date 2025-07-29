import React from "react";
import section_2Img from "../../assets/images/sec-2.svg";
import icon_1 from "../../assets/images/icon-1.png";
import icon_2 from "../../assets/images/icon-2.png";
import icon_3 from "../../assets/images/icon-3.svg";

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
      img: icon_2,
      note: "Tap into a wide panel of respondents for any of your market research needs.  ",
    },
  ];

  const handleNavigate = () => {
    //navigate Function
  };

  return (
    <div className="pt-10 pb-10 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full flex flex-col lg:flex-row lg:justify-evenly ">
        <div className="flex items-center justify-center   gap-6  ">
          <img
            src={section_2Img}
            alt="sec-2"
            className=" w-[300px] h-[300px] lg:w-[254px] lg:h-[435px]"
          />
          <div className="h-full  pt-[23%] ">
            <div className="w-[243px] h-[296px] flex flex-col  items-start gap-3 mx-auto  ">
              <div className="w-[229px] h-[77px] bg-[#D5FDAD] text-black text-[18px] font-medium rounded-md px-2 py-2  flex justify-center items-start">
                <p>Unlock in-depth market insights</p>
              </div>
              <div className="text-[30px] lg:text-[40px] font-semibold">
                <h1>Everything You Need, All in One Place</h1>
              </div>
              <div className="text-[16px] font-normal">
                <h1>DDD</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 lg:px-0 grid xs:grid-cols-1 sm:grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-2 2xl:h-fit 2xl:my-auto gap-4 2xl:gap-4 lg:gap-4 xl:gap-4 items-center  align-middle ">
          {data.map((res) => {
            return (
              <div className="group w-[256px] h-[304px] transition-colors cursor-pointer bg-white duration-300 ease-in-out hover:bg-[#E8505E]  border-[2px] border-black rounded-md p-3 relative">
                <img src={res.img} alt={res.title} />
                <h1 className="text-[16px] font-bold">{res.title}</h1>
                <p className="mt-4">{res.note}</p>
                <div
                  onClick={handleNavigate}
                  className="w-[75px] h-[40px] bg-[#E8505E] group-hover:bg-white  absolute bottom-0 right-0 rounded flex justify-center items-center"
                >
                  <svg
                    className=" text-white group-hover:invert transition-all duration-300"
                    width="36"
                    height="16"
                    viewBox="0 0 36 16"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.3359 14.7951L32.1309 9.00007L0.0449219 9.00007L0.0449219 7.00007L32.1309 7.00007L26.3359 1.20507L27.75 -0.205078L35.955 7.99992L27.75 16.2049L26.3359 14.7951Z"
                      fill="white"
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
