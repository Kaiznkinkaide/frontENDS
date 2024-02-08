import React, { useContext, useState } from 'react'
import { mainContext } from '../../context/mainProvider/MainProvider'

const SportsList = () => {
    const {leagues, setLeagues} = useContext(mainContext)

    

    return (
        <>
            {leagues.forEach((league, index) => {
                return(
                    {league.map(())}
                    <div key={index}>
                        <h2>{league?.[0]?.strLeague}</h2>
                        <h3>{league?.[0]?.strSport}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default SportsList