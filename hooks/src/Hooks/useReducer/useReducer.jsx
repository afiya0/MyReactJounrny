import React, { useReducer } from "react";
import "./BankAccount.css";

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
  const [balance, dispatch] = useReducer(reducer, 5000);

  return (
    <div className="bank-container">
      <div className="bank-card">
        <h1>Bank Account</h1>
        <p>Manage your balance with useReducer</p>

        <div className="balance-box">
          <h2>Rs. {balance.toLocaleString()}</h2>
        </div>

        <div className="btn-group">
          <button
            className="deposit"
            onClick={() => dispatch({ type: "DEPOSIT" })}
          >
            + Deposit Rs.10,000
          </button>

          <button
            className="withdraw"
            onClick={() => dispatch({ type: "WITHDRAW" })}
          >
            − Withdraw Rs.10,000
          </button>

          <button
            className="reset"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset Balance
          </button>
        </div>
      </div>
    </div>
  );
};
export default BankAccount