import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  // const navigate = useNavigate();

  const menuItems = [
    {
      title: "Research Methods",
      subItems_1: [
        "Quantitative Research ",
        "Qualitative Research ",
        "Recruitment and Fieldwork",
      ],
      subItems_2: [
        "Online and Offline Surverys",
        "Focus Group Discussions ",
        "Quality Checks ",
      ],
      subItems_3: [""],
      subItems_4: [""],
      service: "Understand our approach to B2B and B2C research",
      overview: "overview",
    },
    {
      title: "Capabilities",
      subItems_1: [
        "Quantitative Research ",
        "Qualitative Research ",
        "Recruitment and Fieldwork",
      ],
      subItems_2: [
        "Online and Offline Surverys",
        "Focus Group Discussions ",
        "Quality Checks ",
      ],
      subItems_3: [""],
      subItems_4: [""],
      service: "Understand our approach to B2B and B2C research",
      overview: "overview",
    },
    {
      title: "Industries",
      subItems_1: [
        "Quantitative Research ",
        "Qualitative Research ",
        "Recruitment and Fieldwork",
      ],
      subItems_2: [
        "Online and Offline Surverys",
        "Focus Group Discussions ",
        "Quality Checks ",
      ],
      subItems_3: [
        "Online and Offline Surverys",
        "Focus Group Discussions ",
        "Quality Checks ",
      ],
      subItems_4: [
        "Online and Offline Surverys",
        "Focus Group Discussions ",
        "Quality Checks ",
      ],
      service: "Understand our approach to B2B and B2C research",
      overview: "overview",
    },
    {
      title: "Resources",
      subItems_1: [
        "Quantitative Research ",
        "Qualitative Research ",
        "Recruitment and Fieldwork",
      ],
      subItems_2: [
        "Online and Offline Surverys",
        "Focus Group Discussions ",
        "Quality Checks ",
      ],
      subItems_3: [""],
      subItems_4: [""],
      service: "Understand our approach to B2B and B2C research",
      overview: "overview",
    },
  ];

  const handleClick = (title) => {
    setActiveMenu(activeMenu === title ? null : title); // toggle
  };

  const handleNavigateToStartYourResearch = () => {
    // navigate("/");
  };
  const handleNavigateToJoinAPaidFocusGroup = () => {
    // navigate("/");
  };

  return (
    <>
      <div className="hidden bg-[#FBEEEE] text-black px-6 py-3 relative lg:flex justify-center">
        <div className=" md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <div key={item.title} className="">
              <button
                onClick={() => handleClick(item.title)}
                className="flex items-center space-x-1 hover:underline focus:outline-none"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeMenu === item.title ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeMenu === item.title ? (
                <div className="w-full h-[4px] rounded-md bg-custom-color"></div>
              ) : (
                ""
              )}
              {activeMenu === item.title && (
                <div
                  className="absolute top-full left-0 bg-[#E8505E]  transition-all duration-300 transform origin-top
               animate-dropdown  text-white w-full z-50 p-8 "
                >
                  <div className="flex">
                    <div className=" w-[30%] ">
                      <ul className="w-[70%] h-[50px] text-[20px] ml-5 ">
                        {item.service}
                      </ul>
                      <ul className=" uppercase ml-5 text-[25px] mt-8 tracking-tight underline dotted-underline  ">
                        {item.overview}
                      </ul>
                    </div>
                    <div className="">
                      <ul>
                        {item.subItems_1.map((subItem) => (
                          <li
                            key={subItem}
                            className="px-4 py-2 text-[20px] hover:underline focus:outline-none cursor-pointer"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <ul>
                        {item.subItems_2.map((subItem) => (
                          <li
                            key={subItem}
                            className="px-4 py-2 text-[20px] hover:underline focus:outline-none cursor-pointer"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <ul>
                        {item.subItems_3.map((subItem) => (
                          <li
                            key={subItem}
                            className="px-4 py-2 text-[20px] hover:underline focus:outline-none cursor-pointer"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <ul>
                        {item.subItems_4.map((subItem) => (
                          <li
                            key={subItem}
                            className="px-4 py-2 text-[20px] hover:underline focus:outline-none cursor-pointer"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button
            onClick={handleNavigateToStartYourResearch}
            className="border border-[#E8505E] pl-2 pr-2 w-[200px] h-8 text-[#E8505E]"
          >
            Start Your Research
          </button>
          <button
            onClick={handleNavigateToJoinAPaidFocusGroup}
            className="border border-[#E8505E] bg-[#E8505E] text-white pl-2 pr-2 w-[200px] h-8"
          >
            Join a Paid Focus Group
          </button>
        </div>
      </div>
      <div className="flex bg-[#FBEEEE] text-black px-6 py-3 relative lg:hidden  ">
        <VscThreeBars size={50} color="black" />
      </div>
    </>
  );
};

export default Header;
