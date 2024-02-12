import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { mainContext } from "../../context/MainProvider";
import Nav from "../../components/Nav/Nav";
import "./leaguePage.css"
import imgLeague from "../../assets/img/imgLeague.png"

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
            <Nav />
            <main className="leagueMain">
                <section className="leaguePageSection">
                    {leagueParams ? (
                        <div className="leagueContent">
                            {/* <img src={imgLeague} alt='matchfield' className="leagueImage"/> */}
                            <div className="leagueText">
                                <p className="leaguePageH1">{leagueParams.leaguename}</p>
                                <p className="leaguePageH2">{backup?.[0]?.strSport}</p>
                            </div>
                            {backup?.map((team, index) => {

                                return (
                                    <div className="leagueResults" key={index}>
                                        <Link to={`/${team?.strTeam}/details`}>
                                            <h3 className="leaguePageH3">{team?.strTeam}</h3>
                                            <h4 className="leaguePageH4">{team?.strStadiumLocation}</h4>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </section>
            </main>
        </>
    );
};

export default LeaguePage;