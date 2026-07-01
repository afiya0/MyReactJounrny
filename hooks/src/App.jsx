import React, { useEffect, useState } from "react";

import "./App.css";
import StateUseObject from "./Hooks/UseObject/reciepie";
// import BankAccount from "./Hooks/useReducer/useReducer";
// import UserContext from "./Hooks/Context/userContext";
// import Welcome from "./Hooks/Context/welcome";
// import Profile from "./Hooks/Context/profile";
// import Customer from "./Hooks/Context/customer";
// import Counter from "./Hooks/counter";
// import UseEffect from "./Hooks/useEffect";
// import UseEffectEg from "./Hooks/useEfeects2";
// import UseRefEg from "./Hooks/useRef";
// import UseStateColor from "./Hooks/useStateColor";
// import SearchInput from "./Hooks/useRefeg";
// import BankAccount from "./Hooks/useReducer";
// import CounterRed from "./Hooks/useReducerCounter";
// import UseState from "./Hooks/useState";
// import Mode from "./Hooks/mode/mode";
// import SateUseObject from "./Hooks/useStaObj";
// import Recipie from "./Hooks/reciepie";
// import UseArray from "./Hooks/useStateArray";
// import Destructuring from "./Hooks/destructuring";
// import Prev from "./Hooks/previous";

const App = () => {
  return (
    <>
    <StateUseObject/>
{/* <BankAccount/> */}
    {/* <Prev/>
    <UseArray/>
    <Destructuring/>
    <Recipie/>
      <UserContext.Provider value="Afiya">
        <Welcome />
        <Profile />
        <Customer />
      </UserContext.Provider>
      <SateUseObject/>
    <Mode/>
      <UseState/>
      <CounterRed />
      <BankAccount />
      <SearchInput />
      <UseStateColor />
      <UseEffect />
      <UseEffectEg /> */}
    </>
  );
};

export default App;
