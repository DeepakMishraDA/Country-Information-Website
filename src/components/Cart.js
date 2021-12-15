import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry } from "../redux/action";

function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.cart;
  });
  console.log("State:", count);

  useEffect(() => {
    dispatch(addCountry("germany"));
  }, [dispatch]);

  return (
    <div>
      {count.map((data) => {
        return <h1>{data}</h1>;
      })}
    </div>
  );
}

export default Cart;
