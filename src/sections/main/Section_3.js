import React from "react";

const Section_3 = () => {
  return (
    <div className=" mx-auto bg-[#ECECEC] pt-8 pb-10 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full flex flex-col lg:flex-col lg:justify-evenly ">
        <div className="px-10 h-[180px] text-[16px] lg:text-[28px] xl:text-[32px] font-bold flex mx-auto  items-center ">
          <h1 className="">
            We're a full-service B2B market research thought partner committed
            to strengthening your strategies with deep, subject matter
            expertise.
          </h1>
        </div>

        <div className="px-10 lg:px-0 flex flex-col gap-4  overflow-hidden">
          <div className="  lg:flex justify-evenly  ">
            <div className="w-[380px] lg:w-[370px] h-[379px] bg-section-1-bg p-10 flex flex-col gap-2 rounded">
              <h2 className="font-semibold lg:text-[16px]">
                Branding and Advertising Communication
              </h2>
              <p className="text-[14px] lg:text-[14px] xl:text-[16px]">
                We help brands resonate. From brand perception and awareness to
                message testing and ad effectiveness, our research empowers you
                to communicate with clarity and impact. Backed by qualitative
                insights and robust tracking, we ensure your brand voice
                connects with the right audience.
              </p>
              <svg
                className="w-6 h-6 text-black "
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
            <div className=" w-[365px] lg:w-[900px] xl:w-[744px] h-[379px] bg-section-2-bg p-10 rounded-sm">
              <div className="w-[300px] lg:w-[400px] xl:w-[366px] flex flex-col gap-2 ">
                <h2 className="font-semibold lg:text-[16px]">
                  Market Opportunity Research
                </h2>
                <p className="text-[14px] lg:text-[16px]">
                  Find your edge before you enter. Our market opportunity
                  research identifies whitespace, tests feasibility, and maps
                  competitive dynamics. Whether you're planning a launch or
                  exploring new segments, we provide the insights to make bold,
                  informed moves.
                </p>
                <svg
                  className="w-6 h-6 text-black "
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
          </div>

          <div className="  lg:flex justify-evenly ">
            <div className="w-[365px] lg:w-[744px] h-[379px] bg-section-3-bg p-10 rounded-sm flex justify-between ">
              <div className="w-[421px] flex flex-col gap-2 mt-10">
                <div className="w-[139px]">
                  <h2 className="font-semibold lg:text-[16px]">
                    Customer Research and Segmentation
                  </h2>
                </div>
                <p className="text-[14px] lg:text-[16px]">
                  Know who you're talking to — and why it matters. We uncover
                  the motivations, behaviors, and needs of your customers, then
                  segment them meaningfully to guide strategy. Our blend of
                  qualitative and quantitative approaches ensures depth,
                  accuracy, and actionable clarity.
                </p>
                <svg
                  className="w-6 h-6 text-black "
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
            <div className="w-[361px] h-[379px] bg-section-4-bg p-10 rounded-sm ">
              <div className="w-[295px]  flex flex-col gap-2  mt-10 ">
                <h2 className="font-semibold lg:text-[16px]">
                  Product Research
                </h2>
                <p className="text-[14px] lg:text-[16px]">
                  Build products that solve real problems. From concept testing
                  and feature prioritization to in-use feedback, we support
                  every phase of product development. Our insights help you
                  align innovation with user expectations — minimizing risk and
                  maximizing relevance.
                </p>
                <svg
                  className="w-6 h-6 text-black "
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
