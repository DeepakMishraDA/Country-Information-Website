import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; //useSelector
import { getAllcountries, getAcountry } from "../redux/action";

function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllcountries());
    dispatch(getAcountry("germany"));
  }, [dispatch]);

  const trigger = () => {
    dispatch(getAllcountries);
  };

  return (
    <div>
      <Button onClick={trigger}>Hello</Button>
    </div>
  );
}

export default Cart;
