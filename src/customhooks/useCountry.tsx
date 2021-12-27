import { useState, useEffect } from "react";
import axios from "axios";
import { Country } from "../redux/types";
import { error } from "console";

function useCountry(name: string) {
  const [countries, setCountry] = useState<Country[]>([]);
  const [errr, setErr] = useState(error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        //console.log(responses.data);
        //const data = JSON.parse(responses);
        setCountry(responses.data);
      } catch (error: any) {
        setErr(error);
      }
    };
    fetchData();
  }, [name]);
  //console.log(countries);
  return [countries, errr];
}

export default useCountry;
