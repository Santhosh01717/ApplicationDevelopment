import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{color: "#2f2e2e"}}/>
          </Link>
          <div id="button" style={{color:"white",fontSize:"21px"}}>
            <div id="Log-sign">
            <Link to="/contact" style={{textDecoration: "none"}}> <span style={{marginRight:"20px",color:"black"}}>Contact Us</span></Link>
            <Link to="/about" style={{textDecoration: "none"}}> <span style={{marginRight:"20px",color:"black"}}>About Us</span></Link>
            <span style={{color:"black"}}>Help</span>
            <Link to="/" style={{textDecoration: "none"}}><span style={{marginRight:"20px",color:"black"}}>Log Out</span></Link>
            </div>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
