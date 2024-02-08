import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const apiFetch = async() => {
      const resp = await axios.get('www.thesportsdb.com/api/v1/json/3/all_countries.php')
      setCountries(resp)
      console.log(resp);
    }
    apiFetch()
  }, [])



  return (
   
    <mainContext.Provider value={{countries, setCountries}}>
        {children}
    </mainContext.Provider>
    
  )
}

export default MainProvider