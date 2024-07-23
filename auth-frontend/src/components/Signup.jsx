import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'


const Signup = () => {


const [Input,setInput]=useState({
    username:'',
    email:'',
    password:''
})
const navigate=useNavigate()
const handleChange=(e)=>{

    setInput({...Input,[e.target.name]:e.target.value})
}
console.log(Input)

const handleSubmit=(e)=>{
    e.preventDefault()
    //  set the data on localstorage
    localStorage.setItem("user",JSON.stringify(Input))
    setTimeout(()=>{
       navigate("/login")
    },1000)

}






  return (
    <div className='container'>
     <h1>signup</h1>
    <form  onSubmit={handleSubmit}>
   <div>
     <label htmlFor='username'>Username:</label>
     <input 
     type='text' 
      name='username'
      onChange={handleChange}
      placeholder='Enter your username'
     value={Input.username}
      />
   </div>
 <div>
     <label htmlFor='email'>email:</label>
     <input 
     type='email' 
     name='email'
     onChange={handleChange}
      placeholder='Enter your email'
      value={Input.email}
   
      
      />
   </div>
   <div>
     <label htmlFor='password'>password:</label>
     <input 
    
     type='password' 
      name='password'
      onChange={handleChange}
      placeholder='Enter your password' 
      value={Input.password}
   
   
      />
   </div>
   
   <button type='submit'>Signup</button>
                <span>Already have an account ?
                    <Link to="/login">Login</Link>
                </span>



    </form>

<ToastContainer/>
    </div>
  )
}

export default Signup