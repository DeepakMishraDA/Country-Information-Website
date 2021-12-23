import { makeStyles } from "@material-ui/core";

const useStylecountries = makeStyles({
  buttonstyle: {
    border: "inset 0.2px",
  },

  tableStyle: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  tablerowStyle: {
    fontSize: "20px",
    fontFamily: "Times New Roman, Times, serif",
    border: "outset pink 2px",
    borderRightStyle: "solid",
    backgroundColor: "skyblue",
    textDecoration: "none",
  },
  tablerow1Style: {
    fontSize: "25px",
    fontStyle: "oblique",
    border: "inset lightblue .1px",
    textAlign: "center",
    color: "blue",
    backgroundColor: "azure",
  },
  flagstyle: {
    display: "block",
    marginTop: "5px",
    paddingTop: "0px",
    border: "outset pink 2px",
    borderRightStyle: "solid",
    backgroundColor: "skyblue",
  },
  onecellstyle: {
    fontSize: "20px",
    fontFamily: "Times New Roman, Times, serif",
    textAlign: "center",
    border: "outset pink 2px",
    borderRightStyle: "solid",
    backgroundColor: "skyblue",
    textDecoration: "none",
  },
  cellstyle: {
    fontSize: "120%",
  },
});

export default useStylecountries;
