import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import countries from '../../assets/data/country'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    countries.map((country) => {
      const apiFetch = async() => {
        const resp = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${country}`)
        const countryLeagues = resp.data.countries
        leagues.push(countryLeagues)
        // console.log("leagues", leagues);
      } 
      countries ? apiFetch() : null
    })
  }, [countries])

  return (
    <mainContext.Provider value={{leagues, setLeagues, teams, setTeams}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider