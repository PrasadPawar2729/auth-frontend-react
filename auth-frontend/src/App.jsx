import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Protected from './services/Protected'

const App = () => {
  return (
    <div>

  <Routes>


  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>

{/* here we use the protected route */}
<Route path='/' element={<Protected/>}>
<Route path='/' element={<Home/>} />

</Route>

  </Routes>


    </div>
  )
}

export default App