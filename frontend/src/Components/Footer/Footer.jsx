import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Tomato brings your favourite food from the best local restaurants right to your door. Fresh, fast and delicious — every time.</p>
                <div className="footer-social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <img src={assets.facebook_icon} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <img src={assets.twitter_icon} alt="Twitter" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/delivery">Delivery</Link></li>
                    <li><Link to="/privacy-policy">Privacy policy</Link></li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li><a href="tel:+12224352342">+1-222-435-2342</a></li>
                    <li><a href="mailto:contact@tomato.com">contact@tomato.com</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2026 @ Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
