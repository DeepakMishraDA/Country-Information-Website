import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcountry } from "../redux/action";

function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    dispatch(getAcountry("germany"));
  }, [dispatch]);

  return (
    <div>
      {count.map((data) => {
        return <h1>{data.name.official}</h1>;
      })}
      <button onclick={() => getAcountry("finland")}>Add</button>
    </div>
  );
}

export default Cart;
