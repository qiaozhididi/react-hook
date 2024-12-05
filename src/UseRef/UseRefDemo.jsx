import React, { useRef } from "react";

export default function useRefDemo() {
  const inputRef = useRef(null);
  const clickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h3>useRef 的使用</h3>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>获取焦点</button>
    </div>
  );
}
