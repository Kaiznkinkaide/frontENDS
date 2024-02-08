import React, { useContext, useState } from 'react'
import { mainContext } from '../../context/mainProvider/MainProvider'

const SportsList = () => {
    const {leagues, setLeagues} = useContext(mainContext)
    const [sortedLeagues, setSortedLeagues] = useState([])

    // console.log("leagues", leagues);
    return (
        <>

        </>
    )
}

export default SportsList