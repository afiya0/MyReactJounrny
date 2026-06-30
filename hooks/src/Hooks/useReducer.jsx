import React, { useReducer } from "react";

// 1. Reducer Function (Rules)
function reducer(balance, action) {
  switch (action.type) {
    case "DEPOSIT":
      return balance + 10000;

    case "WITHDRAW":
      return balance - 10000;

    case "RESET":
      return 0;

    default:
      return balance;
  }
}

const BankAccount = () => {
  // 2. useReducer
  const [balance, dispatch] = useReducer(reducer, 5000);

  return (
    <div>
      <h1>Balance: Rs. {balance}</h1>

      <button onClick={() => dispatch({ type: "DEPOSIT" })}>
        Deposit
      </button>

      <button onClick={() => dispatch({ type: "WITHDRAW" })}>
        Withdraw
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
};

export default BankAccount;