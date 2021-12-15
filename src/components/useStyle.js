import { makeStyles } from "@material-ui/core";

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
    height: "47px",
    marginTop: "5px",
    paddingTop: "0px",
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
  onecellstyle: {
    fontSize: "20px",
    width: "16%",
    height: "61px",
    marginTop: "5px",
    paddingTop: "0px",
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

export default useStyles;
