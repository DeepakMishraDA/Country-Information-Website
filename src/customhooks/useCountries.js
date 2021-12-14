import { useState, useEffect } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux"; //useSelector
// import { getAllcountries, getAcountry } from "../redux/action";

function useCountries() {
  const [countries, setCountry] = useState([]);
  const [errr, setErr] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get("https://restcountries.com/v3.1/all");
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

export default useCountries;
