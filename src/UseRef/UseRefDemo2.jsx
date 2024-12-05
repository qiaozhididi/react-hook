import React, { useState, useRef } from "react";

export default function UseRefDemo2() {
  //   let count = 0;
  const count = useRef(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //引用调用了changeCount，组件会重新渲染，则组件的代码会重新执行，那么count就一直被重置为0，所以永远拿不到count更改后的值
  const changeCount = () => {
    count.current++;
    setTime(new Date().toLocaleTimeString());
  };
  const showCount = () => {
    alert(`count: ${count.current}`);
  };
  return (
    <div>
      <h1>UseRefDemo2</h1>
      <p>count: {count.current}</p>
      <p>time: {time}</p>
      <button onClick={changeCount}>更改count</button>
      <button onClick={showCount}>查看count</button>
    </div>
  );
}
