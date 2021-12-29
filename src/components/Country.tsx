import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useCountry from "../customhooks/useCountry";
import "../App.css";

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
  const { countryName } = useParams<useParam>();
  console.log("Country", countryName);
  const countries = useCountry(countryName);
  const [ff, setFf] = useState("Loading...");
  const navigate = useNavigate();
  const backHome = () => navigate("/");
  const errr = false;
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
        <div
          style={{
            backgroundColor: "#009879",
            height: "60px",
            display: "block",
          }}
        >
          {/* <Link to="/"> */}
          <button onClick={backHome}>Home</button>
          {/* </Link> */}
        </div>
        <body>
          <table className="content-table">
            <tr>
              <th>Flag</th>
              <th>Country</th>
              <th>Population</th>
              <th>Capital</th> <th>Continent</th>
              <th>Buy</th>
            </tr>
            {countries.map((data) => {
              return (
                <tr>
                  <td>{data.flag}</td>
                  <td
                    style={{
                      fontSize: "1em",
                      textDecoration: "none",
                      color: "#009879",
                    }}
                  >
                    {data.name.common}
                  </td>
                  <td>{data.population}</td>
                  <td>{data.capital}</td>
                  <td>{data.continents[0]}</td>
                  <td>
                    <button>+</button>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <button>-</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </body>
      </div>
    );
  }
  return <h1>Hi</h1>;
}
export default Countries;
