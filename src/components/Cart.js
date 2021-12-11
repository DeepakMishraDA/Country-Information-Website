import React from "react";
import { addCountry, remove } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  // const selector = useSelector((state) => {
  //   return state.cart;
  // });
  const fakeCountry = { name: "Germany", population: "8 crs" };

  const addcountry = () => {
    dispatch(addCountry(fakeCountry));
  };
  const removeit = () => {
    dispatch(remove());
  };
  return (
    <div>
      {/* <h1>Count:{selector}</h1> */}
      <button onClick={addcountry}>Increase</button>
      <button onClick={removeit}>Decrease</button>
    </div>
  );
}

export default Cart;
