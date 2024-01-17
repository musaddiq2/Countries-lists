import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const getCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      setData(countries);
    } catch (error) {
      console.log("catch", error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="countryStyle">
    
      {data.map((item) => {
        return (
          <div className="country-card ">
            <img src={item.flags.png} className="country" alt="country-flags" />
            <h3>{item.continents}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
