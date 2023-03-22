import React from "react";
import "./Card.css";

const Card = ({ action, img, name, price }) => {
  //   console.log(props);
  //   const { action, img, name, price } = props;

  return (
    <div>
      <img className="w-96" src={img} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;
