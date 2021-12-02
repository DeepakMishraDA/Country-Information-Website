import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useCountries from "../customhooks/useCountries";

//import Paper from "@material-ui/core/Paper";
//import TableBody from "@material-ui/core/TableBody";
// const useStyles = makeStyles({
//   tableStyle: {
//     width: "960px",
//     background: "lightblue",
//     color: "blue",
//     border: "solid",
//     borderRadius: "10%",
//     margin: "10px",
//     textAlign: "center",
//     //paddingLeft: "10px",
//   },
// });
const useStyles = makeStyles({
  tableContainerStyle: {
    marginTop: "6%",
  },
  tableStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0px",
  },
  tablerowStyle: {
    fontSize: "20px",
    width: "13%",
    height: "45px",
    marginTop: "5px",
    paddingTop: "0px",
    fontFamily: "Times New Roman, Times, serif",
    border: "outset pink 2px",
    borderRightStyle: "solid",
    backgroundColor: "skyblue",
  },
  tablerow1Style: {
    fontSize: "25px",
    fontStyle: "oblique",
    border: "inset lightblue .1px",
    textAlign: "center",
    color: "blue",
    width: "13%",
    height: "45px",
    marginTop: "5px",
    padding: "20px",
    paddingTop: "0px",
    backgroundColor: "azure",
  },
  flagstyle: {
    width: "13%",
    display: "block",
    height: "45px",
    marginTop: "5px",
    paddingTop: "0px",
    border: "outset pink 2px",
    borderRightStyle: "solid",
    backgroundColor: "skyblue",
  },
  buttonstyle: {
    border: "inset 0.2px",
    marginLeft: "16px",
  },
});

function Countries() {
  const classes = useStyles();
  const { countries, errr } = useCountries();
  const [ff, setFf] = useState("Loading...");

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setFf("Something went wrong!!");
      }, 10000);
    };
    timer();
  }, []);

  if (errr) {
    return <h1 className="id">{ff}</h1>;
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
                  <Link to={data.name.common}>
                    <TableCell className={classes.tablerowStyle}>
                      {data.name.common}
                    </TableCell>
                  </Link>
                  <Link to={data.name.common}>
                    <TableCell className={classes.tablerowStyle}>
                      {data.population}
                    </TableCell>
                  </Link>
                  <Link to={data.name.common}>
                    <TableCell className={classes.tablerowStyle}>
                      {data.capital}
                    </TableCell>
                  </Link>
                  <Link to={data.name.common}>
                    <TableCell className={classes.tablerowStyle}>
                      {data.continents[0]}
                    </TableCell>
                  </Link>
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
