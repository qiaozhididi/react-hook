import React from "react";

export default function FunDemo() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h3>以前的无状态组件</h3>
      <p>状态:{count}</p>
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
