import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
        <nav>
            <h1>Foodie</h1>
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </nav>
        <img src='https://cdn.wallpapersafari.com/42/55/MDzowJ.jpg' style={{width:'100%',height:'440px',position:'fixed'}}/>
    </>
  )
}

export default Navbar