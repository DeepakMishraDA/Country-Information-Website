import React from "react";
import { increase, decrease } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.count;
  });
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
