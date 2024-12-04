import React, { useState, useEffect } from "react";

export default function FunEffectDemo() {
  const [count, setCount] = useState(0);
  const inputRef = React.createRef();
  const clickHandler = () => {
    setCount(count + 1);
  };

  // 模拟componentDidMount和componentDidUpdate的效果
  useEffect(() => {
    inputRef.current.value = count;
  });
  return (
    <div>
      <h3>FunEffectDemo</h3>
      <p>Count:{count}</p>
      <button onClick={clickHandler}>加一</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}
