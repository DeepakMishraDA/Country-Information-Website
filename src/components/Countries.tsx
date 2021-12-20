import React from "react";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useCountries from "../customhooks/useCountries";
import useStyles from "./useStylecountries";
import newStyle from "./newStyle";

function Countries() {
  const classes = useStyles();
  const clas = newStyle();
  const { countries, errr } = useCountries();
  const [forErr, setFf] = useState("Loading...");

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
      </div>
      <body>
        <table className={clas.styledtable}>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Population</th>
            <th>Capital</th> <th>Continent</th>
          </tr>
          {countries.map((data) => {
            return (
              <tr>
                <td>{data.flag}</td>
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
export default Countries;
