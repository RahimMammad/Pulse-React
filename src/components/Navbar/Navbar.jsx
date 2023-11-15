import React, { useState } from 'react'
import Phone from "../../assets/Phone.svg"
import "./Navbar.scss"
import Menu from "../../assets/Menu.svg"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  
  return (
    <nav>
        <div className='navbar-main-container'>
            <h2>Pulse</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Restaurant</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="reserve">
                <span>Reservations</span>
                <img src={Phone} alt="" />
                <p>652-345 3222 11</p>
            </div>
            <img onClick={toggleSidebar} id='bars' src={Menu} alt="" />
        </div>
    </nav>
  )
}

export default Navbar