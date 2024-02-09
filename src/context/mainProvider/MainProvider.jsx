import React, { createContext, useEffect, useState } from 'react'
import countries from '../../assets/data/country'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])
  const [backup, setBackup] = useState([])

  useEffect(() => {
    countries.map((country) => {
      const apiFetch = async () => {
        try {
          const resp = await fetch(`https://www.thesportsdb.com/api/v1/json/60130162/search_all_leagues.php?c=${country}`);
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

  return (
    <mainContext.Provider value={{leagues, setLeagues, teams, setTeams, backup, setBackup}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider