import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import axios from 'axios'
import video from '../pages/pharmacy.mp4'
import { getItem, setRole, setToken, setemail } from '../pages/LocalStorage'
// import video from './video.mp4';
const Login = () => {
  const [email, setEmail] = useState('');
  const[password,setPassword]=useState('');
  // const[user,setUser]=useState('');
  const nav = useNavigate();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: email,
        password: password
      };

      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType=="USER"){
                nav("/home");
              }
             
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };
  
  return (


    <div id="full-body">
    <video id="background-video" autoPlay loop muted>
    <source src={video} type="video/mp4" />
    </video>
    <div className="signup-form2">
    <div className="container">
      <div className="header">
      <h1 className="title">Pharmacy Management</h1>
        <p className='cred'>Enter Credentials For Login</p>
      </div>
   
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text"
           placeholder="email" 
           value={email}
           onChange={handleEmailChange}/>
           {formErrors.email && <p className="error">{formErrors.email}</p>}

        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password"  value={password}
            onChange={handlePasswordChange} />
              {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>
        <input onClick={validate} className="signup-btn" type="submit" value="LOGIN" />
      </form>
    <Link to="/register" style={{textDecoration: 'none'}}>  <p class="no-acc" style = {{color: "black"}}>No Account? Signup Now!</p></Link>
      
    </div>
  </div>
  <Link to="/">
  <button style={{width: '150px'}}>Back</button>
  </Link>
  </div>
  )
}

export default Login;