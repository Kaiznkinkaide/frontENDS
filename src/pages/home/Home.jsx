import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider/MainProvider'
import SportsList from '../../components/sportsList/SportsList'

const Home = () => {
  const {leagues, setLeagues} = useContext(mainContext)

  return (
    <>
      <SportsList/>
    </>
  )
}

export default Home