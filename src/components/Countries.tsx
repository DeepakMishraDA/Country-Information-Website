import React from "react";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useCountries from "../customhooks/useCountries";
import useStyles from "./useStylecountries";
import newStyle from "./newStyle";

function Card() {
  const classes = useStyles();
  const clas = newStyle();
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
          backgroundColor: "blue",
          height: "60px",
          display: "block",
        }}
      >
        <Button
          className={classes.buttonstyle}
          variant="contained"
          color="primary"
          size="large"
        >
          Home
        </Button>
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
        <table className={clas.styledtable}>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Population</th>
            <th>Capital</th> <th>Continent</th>
          </tr>
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
                  <Link className={classes.onecellstyle} to={data.name.common}>
                    {data.name.common}
                  </Link>
                  <td>{data.population}</td>
                  <td>{data.capital}</td>
                  <td>{data.continents[0]}</td>
                </tr>
              );
            })}
        </table>
      </body>
    </div>
  );
}
export default Card;
