import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../../context/mainProvider/MainProvider';

const DetailPage = () => {
  const detailParams = useParams()
  console.log(detailParams);
  const {teams, setTeams} = useContext(mainContext)
  console.log("teams", teams);

  const filteredTeams = teams.filter((team) => team.strTeam == detailParams.teamname)
  console.log(filteredTeams);

  return (
    <div>DetailPage</div>
  )
}

export default DetailPage