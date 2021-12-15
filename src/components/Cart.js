import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry, getAcountry } from "../redux/action";

function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.cart;
  });
  console.log("hey:", count);

  useEffect(() => {
    dispatch(getAcountry("germany"));
  }, [dispatch]);

  return (
    <div>
      {count.map((data) => {
        return <h1>{data.name.common}</h1>;
      })}
      <button onclick={() => getAcountry("finland")}></button>
    </div>
  );
}

export default Cart;
