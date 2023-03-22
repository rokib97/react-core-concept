import React from "react";
import imag1 from "../../assets/images/one.png";
import imag2 from "../../assets/images/two.png";
const Person = () => {
  console.log(imag1);
  return (
    <div>
      <h1>Obayedul kader</h1>
      <img src={imag1} alt="" />
      <img src={imag2} alt="" />
    </div>
  );
};

export default Person;
