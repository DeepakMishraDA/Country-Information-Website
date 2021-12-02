import React from "react";
//import { useEffect, useState } from 'react';

//import Tablehead from '../components/Tablehead';
import { useParams } from "react-router-dom";
import useCountry from "../custom-hooks/useCountry";

function Country() {
  const { countryName } = useParams();
  const country = useCountry(countryName);
  //console.log("this:", country);
  if (!country) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h4>Flag</h4>
      {country[0].name} <br></br>
      {country[0].region}
      <br></br>
      {country[0].languages[0].name}
      <br></br>
      {country[0].population}
      <br></br>
    </div>
  );
}

export default Country;
