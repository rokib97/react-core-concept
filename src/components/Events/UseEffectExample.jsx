import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    // fetch(`https://api.github.com/users`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //   });

    // const loadData = async () => {
    //   const res = await fetch("https://api.github.com/users");
    //   const data = await res.json();
    //   setData(data);
    // };
    // loadData();
    const loadData = async () => {
      const { data } = await axios.get("https://api.github.com/users");
      setValue(data);
    };
    loadData();
  }, []);

  //   console.log(data);
  return (
    <div>
      {value.map((singlData) => {
        return <img src={singlData.avatar_url} alt="" />;
      })}
    </div>
  );
};

export default UseEffectExample;
