import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
//import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
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

function Countries() {
  //const classes = useStyles();
  const [countries, setCountry] = useState([]);
  console.log(countries);
  // useEffect(() => {
  //   console.log("I am useEffect");
  // }, [countries]);
  useEffect(() => {
    const fetchData = async () => {
      const responses = await axios.get("https://restcountries.com/v3.1/all");
      console.log(responses.data[0].population);
      //const data = JSON.parse(responses);
      setCountry(responses.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {countries.map((item) => {
        return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Population</TableCell>
                  <TableCell align="left">Countries</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countries.map((row) => (
                  <TableRow
                    key={row}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.population}
                    </TableCell>
                    <TableCell align="left">{row.name.common}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      })}
    </div>
  );
}
export default Countries;
