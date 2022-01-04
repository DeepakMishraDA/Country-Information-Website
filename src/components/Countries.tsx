import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useCountries from "../customhooks/useCountries";
import useStyles from "./useStylecountries";
import "../App.css";
import { getAcountry, remove } from "../redux/action";
import { Store } from "../redux/reducers";

function Countries() {
  const classes = useStyles();
  const dispatch = useDispatch();
  //const clas = newStyle();
  const { countries, errr } = useCountries();
  const [searchTerm, setsearchTerm] = useState("");
  const [forErr, setFf] = useState("Loading...");
  //console.log(countries);
  const count = useSelector((state: Store) => {
    return state.countReducer.cart;
  });
  //console.log("CART", count);

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setFf("Something went wrong!!");
      }, 10000);
    };
    timer();
  }, []);
  const addTocart = (gg: string) => {
    dispatch(getAcountry(gg));
  };
  const removeFromcart = (gg: string) => {
    dispatch(remove(gg));
  };

  if (errr !== true) {
    return <h1 className="id">{forErr}</h1>;
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "#009879",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button>Home</button>
        <input
          type="text"
          id="mySearch"
          placeholder="Search.."
          onChange={(event) => {
            setsearchTerm(event.target.value);
          }}
        />
      </div>
      <body>
        <table className="content-table">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Country</th>
              <th>Population</th>
              <th>Capital</th>
              <th>Continent</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {countries
              .filter((data) => {
                if (searchTerm === "") {
                  //console.log(data);
                  return true;
                } //always return a boolean when using filter and includes
                return data.name.common
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              })
              .map((data) => {
                return (
                  <tr>
                    <td>
                      <h1>{data.flag}</h1>
                    </td>
                    {/* "to" concatenates the string given to the path of the url present in the browser then and there here "http://localhost:3000/data.name.common" */}
                    <td>
                      <Link
                        className={classes.onecellstyle}
                        to={data.name.common}
                      >
                        {data.name.common}
                      </Link>
                    </td>
                    <td>{data.population}</td>
                    <td>{data.capital}</td>
                    <td>{data.continents[0]}</td>
                    <td>
                      <button onClick={() => addTocart(data.name.common)}>
                        +
                      </button>
                      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      <button onClick={() => removeFromcart(data.name.common)}>
                        -
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {count.map((data) => {
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
      </body>
    </div>
  );
}
export default Countries;
