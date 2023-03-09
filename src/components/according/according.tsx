import React, { useState } from "react";

const MultiAccordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? 0 : index);
  };

  return (
    <div className="multi-accordion flex mt-[10rem]">
      <div className="w-[35rem]">
        <div className="pb-2">
          <span className="text-[#FFFFFF] font-hellix-light">Our Approach</span>
        </div>
        <h2 className="text-[#FFFFFF] font-bold text-6xl">
          The Risk base approach
        </h2>
        <div className="btn_title">
          {data.map((item, index) => {
            console.log(index, "tt");
            return (
              <div
                key={index}
                className="multi-accordion-item mb-3 pb-3 border-b border-[#0c1829]"
              >
                <div
                  className={`multi-accordion-header flex justify-between ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <h2 className="mb-5 text-[#717171] text-2xl xl:text-3xl mt-2 mb-2 pb-2 pt-2 cursor-pointer relative hover:text-[#702172]">
                    <a href={"#" + index}> {item.title} </a>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="multi-acc-image-box pt-20">
        <div className="btn_image relative">
          <span>
            <img src="/images/Screenshot.png" className="" />
            {data.map((item, index) => (
              <div
                key={index}
                className={`box-${index} multi-accordion-item mb-3 pb-3 absolute`}
              >
                <div
                  className={`multi-accordion-header flex justify-between ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <h2 className="mb-5 text-[#717171] text-2xl xl:text-5xl mt-4 mb-4 pb-4 pt-4 cursor-pointer relative hover:text-[#9B7Ae4]">
                    <a href={"#" + index}> {item.btn} </a>
                  </h2>
                </div>
              </div>
            ))}
          </span>
        </div>
        <div className="btn_title">
          {data.map((item, index) => (
            <div key={index} className="multi-accordion-item ">
              {index === activeIndex && (
                <div className="multi-accordion-content" id={index}>
                  <h2 className="mb-5 text-[#717171] text-3xl xl:text-5xl mt-4 mb-4 pb-4 pt-4 cursor-pointer relative hover:text-[#9B7Ae4]">
                    {item.title}
                  </h2>
                  <p
                    className="font-hellix-light text-base text-[#ccc]"
                    style={{ lineHeight: "34px" }}
                  >
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiAccordion;
