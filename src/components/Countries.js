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

  useEffect(() => {
    const fetchData = async () => {
      const responses = await axios.get("https://restcountries.com/v3.1/all");
      console.log(responses.data[0].currencies);
      setCountry(responses.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TableContainer className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            {countries.map((item, index) => {
              return <TableCell>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
      </TableContainer>
    </div>
  );
}

export default Countries;
