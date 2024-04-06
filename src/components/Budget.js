import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  console.log(budget);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses?.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    dispatch({
      type: "SET_BUDGET",
      payload: event.target.value,
    });
    setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
