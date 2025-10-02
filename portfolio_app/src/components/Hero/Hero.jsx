import React from 'react'
import './Hero.css'
import profile_img from '../../assets/faridi.jpg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="Profile-image" />
        <h1><span>I'm Faridi Khamisi,</span> frontend developer based in Tanzania.</h1>
        <p>I am frontend developer from Dar es salaam, Tanzania with 10 years of experience in multiple companies like Telesoft and e-Ga.</p>
        <div className="hero-action">
            <div className="hero-connect"><Link className="anchor-link" offset={-150} smooth={true} duration={500} to="contact">Connect With Me</Link></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}   

export default Hero