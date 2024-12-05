import React from "react";
import Child from "./Child";
import MyContext from "./MyContext";

export default function Parent() {
  return (
    <div>
      <MyContext.Provider value={{ name: "乔治", age: 25 }}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}
