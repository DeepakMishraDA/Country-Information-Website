//import React, { useEffect } from "react";
import { useSelector } from "react-redux"; //useDispatch

import { useNavigate } from "react-router-dom"; //useParams

import { Store } from "../redux/reducers";
import "../App.css";
import { Countr } from "../redux/types";

// declare module "react-router-dom" {
//   export function useParams<
//     P extends Record<string, string | undefined> = {
//       [key: string]: string;
//     }
//   >(): P;
// }

// type useParam = {
//   countryName: string;
// };

function Cart() {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const backHome = () => navigate("/");
  //const { countryName } = useParams<useParam>();
  const count = useSelector((state: Store) => {
    return state.countReducer.cart;
  });
  console.log(count);
  // useEffect(() => {
  //   dispatch(getAcountry(countryName));
  // }, [dispatch, countryName]);

  return (
    <div>
      <body className="body">
        <div className="Cart-Container">
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action">Remove all</h5>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Cart;
