import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const detailParams = useParams()
  console.log(detailParams);
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage