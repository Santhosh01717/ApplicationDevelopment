import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
// import image from '../pages/homepage.png'
import './myhomepage.css';
import "./login.css"
// import "./loginGpt.css";
import video from '../pages/pharmacy1.mp4'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

function Myhomepage() {
   const nav = useNavigate();
   const LoginHandler = () =>{
      nav("/login")
   }
    return (
        <>
        <Navbar />
        <div id="body">
    <video id="background-video" autoPlay loop muted>
    <source src={video} type="video/mp4" />
    </video>
     </div>
     <div id="text-phar"><p style={{fontSize: "40px",color:"white",fontWeight: "bold"}}>
        PHARMACY MANAGEMENT SYSTEMS TO ENHANCE 
        </p>
        </div>
     <div id="new-text-phar"><p style={{fontSize: "40px",color:"white",fontWeight: "bold"}}>
     PROCESS OPTIMIZATION
        </p>
        </div>
     <div id="learn-start">
     <button class="learn-button" style={{width: "200px"}}>Learn More</button>
     <button class="learn-button" style={{width: "200px"}} onClick={LoginHandler}>Get Started</button>
     </div>
     <div id="three-box">
        <div id="first-box-phar"> 
        <img id="img-help" src="https://www.zohowebstatic.com/sites/zweb/images/crm/features/features-summary.svg" alt="image"></img>
            <div id="points">
                <para>Get real-time notifications from customers</para>
                <para>Support customer tickets and queries instantly</para>
                <para>See a complete picture of all customer conversations</para>
                <para>Retain existing customers and find new ones easily</para>
             </div>
        </div>
        <div>
                
        </div>
     </div>
     <div id="new-box">

     </div>
     <Footer/>
        </>
        
  );
}

export default Myhomepage;
