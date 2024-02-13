import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import "./sort.css"

const Sort = () => {
  const { setSportFilter, setCountryFilter, sports, countries } =
    useContext(mainContext);

  return (
    <>
      {/* <div>
        {sports.map((sport, index) => {
          return(
            <div key={index}>
              <p>{sport}</p>
              <button>X</button>
            </div>
          )
        })}
        {countries.map((sport, index) => {
          return(
            <div key={index}>
              <p>{sport}</p>
              <button>X</button>
            </div>
          )
        })}
      </div> */}
      
      <div className="sortDiv">
        <select className="select-wrap" onChange={(e) => setSportFilter(e.target.value)}>
          <option className="optionSort" value="">All Sports</option>
          {sports.map((sport, index) => {
            return(
              <option key={index} value={sport}>
                {sport}
              </option>
            )
          })}
        </select>
        <select onChange={(e) => setCountryFilter(e.target.value)}>
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
    </>
  );
};

export default Sort;
