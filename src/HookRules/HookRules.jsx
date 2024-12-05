import React, { useEffect, useState } from "react";

export default function HookRules(props) {
  // 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
  // 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。
  //   if (props.title) {
  //     const [count, setCount] = useState(0);//报错
  //   }
  //   const clickHandler = () => {
  //     const [count, setCount] = useState(0); //报错
  //     setCount(count + 1);
  //     console.log(count);
  //   };
  for (let i = 0; i < 10; i++) {
    // const [count, setCount] = useState(0); //报错
  }

  return (
    <div>
      <h3>hook 使用规则</h3>
      <p>{props.title}</p>
      <button onClick={clickHandler}>按钮</button>
    </div>
  );
}
