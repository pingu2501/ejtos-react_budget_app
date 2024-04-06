import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: e.target.value,
    });
  };
  return (
    <label
      className="input-group-text alert alert-success"
      htmlFor="inputGroupSelect01"
    >
      Currency
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={(event) => handleCurrencyChange(event)}
      >
        <option value="$" name="Dollar">
          $ Dollar
        </option>
        <option value="£" name="Pound">
          £ Pound
        </option>
        <option value="£" name="Euro">
          £ Euro
        </option>
        <option value="₹" name="Ruppee">
          ₹ Ruppee
        </option>
      </select>
    </label>
  );
};

export default CurrencyDropdown;
