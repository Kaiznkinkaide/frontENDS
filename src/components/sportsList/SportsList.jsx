import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
import "./sportsList.css"

const SportsList = () => {
    const { filteredLeagues } = useContext(mainContext);

    return (
        <>
            {Object.entries(filteredLeagues).length === 0 
                ? (<span className="loader"></span>) 
                : (
                    <>
                        {Object.entries(filteredLeagues).map(([letter, leagues]) => {
                            return(
                                <div key={letter}>
                                    {leagues.length !== 0
                                        ?(
                                            <div className="homeDivSportList">
                                                <h2 className="homeBigLetters">{letter}</h2>
                                                <div className="homeDivAllLeagues">
                                                    {leagues.map((league, index) => {
                                                        return(
                                                            <Link to={`/${league.strLeague}`} key={index} className="homeLinkLeagues">
                                                                <h3 className="homeH3Leagues">{league.strLeague}
                                                                    <span className="homeH4Leagues">{league.strSport}</span>
                                                                </h3>
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                        : (null)
                                    }
                                </div>
                            )
                        })}
                    </>
                )
            }
        </>
    );
};

export default SportsList;
