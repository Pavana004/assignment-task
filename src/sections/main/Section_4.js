import React, { useState } from "react";
import img_1 from "../../assets/images/img-1.png";
import img_2 from "../../assets/images/img-2.svg";
import img_3 from "../../assets/images/img-3.svg";
import img_4 from "../../assets/images/img-4.svg";
import img_5 from "../../assets/images/img-5.svg";
import img_6 from "../../assets/images/img-6.svg";
import img_7 from "../../assets/images/img-7.svg";
import img_8 from "../../assets/images/img-8.svg";
import img_9 from "../../assets/images/img-9.svg";
import img_10 from "../../assets/images/img-10.svg";
import img_11 from "../../assets/images/img-11.svg";
import img_12 from "../../assets/images/img-12.svg";

// sample api data
const buttons = [
  { id: 1, label: "FMCG" },
  { id: 2, label: "Retail and Merchandising" },
  { id: 3, label: "Financial Services" },
  { id: 4, label: "Insurance" },
  { id: 5, label: "Investors" },
  { id: 6, label: "Media" },
  { id: 7, label: "Technology" },
  { id: 8, label: "Automotive" },
  { id: 9, label: "Advertising and Marketing" },
  { id: 10, label: "Human Resources" },
  { id: 11, label: "Education" },
  { id: 12, label: "Healthcare and Life Sciences" },
];
const Section_4 = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].id);

  const handleSeeMore = () => {
    //navigate function
  };

  const contents = {
    1: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">FMCG</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Meet Your Customers' Needs Every Time
            </h2>
            <p>
              In the ever-evolving world of consumer packaged goods, staying
              ahead of the curve is not just an option—it's a necessity. Here's
              how Sago can guide you to success:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Connect with the right people to make the right decisions even
                when you need to move quickly.
              </li>
              <li className="mb-1">
                Better understand not just what customers want and need, but why
                and how they make their decisions.
              </li>
              <li className="mb-1">
                Gain feedback at every phase of product and ad development, from
                concept to execution with agile testing.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_1} alt="img-1" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            01
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    2: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Retail and Merchandising</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Drive Smarter Decisions on the Shop Floor
            </h2>
            <p>
              In retail, every display, promotion, and product placement counts.
              Thought Metrics helps you:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Stay in tune with changing shopper behaviors and preferences.
              </li>
              <li className="mb-1">
                Optimize in-store and online experiences based on real insights.
              </li>
              <li className="mb-1">
                Test pricing, promotions, and layouts quickly to boost
                conversions.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_2} alt="img-2" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            02
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    3: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Financial Services</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Build Trust with Every Transaction
            </h2>
            <p>
              In a space where confidence drives choices, our research gives you
              the edge to:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Understand what drives customer loyalty and defection.
              </li>
              <li className="mb-1">
                Segment your audience to tailor services that truly resonate.
              </li>
              <li className="mb-1">
                Refine messaging and product offerings to build long-term trust.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_3} alt="img-3" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            03
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    4: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Insurance</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Simplify the Complex, Earn Customer Confidence
            </h2>
            <p>Insurance decisions are personal and complex — we help you:</p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Decode the motivations and anxieties behind insurance choices.
              </li>
              <li className="mb-1">
                Test policy concepts, channels, and messaging before launch.
              </li>
              <li className="mb-1">
                Build clarity and trust through research-led communication.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_4} alt="img-4" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            04
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    5: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Investors</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">See the Market Before It Moves</h2>
            <p>
              Whether you're sizing up a new market or evaluating a venture:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Use rigorous market assessments to make informed investment
                decisions.
              </li>
              <li className="mb-1">
                Gauge brand traction and customer sentiment with real-time
                insights.
              </li>
              <li className="mb-1">
                Back your thesis with evidence, not just instinct.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_5} alt="img-5" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            05
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    6: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Media</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Create Content That Captures Minds
            </h2>
            <p>In media, engagement is everything. Our insights help you:</p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Understand audience preferences across platforms and formats.
              </li>
              <li className="mb-1">
                Test content, characters, and story arcs before the launch.
              </li>
              <li className="mb-1">
                Track media consumption shifts and stay ahead of trends.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_6} alt="img-6" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            06
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    7: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Technology</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Design for Humans, Not Just Users
            </h2>
            <p>
              Innovation is only as good as its adoption. Thought Metrics
              enables you to:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Discover what real users want from your tools and platforms.
              </li>
              <li className="mb-1">
                Uncover usability gaps through qualitative testing.
              </li>
              <li className="mb-1">
                Optimize UX and messaging for clarity, trust, and adoption.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_7} alt="img-7" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            07
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    8: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Automotive</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              From Test Drive to Loyalty — Know the Journey
            </h2>
            <p>
              Buyers are evolving — from EV interest to digital-first
              expectations. We help you:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Understand the full decision-making journey, from research to
                purchase.
              </li>
              <li className="mb-1">
                Test features, designs, and positioning for different segments.
              </li>
              <li className="mb-1">
                Navigate category shifts and competitive dynamics with
                confidence.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_8} alt="img-8" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            08
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    9: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Advertising and Marketing</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">Make Every Message Matter</h2>
            <p>
              Creative is powerful when it connects. Our approach helps you:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Test campaign ideas, messages, and visuals before going live.
              </li>
              <li className="mb-1">
                Track brand recall, perception, and effectiveness over time.
              </li>
              <li className="mb-1">
                Measure emotional and cognitive response for deeper creative
                impact.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_9} alt="img-9" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            09
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    10: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Human Resources</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Shape Cultures People Want to Belong To
            </h2>
            <p>
              Attracting and retaining talent starts with understanding people.
              We help you:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Explore employee motivations, engagement drivers, and pain
                points.
              </li>
              <li className="mb-1">Test new HR initiatives before rollout.</li>
              <li className="mb-1">
                Benchmark satisfaction and guide culture-building efforts.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_10} alt="img-10" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            10
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    11: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Education</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">Design Learning That Sticks</h2>
            <p>
              From students to institutions, we uncover insights that improve
              education outcomes:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Understand learner needs, habits, and barriers.
              </li>
              <li className="mb-1">
                Test curricula, content, and platforms for effectiveness.
              </li>
              <li className="mb-1">
                Track engagement and feedback to continuously improve learning
                delivery.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_11} alt="img-11" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            11
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
    12: (
      <div className=" h-[100%] p-10 flex flex-col justify-between my-auto ">
        <h1 className=" font-bold text-[20px]">Healthcare and Life Sciences</h1>
        <div className="flex w-full gap-3 justify-between">
          <div className="w-[50%]">
            <h2 className=" font-semibold">
              Build Empathy Into Every Innovation
            </h2>
            <p>
              Patients and providers each have unique needs — we help you listen
              better:
            </p>
            <ul className="list-disc list-inside text-gray-800 ">
              <li className="mb-1 ">
                Understand patient journeys, behaviors, and gaps in care.
              </li>
              <li className="mb-1">
                Test health communications and interventions for clarity and
                trust.
              </li>
              <li className="mb-1">
                Equip R&D and marketing with real-world insights that save
                lives.
              </li>
            </ul>
          </div>
          <div cclassName="w-[50%]">
            <img src={img_12} alt="img-12" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-custom-color flex justify-center items-center font-bold">
            12
          </div>
          <div
            onClick={handleSeeMore}
            className="w-[126px]  h-[38px] cursor-pointer bg-custom-color rounded-lg flex justify-center items-center font-bold"
          >
            See More
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="container overflow-hidden pb-10">
      <div className=" w-[78%] pt-10 h-[130px] text-[32px] font-bold flex mx-auto mt-5  ">
        <h1>Designed to meet your unique needs.</h1>
      </div>
      <div className="flex w-[78%] mx-auto gap-3  ">
        <div className=" w-[800px] h-auto border-[2px] border-black rounded-lg">
          <div className=" h-[90%] flex my-auto items-center mt-10 justify-between transition-all duration-200 ease-in-out ">
            {contents[activeButton]}
          </div>
        </div>

        <div className="w-[27%]  overflow-y-auto  ">
          <div className="space-y-2">
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => setActiveButton(button.id)}
                className={`w-[100%] flex items-center justify-center bg-[#ECECEC] hover:bg-[#E8505E] font-semibold px-4 py-3  rounded-md transition-colors duration-200 ${
                  activeButton === button.id
                    ? "bg-custom-color text-black text-center"
                    : ""
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
