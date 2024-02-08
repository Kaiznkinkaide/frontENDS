import React, { useContext, useState } from 'react'
import { mainContext } from '../../context/mainProvider/MainProvider'
import { Link } from 'react-router-dom'

const SportsList = () => {
    const {leagues, setLeagues} = useContext(mainContext)

    

    return (
        <>
            {leagues?.map((league, index) => {
                return(
                    <div key={index}>
                        {league
                        ? (
                        <>
                            {league.map((leagueMap, index) => {
                                // console.log("im map", leagueMap);
                                return(
                                <div key={index}>
                                    <h2>{leagueMap?.strLeague}</h2>
                                    <h3>{leagueMap?.strSport}</h3>
                                    <Link to={`/${leagueMap?.strLeague}`}>Test</Link>
                                </div>
                                )
                            })}
                        </>
                        )
                        : ( <p>Loading....</p>)
                        }
                    </div>

                )
            })}
        </>
    )
}

export default SportsList