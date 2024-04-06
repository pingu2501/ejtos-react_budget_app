import React, { useContext } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "REDUCE_EXPENSE",
      payload: expense,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td>
        <TiPlus onClick={(event) => increaseAllocation(props.name)} />
      </td>
      <td>
        <TiMinus
          size="1.5em"
          onClick={(event) => handleDeleteExpense(props.name)}
        />
      </td>
    </tr>
  );
};

export default ExpenseItem;
