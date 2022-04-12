import logo from "./logo.svg";
import "./App.css";
import Card from "./Day 1/one/card";
import Imp from "./Day 1/two/Imp";
import Imp2 from "./Day 1/two/Imp2";
import { Func_Count } from "./Day 2/Counter";

function App() {
  return (
    <>
      {/* <Card ></Card> */}
      {/* <Imp></Imp> */}
      {/* <Imp2></Imp2> */}
      <Func_Count value={0}></Func_Count>
    </>
  );
}

export default App;
