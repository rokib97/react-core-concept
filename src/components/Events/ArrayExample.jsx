import React, { useState } from "react";
import { guns } from "../../../test";
const ArrayExample = () => {
  const [data, setData] = useState(guns);

  const handleRemove = (id) => {
    setData(data.filter((d) => d.id !== id));
  };
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div className="text-center text-xl font bold my-2">
        {data.map((singleData) => (
          <>
            <p>{singleData.name}</p>
            <button
              onClick={() => handleRemove(singleData.id)}
              className="btn btn-primary mt-4 btn=xs"
            >
              Remove
            </button>
          </>
        ))}
      </div>
      <div className="text-center">
        <button onClick={() => setData([])} className="btn btn-accent">
          Remoave All
        </button>
        <input type="text" onChange={(e) => handleChange(e.target.value)} />
      </div>
    </div>
  );
};

export default ArrayExample;
