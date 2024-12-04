import "./App.css";
import ClassDemo from "./ClassDemo";
import ClassEffectDemo from "./EffectHook/ClassEffectDemoo";
import FunEffectDemo from "./EffectHook/FunEffectDemo";
import FunDemo from "./FunDemo";
import HookUseState from "./StateHook/HookUseState";

function App() {
  return (
    <div>
      <h1>Hook 简介</h1>
      <ClassDemo />
      <FunDemo />
      <HookUseState />
      <ClassEffectDemo />
      <FunEffectDemo />
    </div>
  );
}
export default App;
