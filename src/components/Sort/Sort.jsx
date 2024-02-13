import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import "./sort.css"

const Sort = () => {
  let { sportFilter, setSportFilter, countryFilter, setCountryFilter, sports, countries } =
    useContext(mainContext);

    const resetSports = () => {
      setSportFilter("")

    }

    const resetCountry = () => {
      setCountryFilter("")
    }

  return (
    <>
      <div className="sortDivAll">
        <div className="sortDivSelection">
            <button className="sortButton" onClick={resetSports} style={{display: sportFilter ? "flex" : "none"}}><p className="sortP"> ✕ {sportFilter}</p></button>
            <button className="sortButton" onClick={resetCountry} style={{display: countryFilter ? "flex" : "none"}}><p className="sortP">✕ {countryFilter}</p></button>
        </div>
        
        <div className="sortDiv">
          <select className="select-wrap" onChange={(e) => setSportFilter(e.target.value)} value={sportFilter}>
            <option className="optionSort" value="">All Sports</option>
            {sports.map((sport, index) => {
              return(
                <option key={index} value={sport}>
                  {sport}
                </option>
              )
            })}
          </select>
          <select onChange={(e) => setCountryFilter(e.target.value)} value={countryFilter}>
            <option value="">All Countries</option>
            {countries.map((country, index) => {
              return(
                <option key={index} value={country}>
                  {country}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Sort;
