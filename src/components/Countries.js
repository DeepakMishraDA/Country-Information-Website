import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
//import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
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
  tableStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0px",
  },
  tablerowStyle: {
    border: "transparent blue 2px",
    width: "10%",
    height: "22px",
    marginTop: "5px",
    paddingTop: "0px",
  },
  tablerow1Style: {
    border: "transparent blue 2px",
    color: "red",
    width: "10%",
    height: "22px",
    marginTop: "5px",
    paddingTop: "0px",
  },
});

function Countries() {
  const classes = useStyles();
  const [countries, setCountry] = useState([]);
  //console.log(countries);
  // useEffect(() => {
  //   console.log("I am useEffect");
  // }, [countries]);
  useEffect(() => {
    const fetchData = async () => {
      const responses = await axios.get("https://restcountries.com/v3.1/all");
      console.log(responses.data);
      //const data = JSON.parse(responses);
      setCountry(responses.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TableContainer>
        <div>
          <Table>
            <TableRow className={classes.tableStyle}>
              <TableCell className={classes.tablerow1Style}>Flags</TableCell>
              <TableCell className={classes.tablerow1Style}>
                Countries
              </TableCell>
              <TableCell className={classes.tablerow1Style}>
                Population
              </TableCell>
              <TableCell className={classes.tablerow1Style}>Capital</TableCell>
              <TableCell className={classes.tablerow1Style}>
                Continents
              </TableCell>
            </TableRow>
          </Table>
        </div>
        <div>
          <Table>
            {countries.map((data) => {
              return (
                <TableRow className={classes.tableStyle}>
                  <TableCell className={classes.tablerowStyle}>
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
export default Countries;
