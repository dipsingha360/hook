import Hook from "./components/Hook";
import ShortCircuit from "./components/ShortCircuit";
import UseReducer from "./components/UseReducer";
import UseStateArray from "./components/UseStateArray";
import UseStateObj from "./components/UseStateObj";
import BasicForm from "./components/forms/BasicForm";
import Uncontrolled from "./components/forms/Uncontrolled";
import CleanupFunction from "./components/useEffects/CleanupFunction";
import FirstUseEffects from "./components/useEffects/FirstUseEffects";

function App() {
  return (
    <div className="app">
      {/* <Hook /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObj /> */}
      {/* <ShortCircuit /> */}
      {/* <BasicForm /> */}
      {/* <FirstUseEffects /> */}
      {/* <CleanupFunction /> */}
      {/* <Uncontrolled /> */}
      <UseReducer />
    </div>
  );
}

export default App;
