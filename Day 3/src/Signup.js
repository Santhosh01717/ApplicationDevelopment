import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import './login.css'
function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // You can submit the form data to your server or perform other actions here.
      setIsSubmitted(true);
    }
  };
  return (
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
    <form>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder="Name"  value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email"  value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" placeholder="Password"   value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" placeholder="Confirm Password" value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
     <input className="signup-btn" onClick={handleSubmit} type="submit" value="SIGN UP" /> 
    </form>
    <Link to="/login" style={{textDecoration: 'none'}}>  <p  id="already-acc" >Already have an account? Sign in</p></Link>
    </div>)}
  </div>
</div>
<Link to="/Login">
<button style={{width: "150px"}}>Back</button>
</Link>
</div>
  )
}

export default Signup;