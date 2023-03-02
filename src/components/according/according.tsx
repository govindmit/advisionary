import React, { useState } from "react";

const MultiAccordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="multi-accordion">
      {data.map((item, index) => (
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
            <h2 className="mb-5 text-[#717171] text-5xl mt-4 mb-4 pb-4 pt-4 cursor-pointer relative hover:text-[#9B7Ae4]">
              {item.title}
            </h2>
          </div>
          {index === activeIndex && (
            <div className="multi-accordion-content">
              <p className="font-hellix-light text-lg text-[#717171]">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiAccordion;