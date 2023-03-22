import React, { useState } from "react";

const ObjectExample = () => {
  const [value, setValue] = useState({
    name: "rokib",
    age: 21,
    hobby: "football",
  });
  const handleShowMe = () => {
    setValue({ ...value, age: 25, name: "hasan", hobby: "vs code" });
  };

  return (
    <div className="text-center mt-5 text-3xl font-bold">
      <h1>{value.name}</h1>
      <p>{value.age}</p>
      <p>{value.hobby}</p>
      <button className="btn btn-error" onClick={handleShowMe}>
        Show ME
      </button>
    </div>
  );
};

export default ObjectExample;
