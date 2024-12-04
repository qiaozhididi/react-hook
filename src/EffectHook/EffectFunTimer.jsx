import React, { useEffect } from "react";

const MyApi = {
  count: 0,
  subScribe(cb) {
    this.timer = setInterval(() => {
      cb(++this.count);
    }, 1000);
  },
  unSubScribe() {
    clearInterval(this.timer);
    this.reset();
  },
  // 模拟componentWillUnmount的效果
  reset() {
    this.count = 0;
  },
};
export default function EffectFunTimer() {
  useEffect(() => {
    MyApi.subScribe((count) => {
      console.log(count);
    });
    return () => {
      MyApi.unSubScribe();
    };
  }, []);
  return (
    <div>
      <h3>清除EffectFun</h3>
    </div>
  );
}
