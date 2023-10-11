import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import validator from 'validator';
import '../login/login.css'
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmiited] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const details={email,password,name,
    role:"user",
    }
    const validationErrors = {};
    console.log(details)
    if (!name.trim()) {
      validationErrors.name = "Username is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
      
    //   nav("/");
    // }
    if (Object.keys(validationErrors).length === 0){
      fetch("http://localhost:8080/auth/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(details)
      }
      ).then(()=>{
        console.log("New Detail Added");   
        console.log(JSON.stringify(details));
        console.log(e);
        nav("/")
      })
    }
  };
  const handleNavigate= () => {
    nav("/");
  };

  return (
    <div id="full-body">

    
    <div id="body">
    <div className='signup-form1' >
  <div className='container'>
    <div className='header'>
      <h1 id="ryzoo-title">Pharmacy Management</h1>
      <h2 className='font2'>Sign Up</h2>
    </div>
      {isSubmitted ? (
        <p>Signup successful!</p>
      ) : (
      <div>
    <form onSubmit={handleSubmit}>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder="Name"  value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email"  value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" placeholder="Password"   value={password}
              onChange={(e) => setPassword( e.target.value )}
            />
            {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" placeholder="Confirm Password" value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value )}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
     <input className="signup-btn" onClick={handleSubmit} type="submit" value="SIGN UP" /> 
    </form>
    <Link to="/login" style={{textDecoration: 'none'}}>  <p  id="already-acc" >Already have an account? Sign in</p></Link>
    </div>)}
  </div>
</div>
<Link to="/">
<button style={{width: "150px"}}>Back</button>
</Link>
</div>
</div>
  )
}

export default Signup;