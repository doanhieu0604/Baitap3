import React from 'react';
import './App.css';
// import Baitap1 from "./Bai-tap1";
// import Baitap2 from "./Bai-tap2";
// import Baitap3 from "./Bai-tap3";
import RederingElements from "./rendering-elements";
import HandlingEvent from "./handling-event";
import ExampleHandlingEvent from "./handling-event/example";
import State from "./state";
import ListKeys from "./list-keys";
import BaitapCar from "./Baitap-car";
import BaitapList from "./Baitap-List";


function App() {
  return (
    <div>
      {/* <Baitap1/> */}
      {/* <Baitap2/> */}
      {/* <Baitap3/> */}
      <RederingElements/>
      <hr/>
      <HandlingEvent />
      <hr/>
      <ExampleHandlingEvent/>
      <hr/>
      <State/>
      <hr/>
      <ListKeys/>
      <hr/>
      <BaitapCar/>
      <hr/>
      <BaitapList/>
    </div>
  );
}

export default App;
