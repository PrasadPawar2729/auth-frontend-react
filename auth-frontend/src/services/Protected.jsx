import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {

const auth = JSON.parse(localStorage.getItem("loggedIn"))


  return  auth ? <Outlet/> :<Navigate to ={"/login"}/>
}

export default Protected