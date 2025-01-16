import React from "react";

const Description = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h1 className="text-2xl font-YoungSerif mb-7">{title}</h1>
      <p className="font-Outfit text-[#6d6966]">{description}</p>
    </div>
  );
};

export default Description;
