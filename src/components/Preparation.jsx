import React from "react";

const Preparation = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h1 className="mb-4 font-bold text-rose-800">{title}</h1>

      {description.map((info, index) => {
        const infoSplit = info.split(":");
        return (
          <li className="marker:text-rose-800 text-[#6d6966]" key={index}>
            {infoSplit[0] + ":"} {infoSplit[1]}
          </li>
        );
      })}
    </div>
  );
};

export default Preparation;
