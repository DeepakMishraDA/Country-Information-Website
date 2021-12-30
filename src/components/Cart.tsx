//import React, { useEffect } from "react";
import { useSelector } from "react-redux"; //useDispatch
import { getAcountry } from "../redux/action";
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
      <button onClick={backHome}>Home</button>
      {count.map((data: Countr) => {
        return (
          <div>
            <h1>{data.data[0].population}</h1>
            <button>ADD</button>
            {/* <h1>{data.data[0].name.common}</h1>
            <h1>{data.data[0].flag}</h1>
            <h1>{data.data[0].continents}</h1>
            <h1>{data.data[0].capital}</h1> */}
          </div>
        );
      })}
      <button onClick={() => getAcountry("finland")}>Add</button>
    </div>
  );
}

export default Cart;
