import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { mainContext } from '../../../context/mainProvider/MainProvider'

const LeaguePage = () => {
    const leagueParams = useParams()
    console.log(leagueParams);
    const {teams, setTeams, backup, setBackup} = useContext(mainContext)
    // ! Backup müsste in teams zurückgesetzt werden

    useEffect(() => {
        const apiFetch = async () => {
            try {
                const response = await fetch(`https://www.thesportsdb.com/api/v1/json/60130162/search_all_teams.php?l=${leagueParams.leaguename}`);
                const data = await response.json();
                setTeams(data.teams)
                setBackup(data.teams);
                // console.log(data.teams);
            } catch (error) {
                console.error(error);
            }
        };
        leagueParams.leaguename ? apiFetch() : null
    }, [leagueParams.leaguename]);

    console.log("backup", backup);

    return (
        <>
            {leagueParams
            ? (
                <>
                    <h2>{leagueParams.leaguename}</h2>
                    <h3>{backup?.[0]?.strSport}</h3>
                    {backup?.map((team, index) => {
                        console.log("backupinMap", team);
                        return(
                            <>
                                <Link key={index} to={`/${team?.strTeam}/details`}>
                                        <h2>{team?.strTeam}</h2>
                                        <h3>{team?.strStadiumLocation}</h3>
                                </Link>
                            </>
                        )
                    })}
                </>
            )
            : (<p>Loading...</p>)
            }
        </>
    )
}

export default LeaguePage