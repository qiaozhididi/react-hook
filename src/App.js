import "./App.css";
import ClassDemo from "./ClassDemo";
import Parent from "./Context/Parent";
import ClassEffectDemo from "./EffectHook/ClassEffectDemoo";
import EffectClassTimer from "./EffectHook/EffectClassTimer";
import EffectDataChange from "./EffectHook/EffectDataChange";
import EffectOnlyDemo from "./EffectHook/EffectOnlyDemo";
import EffectOut from "./EffectHook/EffectOut";
import FunEffectDemo from "./EffectHook/FunEffectDemo";
import LifeCycleComponent from "./EffectHook/LifeCycleComponent";
import ParentComponent from "./EffectHook/ParentComponent";
import FunDemo from "./FunDemo";
import HookRules from "./HookRules/HookRules";
import User1 from "./HookRules/User1";
import User2 from "./HookRules/User2";
import HookUseState from "./StateHook/HookUseState";

function App() {
  const clickStorageHandler = () => {
    const user = {
      name: "张三",
      age: 18,
    };
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <div>
      <h1>Hook 简介</h1>
      {/* <ClassDemo /> */}
      {/* <FunDemo /> */}
      {/* <HookUseState /> */}
      {/* <ClassEffectDemo /> */}
      {/* <FunEffectDemo /> */}
      {/* <EffectClassTimer /> */}
      {/* <ParentComponent /> */}
      {/* <EffectOnlyDemo /> */}
      {/* <EffectDataChange /> */}
      {/* <LifeCycleComponent /> */}
      {/* <EffectOut /> */}
      {/* <HookRules title={"标题"} /> */}
      {/* <User1 /> */}
      {/* <User2 /> */}
      {/* <button onClick={clickStorageHandler}>存储信息</button> */}
      <Parent />
    </div>
  );
}
export default App;
