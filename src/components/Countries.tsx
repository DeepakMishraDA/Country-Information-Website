import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useCountries from "../customhooks/useCountries";
import useStyles from "./useStylecountries";
import "../App.css";

function Countries() {
  const classes = useStyles();
  //const clas = newStyle();
  const { countries, errr } = useCountries();
  const [searchTerm, setsearchTerm] = useState("");
  const [forErr, setFf] = useState("Loading...");
  console.log(countries);

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setFf("Something went wrong!!");
      }, 10000);
    };
    timer();
  }, []);

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
                  console.log(data);
                  return countries;
                } else if (
                  data.name.common
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return data;
                }
              })
              .map((data) => {
                return (
                  <tr>
                    <td>{data.flag}</td>
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
                      <button>+</button>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      <button>-</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </body>
    </div>
  );
}
export default Countries;
