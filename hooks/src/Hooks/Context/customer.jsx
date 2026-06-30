import React, { useContext } from "react";
import UserContext from "./userContext";

const Customer = () => {
  const user = useContext(UserContext);

  return <h1>Customer: {user}</h1>;
};

export default Customer;