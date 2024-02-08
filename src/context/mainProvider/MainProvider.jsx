import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [countries, setCountries] = useState([])
  const [leagues, setLeagues] = useState([])
  const allLeagues = []

  useEffect(() => {
    const apiFetch = async() => {
      const resp = await axios.get('https://www.thesportsdb.com/api/v1/json/3/all_countries.php')
      setCountries(resp.data.countries)
      console.log(resp.data.countries);
    }
    apiFetch()
    countries.map((country) => {
      const apiFetch = async() => {
        const resp = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${country.name_en}`)
        const countryLeagues = resp.data.countries
        if (countryLeagues.countries !== null) {
          allLeagues.push(countryLeagues)
        } 
        await Promise.all(apiFetch)
        console.log(allLeagues);
      } 
      countries ? apiFetch() : null
    })
  }, [countries])

  

  // setLeagues(allLeagues)
  // console.log("leagues", leagues);


  return (
    <mainContext.Provider value={{countries, setCountries, leagues, setLeagues}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider