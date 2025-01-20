import React from "react";
import Description from "./Description";
import Preparation from "./Preparation";
import IngredientInstruction from "./IngredientInstruction";
import Nutrition from "./Nutrition";

const Card = ({
  className,
  image,
  titleDescription,
  pDescription,
  titlePrep,
  descriptionPrep,
  titleIngredient,
  descriptionIngredient,
  titleInstructions,
  descriptionInstructions,
  titleNutrition,
  descriptionNutrition,
  tabNutrition,
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
        className="mb-8 bg-rose-50 p-7 font-Outfit rounded-2xl"
        title={titlePrep}
        description={descriptionPrep}
      />
      <IngredientInstruction
        typeComponent={"ingredient"}
        title={titleIngredient}
        description={descriptionIngredient}
      />
      <IngredientInstruction
        title={titleInstructions}
        description={descriptionInstructions}
      />
      <Nutrition
        title={titleNutrition}
        description={descriptionNutrition}
        table={tabNutrition}
      />
    </div>
  );
};

export default Card;
