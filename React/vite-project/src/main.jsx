import ReactDOM from "react-dom/client";
// import FormComponent from './Day2/Forms'
// import FormComponentColor from "./Day2/form2";
import ClickMeComponent from "./Day2/clickMe";
import MissionComponent from "./Day2/missionLaunch";
import CounterComponent from "./Day2/counter";
import InputComponent from "./Day3/inputParent";
import ParentCallBackComponent from "./Callback/parentCallback";
import ParentCallComponent from "./Callback/2.parentCallBack";
import UseEffectComponent from "./useEffects/2.useEffect";
import ProductList from "./useEffects/4.useEffect";
import ParentDay15 from "./useEffects/6.useEffectIssueParent";
import ParentDay15B from "./Memo/1.memoParent";
import ParentComponentCounter from "./TaskEve/1.Parent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <div style={{ display: "none" }}>
      {/* <FormComponent/>
  <hr /> */}
      {/* <FormComponentColor /> */}
      <hr />
      <ClickMeComponent />
      <hr />
      <MissionComponent />
      <hr />
      <CounterComponent />
      <hr />
      <InputComponent />
      <hr />
      <ParentCallBackComponent />
      <hr />
      <ParentCallComponent />
      <hr />
      <UseEffectComponent />
      <hr />
      <ProductList />
      <hr />
      <ParentDay15 />
      <hr />
      <ParentDay15B />
    </div>

    <ParentComponentCounter />
  </div>
  //
);
