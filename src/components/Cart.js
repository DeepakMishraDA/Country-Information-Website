import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllcountries } from "../redux/action";

function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.countries;
  });
  console.log("State:", count);

  useEffect(() => {
    dispatch(getAllcountries());
  }, [dispatch]);

  return (
    <div>
      {count.map((data) => {
        return <h1>{data.name.common}</h1>;
      })}
    </div>
  );
}

export default Cart;
