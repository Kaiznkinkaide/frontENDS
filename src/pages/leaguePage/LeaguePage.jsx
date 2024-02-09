import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { mainContext } from "../../context/MainProvider";
import Nav from "../../components/Nav/Nav";

const LeaguePage = () => {
    const leagueParams = useParams();
    console.log(leagueParams);
    const { teams, setTeams, backup, setBackup } = useContext(mainContext);
    // ! Backup müsste in teams zurückgesetzt werden

    useEffect(() => {
        const apiFetch = async () => {
            try {
                const response = await fetch(
                    `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${leagueParams.leaguename}`
                );
                const data = await response.json();
                setTeams(data.teams);
                setBackup(data.teams);
                // console.log(data.teams);
            } catch (error) {
                console.error(error);
            }
        };
        leagueParams.leaguename ? apiFetch() : null;
    }, [leagueParams.leaguename]);

    console.log("backup", backup);

    return (
        <>
            <Nav/>
            <section>
                {leagueParams ? (
                    <>
                        <h1>{leagueParams.leaguename}</h1>
                        <h2>{backup?.[0]?.strSport}</h2>
                        {backup?.map((team, index) => {
    
                            return (
                                <div key={index}>
                                    <Link to={`/${team?.strTeam}/details`}>
                                        <h3>{team?.strTeam}</h3>
                                        <h4>{team?.strStadiumLocation}</h4>
                                    </Link>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </section>
        </>
    );
};

export default LeaguePage;
