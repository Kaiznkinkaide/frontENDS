import React, { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  return (
   
    <mainContext.Provider value={{}}>
        {children}
    </mainContext.Provider>
    
  )
}

export default MainProvider