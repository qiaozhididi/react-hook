import React, { useContext } from "react";
import MyContext from "./MyContext";
import Child1 from "./Child1";
export default function Child() {
  const context = useContext(MyContext);
  return (
    <div>
      {context.name}-{context.age}
      <Child1 />
    </div>
  );
}
