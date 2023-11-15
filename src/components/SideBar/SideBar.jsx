import React from 'react'
import "./SideBar.scss"

const SideBar = (isSideBarOpen) => {
  return (
    <div className={`sidebar ${isSideBarOpen ? "open" : ""}`} >
        <ul className='sidebar-main-container'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default SideBar