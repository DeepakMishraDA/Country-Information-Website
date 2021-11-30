import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles({
  tableStyle: {
    width: "960px",
    background: "lightblue",
    color: "blue",
    border: "solid",
    borderRadius: "10%",
    margin: "10px",
    textAlign: "center",
    //paddingLeft: "10px",
  },
});

function Countries() {
  const classes = useStyles();
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
          <div>
            <div>
              <TableRow>
                <TableCell>{item.population}</TableCell>
              </TableRow>
            </div>
            <div>
              <TableRow>
                <TableCell>{item.name.common}</TableCell>
              </TableRow>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Countries;
