import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core";

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
  return (
    <div>
      <TableContainer className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell>CountryName</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Capital</TableCell>
          </TableRow>
        </TableHead>
      </TableContainer>
    </div>
  );
}

export default Countries;
