import React from 'react';
import './footer.css'; // Replace 'YourCSSFile.css' with the actual path to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure you have the Font Awesome package installed
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <Link to="/about"><li><a href="#">about us</a></li></Link>
              <li><a href="#">our services</a></li>
              <Link to="/privacypolicy" style={{textDecoration: "none"}}>
              <li><a href="#">privacy policy</a></li>
              </Link>
              <Link to="/terms" style={{textDecoration: "none"}}> <li><a href="#">Terms and conditions</a></li></Link>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
            <Link to="/faq" style={{textDecoration: "none"}}><li><a href="#">FAQ</a></li></Link>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com" style={{display: "flex",justifyContent: "center",alignItems: "center"}}><FacebookIcon /></a>
              <a href="https://www.instagram.com" style={{display: "flex",justifyContent: "center",alignItems: "center"}}><InstagramIcon /></a>
              <a href="https://www.twitter.com" style={{display: "flex",justifyContent: "center",alignItems: "center"}}><TwitterIcon /></a>
              <a href="https://www.github.com" style={{display: "flex",justifyContent: "center",alignItems: "center"}}><GitHubIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
