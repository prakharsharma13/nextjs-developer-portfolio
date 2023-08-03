"use client"
import React from 'react';
import {useSession} from "next-auth/react"

const Dashboard = () => {
  // const[data, setData] = useState([]);
  // const[err,setErr] = useState(false);
  // const[isLoading, setIsLoading] = useState(false)
  const session = useSession()
  console.log(session);
  return (
    
    <div>Dashboard</div>
  )
}

export default Dashboard