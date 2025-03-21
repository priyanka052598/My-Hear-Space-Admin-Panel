import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";
import Progressbar from "Utils/Progressbar/Progressbar";
import { FiMessageCircle } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { PiMedalFill } from "react-icons/pi";

function RatingExp() {
  const [showPricing, setShowPricing] = useState("High to low");

  let RatingData = [
    {
      ratingCount: 4,
      date: "11-12-24",
      text: "Talking to Mohit was a relief. He listened without judgment and made me feel truly understood",
    },
    {
      ratingCount: 2,
      date: "11-12-24",
      text: "Talking to Mohit was a relief. He listened without judgment and made me feel truly understood",
    },
    {
      ratingCount: 4,
      date: "11-12-24",
      text: "Talking to Mohit was a relief. He listened without judgment and made me feel truly understood",
    },
    {
      ratingCount: 1,
      date: "11-12-24",
      text: "Talking to Mohit was a relief. He listened without judgment and made me feel truly understood",
    },
    {
      ratingCount: 4,
      date: "11-12-24",
      text: "Talking to Mohit wmade me feel truly understood",
    },
    {
      ratingCount: 4,
      date: "11-12-24",
      text: "Talking to Mohit was a relief. He listened without judgment and made me feel truly understood",
    },
    {
      ratingCount: 4,
      date: "11-12-24",
    },
  ];
  return (
    <div className="px-7 pt-4 pb-16 flex gap-7">
      <div className=" w-[60%]  bg-white rounded-[24px] px-[40px] py-[30px] flex flex-col">
        <div className="   flex justify-between items-center">
          <h2 className="text-[24px] mb-5 "> Reviews</h2>

          <div className="flex gap-8">
            <label className="flex items-center">
              <input
                type="radio"
                name="pricing"
                value="High to low"
                checked={showPricing === "High to low"}
                onChange={(e) => setShowPricing(e.target.value)}
                className="mr-2"
              />
              High to low
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="pricing"
                value="Low to High"
                checked={showPricing === "Low to High"}
                onChange={(e) => setShowPricing(e.target.value)}
                className="mr-2"
              />
              Low to High
            </label>
          </div>
        </div>
        {/* Rating data */}
        <div className="">
          <div className="flex  flex-col gap-[12px]">
            {RatingData.map((item) => {
              return (
                <div className="bg-[#f0f0f0] p-[16px] rounded-[12px]  flex flex-col gap-[12px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {" "}
                      {Array.from({ length: item.ratingCount }).map((_, i) => (
                        <GoStarFill key={i} />
                      ))}
                    </div>
                    <span>{item.date}</span>
                  </div>
                  <div className="text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Right Rating box */}
      <div className="flex flex-col w-[40%] gap-7">
        {/* Rating box */}
        <div className=" px-[40px]   py-[30px] rounded-[24px] bg-white ">
          <div className=" flex">
            <div className="left w-1/2 flex flex-col justify-center items-center">
              <div className="flex   items-center gap-2">
                <span className="text-[40px] font-semibold">4.5</span>
                <GoStarFill className="text-[40px]" />{" "}
              </div>
              <span className="text-[18px] ">(120)</span>
            </div>
            <div className="right w-1/2 flex flex-col gap-[5px]">
              <div className="1 flex justify-center items-center  gap-[12px]">
                <span className="text-[16px]">1</span>
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <GoStarFill className="text-[32px]" />{" "}
                  <Progressbar progress={10} /> <span>10%</span>
                </div>
              </div>
              <div className="1 flex justify-center items-center  gap-[12px]">
                <span className="text-[16px]">2</span>
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <GoStarFill className="text-[32px]" />{" "}
                  <Progressbar progress={10} /> <span>10%</span>
                </div>
              </div>
              <div className="1 flex justify-center items-center  gap-[12px]">
                <span className="text-[16px]">3</span>
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <GoStarFill className="text-[32px]" />{" "}
                  <Progressbar progress={10} /> <span>10%</span>
                </div>
              </div>
              <div className="1 flex justify-center items-center  gap-[12px]">
                <span className="text-[16px]">4</span>
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <GoStarFill className="text-[32px]" />{" "}
                  <Progressbar progress={20} /> <span>0%</span>
                </div>
              </div>
              <div className="1 flex justify-center items-center  gap-[12px]">
                <span className="text-[16px]">5</span>
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <GoStarFill className="text-[32px]" />{" "}
                  <Progressbar progress={50} /> <span>50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* phonecall-audiocall-chat-progress */}
        <div className=" px-[40px]   py-[50px] rounded-[24px] bg-white ">
          <div className=" flex">
            <div className="left w-1/2 flex gap-2 flex-col justify-center items-center">
              <div>
                <PiMedalFill className="text-[55px]" />{" "}
              </div>
              <span className="text-[18px] ">1208 Hrs</span>
            </div>
            <div className="right w-1/2 flex flex-col gap-[5px]">
              <div className="1 flex justify-center items-center  gap-[12px]">
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <FiMessageCircle className="text-[32px]" />{" "}
                  <Progressbar progress={10} /> <span>10%</span>
                </div>
              </div>

              <div className="1 flex justify-center items-center  gap-[12px]">
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <FiPhoneCall className="text-[32px]" />{" "}
                  <Progressbar progress={20} /> <span>0%</span>
                </div>
              </div>
              <div className="1 flex justify-center items-center  gap-[12px]">
                <div className="w-full gap-[12px] flex  justify-center items-center h-full">
                  <FiVideo className="text-[32px]" />{" "}
                  <Progressbar progress={50} /> <span>50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingExp;
