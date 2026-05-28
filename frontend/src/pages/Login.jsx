import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const login=async () => {
    console.log(password)
    const response =await axios.post("http://localhost:4000/login",{email,password});
    console.log(response);
    alert(response.data.message);
  } 
  return (
    <div>
      <h1>Login Account</h1>
      <input type="text" placeholder='Enter your mail'  onChange={(e)=>{
        
        setEmail(e.target.value);
      }}/>

<br />
<br />

       <input type="password" placeholder='Enter your password'  onChange={(e)=>{
        
        setPassword(e.target.value);
      }}/>

      

      <br /> <br />
      <button  onClick={login}>Login</button>  
      <p>don't have an account-
           <Link to="/Signin">Signin</Link>
      </p>
  
    </div>
  )
}

export default Login