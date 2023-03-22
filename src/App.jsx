import React from "react";

import Message from "./components/NestedComponent/Message";
import Person from "./components/NestedComponent/Person";

const App = () => (
  <>
    <Person></Person>
    <Message />
    {/* <div className="grid grid-cols-3 px-12">
  
        </div> */}
    {/* <div className="grid grid-cols-3 gap-4 px-12">
          {guns.map((item) => (
            <Card {...item} />
           
          ))}
        </div> */}
    {/* <div className="grid grid-cols-3 gap-4 px-12">
      {guns.map((item, index, arr) => {
        console.log(index);
        return <Card {...item} key={index} />;
      })}
    </div> */}

    {/* <Basic /> */}
    {/* <ArrayExample /> */}
    {/* <ObjectExample /> */}
    {/* <UseEffectExample /> */}
  </>
);

export default App;
