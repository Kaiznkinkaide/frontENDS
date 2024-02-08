import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider/MainProvider'

const Home = () => {
  const {countries, setCountries} = useContext(mainContext)
  return (
    <div>Home</div>
  )
}

export default Home