import React from "react";
import Description from "./Description";
import Preparation from "./Preparation";
import IngredientInstruction from "./IngredientInstruction";

const Card = ({
  className,
  image,
  titleDescription,
  pDescription,
  titlePrep,
  descriptionPrep,
  titleIngredient,
}) => {
  return (
    <div className={className}>
      <img className="mb-12 rounded-2xl" src={image} alt="" />
      <Description
        title={titleDescription}
        description={pDescription}
        className="w-full mb-9"
      />
      <Preparation
        className="bg-rose-50 p-7 font-Outfit rounded-2xl"
        title={titlePrep}
        description={descriptionPrep}
      />
      <IngredientInstruction title={titleIngredient} />
    </div>
  );
};

export default Card;
