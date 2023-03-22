import React, { useState } from "react";

const Basic = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  const handleCount = () => {
    setValue(value + 1);
  };

  //   useEffect(() => {
  //     console.log("hello from useEffect");
  //   }, [value]);

  return (
    <div className="text-center text-3xl mt-6">
      <h1>Count: {value} </h1>
      <button onClick={handleCount} className="btn primary mr-2">
        Plus
      </button>
      <button className="btn error">Minus</button>
    </div>
  );
};

export default Basic;
