import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate()

const user=JSON.parse(localStorage.getItem("user"))


const handleLogout=()=>{
    localStorage.removeItem("loggedIn")
    setTimeout(()=>{

   navigate("/login")

    },1000)

}

  return (
    <div>
        <h1>home page</h1>
        <h2>welcome {user.username}</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home