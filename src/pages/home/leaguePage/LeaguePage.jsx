import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import DetailPage from '../detailPage/DetailPage'
import { mainContext } from '../../../context/mainProvider/MainProvider'

const LeaguePage = () => {
    const leagueParams = useParams()
    console.log(leagueParams);
    const {teams, setTeams} = useContext(mainContext)

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${leagueParams.leaguename}`)
            setTeams(resp.data.teams)
            console.log(resp.data.teams);
        }
        apiFetch()
    }, [leagueParams.leaguename])

    return (
        <>
            {teams?.map((team, index) => {
                return(
                    <Link key={index} to={`/${team?.strTeam}/details`}>
                            <h2>{team?.strTeam}</h2>
                            <h3>{team?.strStadiumLocation}</h3>
                    </Link>
                )
            })}
        </>
    )
}

export default LeaguePage