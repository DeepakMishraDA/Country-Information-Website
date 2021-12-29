import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcountry } from "../redux/action";
import { Store } from "../redux/reducers";
import "../App.css";

function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state: Store) => {
    return state.countReducer.cart;
  });

  useEffect(() => {
    dispatch(getAcountry("germany"));
  }, [dispatch]);

  return (
    <div>
      <div className="card"></div>
      {count.map((data) => {
        return <h1>{data.name}</h1>;
      })}
      <button onClick={() => getAcountry("finland")}>Add</button>
    </div>
  );
}

export default Cart;
