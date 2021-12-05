import React from "react";
import { increase, decrease } from "../redux/action";

function Cart({ selector, dispatch }) {
  const increment = () => {
    dispatch(increase());
  };
  const decrement = () => {
    dispatch(decrease());
  };
  return (
    <div>
      <h1>Count:{selector}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Cart;
