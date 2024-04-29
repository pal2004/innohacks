import React from 'react';
import {Link} from 'react-router-dom';
import "./footer.css";
import Logo from '../Assets/images/Innohack-logo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer text-white">
            <div className="footer-left col-md-4 col-sm-6">
              <p className="about">
                <span> About the company</span> The Log-Eye project, led by Team Syntax Sages, focuses on bolstering web server security by logging Windows and network activities to generate comprehensive logs for protecting both the server and users.
              </p>
              <div className="flex gap-5 mt-5">
                <Link><FaFacebook size={32}/></Link>
                <Link><FaXTwitter size={32} /></Link>
                <Link><FaLinkedinIn size={32} /></Link>
                <Link><FaInstagram size={32} /></Link>
              </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
              <div id="class1">
                <div><i className="fa fa-map-marker"></i></div>
              <a> <p><span>KIET group of institutions</span> GZB, India</p></a> 
              </div>
              <div className="class1 mt-6">
               <Link id="tel" to="tel:+91-8273230778">8273230778</Link>
              </div>
              <div className="class1">

                <p><Link to="mailto:yashaggarwal2002.ya@gmail.com"> yashaggarwal2002.ya@gmail.com</Link></p>
              </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
             <Link><img src={Logo} className="small-logo w-44" /></Link> 
              <p className="menu flex gap-3"> 
                <Link> Home</Link>|
                <Link> About</Link>| 
                <Link> Services</Link>| 
                <Link> Contact</Link>|
              </p>
              <p className="name">LOG-EYE &copy; 2024</p>
            </div>
          </footer>
  )
}

export default Footer;
