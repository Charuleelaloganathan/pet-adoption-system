import React from 'react'
import { useState } from 'react';
import pet from "../images/loginside.jpg"

function Main(){
  const[password,setPassword]=useState()
  const[name,setName]=useState("")
  //const[dataInput, setDataInput]=useState(""); 
  //const submitThis=(e)=>{
   // const info={email:email,password:password}; 
		//setDataInput([info]);
  //}
  function msg(){
    alert(`Successfully logged in`);
  }
  const handleNameChange= (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault()
    console.log({name,password});
  };
    return(
      <center className='Login'>
    <div className='grid'>
      <img src={pet} alt="pet" className='imageStyle'></img>
      <h1 className="head">Welcome to the Petstopia</h1>
      <form onSubmit={handleLogin} className='form-container'> 
      <h2 className='class'>Login Page</h2><br></br>
			<div>
        <div className='charu' >
        <label htmlFor="name" className='para'>Name</label>
        <input type="text" name="Naam" placeholder="Enter your name"
        value={name} onChange={handleNameChange}/>
        </div>  
				<div className='charu'> 
				<label htmlFor="password" className='para'>Password</label>
				<input type="text" name="password" id="password" placeholder="Enter your password"
        value={password} onChange={handlePasswordChange}/> 
				</div> 
        <div className='charu'> 
				<button type="submit" className="Button" onClick={msg}>Login</button>
        </div>
        </div>
		</form>
    </div>
    </center>
    )
}
export default Main