import React, { useEffect, useState } from "react";

export default function EffectOnlyDemo() {
  const [count, setCount] = useState(0);
  //使用空数组作为第二个参数，就可以使Effect只运行一次，类似于componentDidMount和componentWillUnmount的组合
  useEffect(() => {
    console.log("只运行一次的Effect");
  }, []);

  const clickUpdateCountHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>只运行一次的Effect</h3>
      <p>Count:{count}</p>
      <button onClick={clickUpdateCountHandler}>加一</button>
    </div>
  );
}
