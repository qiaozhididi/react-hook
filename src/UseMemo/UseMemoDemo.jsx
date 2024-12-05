import React, { useState, useMemo } from "react";

export default function UseMemoDemo() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [color, setColor] = useState("red");
  const clickNum1Handler = () => {
    setNum1(num1 + 1);
  };
  const clickNum2Handler = () => {
    setNum2(num2 + 1);
  };
  const clickColorHandler = () => {
    setColor("blue");
  };
  // 当num1和num2改变时才会重新计算
  const addMemo = useMemo(() => num1 + num2, [num1, num2]);
  return (
    <div>
      <h3>UseMemo的使用</h3>
      <button onClick={clickNum1Handler}>第一位+1</button>
      <button onClick={clickNum2Handler}>第二位+1</button>
      <button onClick={clickColorHandler}>改变盒子颜色</button>
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}>
        {num1} + {num2} = {addMemo}
      </div>
    </div>
  );
}
