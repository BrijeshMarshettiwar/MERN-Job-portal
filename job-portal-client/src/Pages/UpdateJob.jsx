import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateJob = () => {

  const {id} = useParams();
  console.log(id)

  return (
    <div>UpdateJob</div>
  )
}

export default UpdateJob