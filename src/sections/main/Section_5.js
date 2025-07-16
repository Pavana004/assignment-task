import React from "react";
import blog_1 from "../../assets/images/blog-1.svg";
import blog_2 from "../../assets/images/blog-2.svg";
import blog_3 from "../../assets/images/blog-3.svg";
import blog_4 from "../../assets/images/blog-4.svg";

const Section_5 = () => {
  const handleNavigateToBlog = () => {
    //navigate ....
  };

  const data = [
    {
      id: "1",
      discription:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
      img: blog_1,
    },
    {
      id: "2",
      discription:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
      img: blog_2,
    },
    {
      id: "3",
      discription:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
      img: blog_3,
    },
    {
      id: "4",
      discription:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
      img: blog_4,
    },
  ];

  return (
    <div className="container overflow-hidden bg-[#EAFFD6] mt-4">
      <div className=" w-[78%] pt-10 h-[130px] text-[32px] font-bold flex mx-auto mt-5  ">
        <h1>Fresh Ideas to Help You Reach New Heights.</h1>
      </div>
      <div className=" w-[90%] lg:flex justify-center py-10 lg:gap-12  mx-auto">
        {data.map((item) => {
          return (
            <div
              className="w-[256px] h-[350px] border-[2px] border-black rounded-md relative flex flex-col gap-3"
              key={item.id}
            >
              <img src={item.img} alt="blog_img" />
              <div className="w-full h-auto p-2">
                <button className="w-[70px] h-[30px] bg-[#BBFDF5] rounded-lg  ">
                  Blog
                </button>
                <p>{item.discription}</p>
              </div>
              <div
                onClick={handleNavigateToBlog}
                className="w-[70px] h-[40px] bg-custom-color rounded absolute right-0 bottom-0 flex items-center cursor-pointer justify-center"
              >
                <svg
                  className="w-6 h-6 text-white "
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
  );
};

export default Section_5;
