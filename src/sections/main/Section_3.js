import React from "react";
import arrow from "../../assets/images/Vector _1.svg";

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
              <img
                src={arrow}
                alt="arrow"
                loading="lazy"
                className="w-[36px] h-[36px]"
              />
            </div>
            <div className=" w-[365px] lg:w-[900px] xl:w-[744px] h-[379px] bg-section-2-bg  rounded-sm flex justify-between relative ">
              <div className=" flex flex-col gap-2   px-10 py-10">
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
                <img
                  src={arrow}
                  alt="arrow"
                  loading="lazy"
                  className="w-[36px] h-[36px] cursor-pointer "
                />
              </div>
              <div className=" hidden h-full lg:flex items-baseline py-[50px]">
                <svg
                  width="282"
                  height="295"
                  viewBox="0 0 282 295"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex justify-center items-center  "
                >
                  <path
                    d="M122.166 0C121.782 0 121.416 0.153933 121.127 0.423322C120.858 0.692706 120.704 1.07754 120.704 1.4624V263C120.704 263.384 120.858 263.75 121.127 264.039C121.416 264.308 121.781 264.462 122.166 264.462H209.029V292.844C209.029 293.344 209.28 293.806 209.684 294.075C210.107 294.364 210.627 294.402 211.089 294.21L280.416 264.442H280.396C280.935 264.212 281.282 263.692 281.282 263.095V1.57806C281.282 1.53958 281.282 1.50111 281.262 1.46262C281.262 1.07778 281.108 0.692937 280.839 0.423538C280.57 0.154149 280.185 0.000216096 279.8 0.000216096L122.166 0ZM123.61 2.92477H272.931L209.916 29.9789H209.935C209.396 30.2098 209.031 30.7294 209.031 31.3066V261.535H123.612L123.61 2.92477ZM278.336 3.79064V262.151L211.971 290.628V32.2881L278.336 3.79064ZM40.211 34.9624C22.4265 34.9624 7.95261 49.2205 7.95261 66.8075C7.95261 84.3754 22.4265 98.6334 40.211 98.6334C57.9955 98.6334 72.4693 84.3754 72.4693 66.8075C72.4693 49.2397 57.9955 34.9624 40.211 34.9624ZM40.211 37.8872C56.4365 37.8872 69.5435 50.8177 69.5435 66.8078C69.5435 82.7786 56.4557 95.7284 40.211 95.7284C23.9855 95.7284 10.8592 82.7978 10.8592 66.8078C10.8592 50.8369 23.9667 37.8872 40.211 37.8872ZM28.9709 107.599C13.4386 107.599 0.8125 120.048 0.8125 135.403V262.995H0.831747C0.831747 263.803 1.48614 264.457 2.29456 264.457C2.6795 264.457 3.04518 264.303 3.33392 264.034C3.60337 263.745 3.75735 263.379 3.75735 262.995V135.403C3.75735 121.664 15.0364 110.523 28.9904 110.523H51.4327C65.4059 110.523 76.6657 121.664 76.6657 135.403V262.995H76.685C76.685 263.379 76.8389 263.745 77.1084 264.034C77.3779 264.303 77.7628 264.457 78.1478 264.457C78.9561 264.457 79.6106 263.803 79.5913 262.995V135.403C79.5913 120.067 66.9652 107.599 51.4329 107.599H28.9709ZM29.0286 145.794C28.6437 145.794 28.2587 145.948 27.9893 146.237C27.7006 146.506 27.5466 146.891 27.5658 147.276V215.815C27.5658 216.623 28.2202 217.277 29.0286 217.258C29.837 217.277 30.4915 216.623 30.4915 215.815V147.276C30.4915 146.891 30.3375 146.506 30.068 146.237C29.7985 145.948 29.4136 145.794 29.0286 145.794ZM55.8783 209.56C55.4741 209.56 55.1084 209.694 54.839 209.983C54.5502 210.252 54.3963 210.618 54.3963 211.003V262.996C54.3963 263.381 54.5502 263.746 54.8197 264.035C55.1084 264.304 55.4741 264.458 55.8783 264.458C56.2632 264.458 56.6289 264.304 56.9176 264.035C57.1871 263.746 57.3411 263.381 57.3411 262.996V211.003C57.3411 210.618 57.1871 210.252 56.8984 209.983C56.6289 209.694 56.2632 209.56 55.8783 209.56Z"
                    fill="url(#paint0_linear_1_1234)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_1234"
                      x1="-87.9326"
                      y1="233.106"
                      x2="394.067"
                      y2="229.606"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#AA85F0" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="  lg:flex justify-evenly ">
            <div className="w-[365px] lg:w-[744px] h-[379px] bg-section-3-bg  rounded-sm flex justify-between ">
              <div className=" flex flex-col gap-2 px-10 py-10">
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
                <img
                  src={arrow}
                  alt="arrow"
                  loading="lazy"
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div className=" hidden h-full w lg:flex  py-[15px] ">
                <svg
                  width="175"
                  height="349"
                  viewBox="0 0 175 349"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.8125 174.5C0.8125 270.878 78.7104 349 174.812 349V337.367C85.2682 337.367 12.4125 264.302 12.4125 174.5C12.4125 84.6945 85.2682 11.6333 174.813 11.6333V0C78.7104 0 0.8125 78.1217 0.8125 174.5ZM145.812 174.5C145.812 190.562 158.793 203.583 174.812 203.583V191.95C165.219 191.95 157.416 184.121 157.416 174.5C157.416 164.879 165.219 157.05 174.812 157.05V145.417C158.793 145.417 145.812 158.434 145.812 174.5ZM29.8125 174.5C29.8125 254.813 94.73 319.917 174.809 319.917H174.812V308.283H174.809C101.257 308.283 41.4125 248.263 41.4125 174.5C41.4125 100.737 101.257 40.7167 174.809 40.7167H174.813V29.0833H174.809C94.73 29.0833 29.8125 94.1873 29.8125 174.5ZM58.8125 174.5C58.8125 238.747 110.75 290.833 174.812 290.833V279.2C117.246 279.2 70.4125 232.232 70.4125 174.5C70.4125 116.768 117.246 69.8 174.812 69.8V58.1667C110.75 58.1667 58.8125 110.245 58.8125 174.5ZM87.8125 174.5C87.8125 222.685 126.761 261.75 174.812 261.75V250.117C133.234 250.117 99.4125 216.198 99.4125 174.5C99.4125 132.802 133.234 98.8795 174.812 98.8795V87.25C126.761 87.25 87.8125 126.307 87.8125 174.5ZM116.812 174.5C116.812 206.624 142.777 232.667 174.812 232.667V221.029C149.231 221.029 128.416 200.159 128.416 174.5C128.416 148.845 149.231 127.971 174.812 127.971V116.333C142.777 116.333 116.812 142.373 116.812 174.5Z"
                    fill="url(#paint0_linear_1_1235)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_1235"
                      x1="0.812526"
                      y1="174"
                      x2="230.313"
                      y2="174"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E3E3E3" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
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
                <img
                  src={arrow}
                  alt="arrow"
                  loading="lazy"
                  className="w-[36px] h-[36px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
