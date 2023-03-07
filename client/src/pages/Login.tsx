import React, { useContext, useState } from 'react'
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    email:"",
    password:""
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     e.preventDefault()
     try{
      await login(inputs)
        navigate(-1)
     }catch(err: any){
       setError(err.response.data)
    }
   } 
 


  return (
    <div className='login'>
      <div></div>
      <div className='content'>
        <span className='welcome'><h1>Welcome back!</h1></span>
        
        <form>
            <input type='text' placeholder='E-mail' name='email' required onChange={handleChange}/>
            <input type='password' placeholder='password' name='password' required onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>LOG IN</button>
            { err && <p className='error'>{err}</p>}
        </form>
        
        <p className='singup'>if you havent't created an account yet, please <Link to='/register' className='links'>Sign UP</Link></p>
        </div>
    </div>
  )
}

export default Login