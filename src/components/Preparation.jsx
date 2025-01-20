import React from "react";

const Preparation = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h1 className="mb-4 font-bold text-rose-800">{title}</h1>
      <ul className="mx-6 list-disc list-item">
        {description.map((info, index) => {
          const infoSplit = info.split(":");
          return (
            <li
              className=" marker:text-rose-800 text-[#6d6966] leading-7"
              key={index}
            >
              <span className="h-5 ml-4 font-bold">{infoSplit[0] + ":"}</span>
              {infoSplit[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Preparation;
