import { useState, useEffect } from "react";
import axios from "axios";

function useCountry() {
  const [countries, setCountry] = useState([]);
  const [errr, setErr] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get("https://restcountries.com/v3.1/al");
        //console.log(responses.data);
        //const data = JSON.parse(responses);
        setCountry(responses.data);
      } catch (error) {
        setErr(error);
      }
    };
    fetchData();
  }, []);
  //console.log(countries);
  return { countries, errr };
}

export default useCountry;