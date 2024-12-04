import "./App.css";
import ClassDemo from "./ClassDemo";
import ClassEffectDemo from "./EffectHook/ClassEffectDemoo";
import EffectClassTimer from "./EffectHook/EffectClassTimer";
import FunEffectDemo from "./EffectHook/FunEffectDemo";
import ParentComponent from "./EffectHook/ParentComponent";
import FunDemo from "./FunDemo";
import HookUseState from "./StateHook/HookUseState";

function App() {
  return (
    <div>
      <h1>Hook 简介</h1>
      <ClassDemo />
      <FunDemo />
      {/* <HookUseState /> */}
      {/* <ClassEffectDemo /> */}
      {/* <FunEffectDemo /> */}
      {/* <EffectClassTimer /> */}
      <ParentComponent />
    </div>
  );
}
export default App;
