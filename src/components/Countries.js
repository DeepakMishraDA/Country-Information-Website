import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";

import useCountries from "../customhooks/useCountries";
// import { getAllcountries } from "../redux/action";
import useStyles from "./useStyle";

//import Paper from "@material-ui/core/Paper";
//import TableBody from "@material-ui/core/TableBody";

function Countries() {
  const classes = useStyles();
  //const dispatch = useDispatch();
  //const countries = dispatch(getAllcountries());
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
      <AppBar variant="outlined">
        <Toolbar>
          <Button
            className={classes.buttonstyle}
            variant="contained"
            color="primary"
            size="large"
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <TableContainer className={classes.tableContainerStyle}>
        <div>
          <Table>
            <TableRow className={classes.tableStyle}>
              <TableCell className={classes.tablerow1Style}>Flag</TableCell>
              <TableCell className={classes.tablerow1Style}>Country</TableCell>
              <TableCell className={classes.tablerow1Style}>
                Population
              </TableCell>
              <TableCell className={classes.tablerow1Style}>Capital</TableCell>{" "}
              <TableCell className={classes.tablerow1Style}>
                Continent
              </TableCell>
            </TableRow>
          </Table>
        </div>
        <div>
          <Table>
            {countries.map((data) => {
              return (
                <TableRow className={classes.tableStyle}>
                  <TableCell className={classes.flagstyle}>
                    {data.flag}
                  </TableCell>
                  <Link className={classes.onecellstyle} to={data.name.common}>
                    <TableCell className={classes.cellstyle}>
                      {data.name.common}
                    </TableCell>
                  </Link>
                  <TableCell className={classes.tablerowStyle}>
                    {data.population}
                  </TableCell>
                  <TableCell className={classes.tablerowStyle}>
                    {data.capital}
                  </TableCell>
                  <TableCell className={classes.tablerowStyle}>
                    {data.continents[0]}
                  </TableCell>
                </TableRow>
              );
            })}
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
export default Countries;
