import React from "react";
import useUserInfo from "./useUserInfo";

export default function User2() {
  const [userInfo, setUserInfo] = useUserInfo();
  const clickHandler = () => {
    setUserInfo({
      ...userInfo,
      name: "乔治",
    });
  };
  return (
    <div>
      <p>{userInfo.name}</p>
      <button onClick={clickHandler}>修改</button>
    </div>
  );
}
