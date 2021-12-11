import React, { useEffect } from "react";
import { addCountry, remove, getData } from "../redux/action";
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
  const dataGet = () => {
    dispatch(getData());
  };
  useEffect(() => {
    console.log("SEE", dispatch(getData()));
  }, [dispatch]);
  return (
    <div>
      {/* <h1>Count:{selector}</h1> */}
      <button onClick={addcountry}>Increase</button>
      <button onClick={removeit}>Decrease</button>
      <button onClick={dataGet}>See Data</button>
    </div>
  );
}

export default Cart;
