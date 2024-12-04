import React, { useEffect, useState } from "react";

export default function EffectDataChange() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  useEffect(() => {
    console.log("根据数据变化执行");
  }, [count, color]);

  return (
    <div>
      <h3>根据数据变化执行</h3>
      <p>Count:{count}</p>
      <p>Color:{color}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        加一
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        改变颜色
      </button>
    </div>
  );
}
