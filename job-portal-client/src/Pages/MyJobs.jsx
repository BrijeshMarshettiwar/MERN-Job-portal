import React, {useEffect, useState} from 'react'

const MyJobs = () => {
  const email = "marshettiwarbrijesh@gmail.com"
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true)
      fetch()
  },[])
  return (
    <div>MyJobs</div>
  )
}

export default MyJobs