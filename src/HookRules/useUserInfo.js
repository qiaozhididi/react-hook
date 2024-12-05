import { useState, useEffect } from "react";
export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    // 读取本地数据
    const localData = localStorage.getItem("user");
    if (localData) {
      setUserInfo(JSON.parse(localData));
    }
  }, []);

  return [userInfo, setUserInfo];
}
