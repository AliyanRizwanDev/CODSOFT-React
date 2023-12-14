import React from 'react'
import logo from '../img/logo.png'; 
import socialIcon1 from '../img/social-1.png'; 
import socialIcon2 from '../img/social-2.png';
import socialIcon3 from '../img/social-3.png';
import socialIcon4 from '../img/social-4.png';

export default function Navbar() {

    function Home() {
        window.open("Home.html", "_self");
    }
    function About() {
        window.open("AboutUs.html", "_self");
    }
    function Product() {
        window.open("Products.html", "_self");
    }
    function Contact() {
        window.open("Contact.html", "_self");
    }
  return (
    <div>
      <div className="container-fluid">
        {/* Logo */}
        <div className="row justify-content-between">
          <div className="col-12 col-lg-1 logo">
            <center>
              <img src={logo} alt="logo" />
            </center>
          </div>
          {/* Social Icons */}
          <div className="col-12 col-lg-2 s-all-icons my-auto">
            <center>
              <a href="https://www.youtube.com/">
                <img src={socialIcon1} alt="Image" className="s-icons" />
              </a>
              <a href="https://web.whatsapp.com/">
                <img src={socialIcon2} alt="Image" className="s-icons" />
              </a>
              <a href="https://twitter.com/">
                <img src={socialIcon3} alt="Image" className="s-icons" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={socialIcon4} alt="Image" className="s-icons" />
              </a>
            </center>
          </div>
        </div>
      </div>

      {/* Navbar Links */}
      <nav className="navbar navbar-expand-sm justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={Home}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={About}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={Product}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={Contact}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
