import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../utils'


const Login = () => {



const [Input,setInput]=useState({

     email:'',
     password:''
 
})

const navigate=useNavigate()
const handleChange=(e)=>{

    setInput({...Input,[e.target.name]:e.target.value})
}


const handlelogin=(e)=>{
    e.preventDefault()
   const logged = JSON.parse(localStorage.getItem("user"))

   if(logged&& logged.email===Input.email&&
    logged.password===Input.password
   ){
    alert("login successfull")
    localStorage.setItem("loggedIn",true)
    setTimeout(() => {
        navigate("/")
    }, 1000);



   }
   else{
  alert("email & password wrong")
   }

}






  return (
    <div className='container'>
     <h1>Login</h1>
    <form onSubmit={handlelogin}>
 <div>
     <label htmlFor='email'>email:</label>
     <input 
     type='email' 
     name='email'
      placeholder='Enter your email'
    value={Input.email}
      onChange={handleChange}
      />
   </div>
   <div>
     <label htmlFor='password'>password:</label>
     <input 
     type='password' 
      name='password'
      value={Input.password}
      placeholder='Enter your password' 
      onChange={handleChange}
   
      />
   </div>
   
   <button type='submit'>Login</button>
                <span>doesn't have account ?
                    <Link to="/signup">signup</Link>
                </span>



    </form>

<ToastContainer/>
    </div>
  )
}

export default Login