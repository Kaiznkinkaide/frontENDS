import React, { useContext } from "react";
import { mainContext } from "../../context/mainProvider/MainProvider";

const Sort = () => {
  const { setSportFilter, setCountryFilter, sports, countries } =
    useContext(mainContext);

  return (
    <div>
      <select onChange={(e) => setSportFilter(e.target.value)}>
        <option value="">All Sports</option>
        {sports.map((sport, index) => (
          <option key={index} value={sport}>
            {sport}
          </option>
        ))}
      </select>
      <select onChange={(e) => setCountryFilter(e.target.value)}>
        <option value="">All Countries</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
