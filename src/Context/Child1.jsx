import React, { useContext } from "react";
import MyContext from "./MyContext";

export default function Child1() {
  const { name, age } = useContext(MyContext);
  return (
    <div>
      <h1>子组件1</h1>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
    </div>
  );
}
