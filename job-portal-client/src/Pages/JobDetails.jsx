import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {

  const {id} = useParams();
  const [job, setJob] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
  },[])

  return (
    <div>
      <h3>JobDetails: {id}</h3>
      <h1>{job.jobTitle}</h1>
    </div>
  )
}

export default JobDetails