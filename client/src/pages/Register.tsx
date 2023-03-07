import React, { useState } from 'react';
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    name:"",
    logo:"",
    tel: "",
    email:"",
    password:""
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     e.preventDefault()
     try{
       const res = await axios.post("http://localhost:8800/api/auth/register", inputs)
       navigate("/login")
     }catch(err: any){
       setError(err.response.data)
    }
   } 


  return (
    <div className='login'>
      <div></div>
      <div className='content'>
        <span className='welcome'><h1 style={{fontSize: '5vw'}}>Welcome!</h1></span>
        
        <form>
            <input type='text' placeholder='Company name' name='name'  onChange={handleChange}/>
            <label htmlFor='logo' className='register-logo'>Logo:</label>
            <input type='file' name='logo' onChange={handleChange}/>
            <input type='tel' name='tel' placeholder='telephone number' onChange={handleChange} />
            <input type='text' placeholder='E-mail' name='email' onChange={handleChange}/>
            <input type='password' placeholder='password' name='password' onChange={handleChange} />
            <button type='submit' onClick={handleSubmit}>REGISTER</button>
            { err && <p className='error'>{err}</p>}
        </form>
        
        <p className='singup'>already have an Account?, please <Link to='/login' className='links'>Sign IN</Link></p>
        </div>
    </div>
  )
}

export default Register