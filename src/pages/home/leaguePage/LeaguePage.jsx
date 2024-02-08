import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const LeaguePage = () => {
    const leagueParams = useParams()
    console.log(leagueParams);
    const [teams, setTeams] = useState([])

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
            {teams.map((team, index) => {
                return(
                    <Link to={`/${team?.strTeam}/details`}>
                        <div key={index}>
                            <h2>{team?.strTeam}</h2>
                            <h3>{team?.strStadiumLocation}</h3>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default LeaguePage