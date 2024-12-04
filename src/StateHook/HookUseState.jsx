import React, { useState } from "react";

export default function HookUseState() {
  //状态值为：count
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const clickHandler = () => {
    setCount(count + 1);
    setColor("green");
  };
  return (
    <div>
      <h3>HookUseState</h3>
      <p style={{ color }}>状态:{count}</p>
      <button onClick={clickHandler}>加一</button>
    </div>
  );
}
