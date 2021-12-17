import React from "react";
import Button from "@material-ui/core/Button";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableRow from "@material-ui/core/TableRow";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Table from "@material-ui/core/Table";
// import TableCell from "@material-ui/core/TableCell";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";

import useCountries from "../customhooks/useCountries";
import useStyles from "./useStylecountries";
// import { getAllcountries } from "../redux/action";
//import Paper from "@material-ui/core/Paper";
//import TableBody from "@material-ui/core/TableBody";

function Countries() {
  const classes = useStyles();
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
        <table>
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
