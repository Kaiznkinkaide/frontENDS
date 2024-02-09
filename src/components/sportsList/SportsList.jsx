import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/mainProvider/MainProvider";
import { Link } from "react-router-dom";

const SportsList = () => {
  const { filteredLeagues } = useContext(mainContext);

  return (
    <>
      {Object.entries(filteredLeagues).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          {Object.entries(filteredLeagues).map(([letter, leagues]) => (
            <div key={letter}>
              {leagues.length !== 0 ? <h2>{letter}</h2> : null}
              {leagues.map((league, index) => (
                <div key={index}>
                  <h3>{league.strLeague}</h3>
                  <h4>{league.strSport}</h4>
                  <Link to={`/${league.strLeague}`}>Test</Link>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SportsList;
