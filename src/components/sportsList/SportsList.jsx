import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
import "./sportsList.css"

const SportsList = () => {
    const { filteredLeagues } = useContext(mainContext);

    return (
        <>
            {Object.entries(filteredLeagues).length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    {Object.entries(filteredLeagues).map(([letter, leagues]) => (
                        <div key={letter} className="homeDivSportList">
                            {leagues.length !== 0 ? <h2 className="homeBigLetters">{letter}</h2> : null}
                            <div className="homeDivAllLeagues">
                                {leagues.map((league, index) => (
                                    <Link to={`/${league.strLeague}`} key={index} className="homeLinkLeagues">
                                        <h3 className="homeH3Leagues">{league.strLeague}</h3>
                                        <h4 className="homeH4Leagues">{league.strSport}</h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
};

export default SportsList;
