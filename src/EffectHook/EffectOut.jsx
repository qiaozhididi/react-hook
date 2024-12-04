import React, { useEffect, useState } from "react";

export default function EffectOut() {
  const [count, setCount] = useState(0);
  const inputRef = React.createRef();

  useEffect(() => {
    setInterval(() => {
      console.log("useEffect");
    }, 1000);
  }, []);
  useEffect(() => {
    inputRef.current.value = count;
  }, [count]);
  return (
    <div>
      <h3>关注点分离</h3>
      <p>Count:{count}</p>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        加一
      </button>
    </div>
  );
}
