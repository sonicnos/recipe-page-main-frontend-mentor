import React from "react";

const Nutrition = ({ title, description, table }) => {
  return (
    <div>
      <p>{table.length}</p>
      <h1 className="font-YoungSerif text-2xl text-[#854632] mb-6">{title}</h1>
      <p className="text-[#6d6966] font-Outfit">{description}</p>
      <div className="mt-3">
        {table.map((element, index) => (
          <div
            key={index}
            className={index === table.length - 1 ? "" : "border-b-[1px]"}
          >
            <div className="flex justify-between w-2/3 px-5 py-2">
              <p className="text-[#6d6966] font-medium font-Outfit">
                {element[0]}
              </p>
              <p className="text-[#854632] font-Outfit font-bold w-16">
                {element[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
