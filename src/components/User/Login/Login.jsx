import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import axios from '../../../axios'

import '../../../index.css'

function Login() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const generateError = (err) =>
        toast.error(err, {
            position: "bottom-right",
        })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/user/login", {
                ...values,
                
            }, { withCredentials: true });
            if (data) {
                if (data.errors) {
                    const { email, password } = data.errors;
                    if (email) generateError(email) 
                    else if (password) generateError(password) 
                } else {
                console.log('kjhgkg')
                var user=true;
                  navigate("/",{replace:true});
                }
            }
        } catch (err) {
            console.log("this is catch error", err)
        }
    }
  return (
    <div className='containermain'>
           <div className='containerlogin'>
        <h2>Login Account</h2>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter Email' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password'onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <button type='submit'>Submit</button>
            <span>Don't have an Account? <Link to="/register">Register</Link></span>
        </form>
        <ToastContainer />
    </div>
    </div>
    
  )
}

export default Login