import React from "react";

const IngredientInstruction = ({ title, description, typeComponent }) => {
  return (
    <div>
      <h1 className="font-YoungSerif text-[#854632] text-2xl mb-6">{title}</h1>
      {typeComponent === "ingredient" ? (
        <ol className="px-6 list-disc mb-9">
          {description.map((info, index) => (
            <li
              className="marker:text-[#854632]  text-[#6d6966] leading-7"
              key={index}
            >
              <p className="mx-6 font-Outfit">{info}</p>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="px-6 list-decimal before:font-bold">
          {description.map((info, index) => {
            const infoSplit = info.split(":");
            return (
              <li
                className="marker:text-[#854632] text-[#6d6966] font-Outfit pl-4 leading-7"
                key={index}
              >
                <span className="font-bold">{infoSplit[0] + ":"}</span>
                {infoSplit[1]}
              </li>
            );
          })}
        </ul>
      )}

      <div className="w-full my-9 border-b-[1px]"></div>
    </div>
  );
};

export default IngredientInstruction;
