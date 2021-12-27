import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useCountry from "../customhooks/useCountry";
import useStyles from "./useStylescountry";

declare module "react-router-dom" {
  export function useParams<
    P extends Record<string, string | undefined> = {
      [key: string]: string;
    }
  >(): P;
}

type useParam = {
  countryName: string;
};

function Countries() {
  const classes = useStyles();
  const { countryName } = useParams<useParam>();
  console.log("Country", countryName);
  const [countries, errr] = useCountry(countryName);
  const [ff, setFf] = useState("Loading...");
  const navigate = useNavigate();
  const backHome = () => navigate("/");

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
  } else if (countries) {
    return (
      <div>
        <AppBar variant="outlined">
          <Toolbar>
            {/* <Link to="/"> */}
            <Button
              className={classes.buttonstyle}
              variant="contained"
              color="primary"
              size="large"
              onClick={backHome}
            >
              Home
            </Button>
            {/* </Link> */}
          </Toolbar>
        </AppBar>
        <TableContainer className={classes.tableContainerStyle}>
          <div>
            <Table>
              <TableRow className={classes.tableStyle}>
                <TableCell className={classes.tablerow1Style}>Flag</TableCell>
                <TableCell className={classes.tablerow1Style}>
                  Country
                </TableCell>
                <TableCell className={classes.tablerow1Style}>
                  Population
                </TableCell>
                <TableCell className={classes.tablerow1Style}>
                  Capital
                </TableCell>
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
                    <TableCell className={classes.tablerowStyle}>
                      {data.name.common}
                    </TableCell>
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
  return <h1>Hi</h1>;
}
export default Countries;
