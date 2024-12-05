import React from "react";
import useUserInfo from "./useUserInfo";
export default function User1() {
  const [userInfo, setUserInfo] = useUserInfo();
  return (
    <div>
      <p>
        {userInfo.name}-{userInfo.age}
      </p>
    </div>
  );
}
