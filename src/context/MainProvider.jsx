import React, { createContext, useEffect, useState } from "react";
import countries from "../assets/data/country";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [backup, setBackup] = useState([]);
  const [groupedLeagues, setGroupedLeagues] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sportFilter, setSportFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [showArrow, setShowArrow] = useState(false);

  const sports = [
    "Soccer",
    "Basketball",
    "Fighting",
    "Baseball",
    "American Football",
    "Australian Football",
    "Ice Hockey",
    "Basketball",
    "Darts",
    "Motorsport",
    "Rugby",
    "Tennis",
    "Golf",
    "Cricket",
    "Cycling",
    "ESports",
    "Volleyball",
    "Netball",
    "Handball",
    "Snooker",
    "Field Hockey",
    "Athletics",
    "Badminton",
    "Climbing",
    "Equestrian",
    "Gymnastics",
    "Shooting",
    "Extreme Sports",
    "Table Tennis",
    "Multi Sports",
    "Watersports",
    "Weightlifting",
    "Skiing",
    "Skating",
    "Wintersports",
    "Lacrosse",
  ];

  useEffect(() => {
    countries.map((country) => {
      const apiFetch = async () => {
        try {
          const resp = await fetch(
            `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${country}`
          );
          const data = await resp.json();
          const countryLeagues = data.countries;
          setLeagues((prevLeagues) => [...prevLeagues, countryLeagues]);
          // console.log("leagues", leagues);
        } catch (error) {
          console.error(error);
        }
      };
      countries ? apiFetch() : null;
    });
  }, [countries]);

  useEffect(() => {
    if (leagues.length > 0) {
      const flattenedLeagues = leagues.flat();
      const sortedLeagues = flattenedLeagues.sort((a, b) =>
        a.strLeague.localeCompare(b.strLeague)
      );
      const grouped = sortedLeagues.reduce((acc, league) => {
        const firstLetter = league.strLeague.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(league);
        return acc;
      }, {});
      setGroupedLeagues(grouped);
    }
  }, [leagues]);

  const filteredLeagues = Object.keys(groupedLeagues).reduce((acc, key) => {
    acc[key] = groupedLeagues[key].filter(
      (league) =>
        league.strLeague.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (sportFilter === "" || league.strSport === sportFilter) &&
        (countryFilter === "" || league.strCountry === countryFilter)
    );
    return acc;
  }, {});

  return (
    <mainContext.Provider
      value={{
        leagues,
        setLeagues,
        teams,
        setTeams,
        backup,
        setBackup,
        groupedLeagues,
        filteredLeagues,
        setSearchTerm,
        setSportFilter,
        setCountryFilter,
        sports,
        countries,
        showArrow,
        setShowArrow
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
