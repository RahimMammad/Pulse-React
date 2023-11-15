import React, { useState } from 'react'
import "./Header.scss"
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar';


const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp",
    "https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp",
    "https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp",
  ]

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length)
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  return (
    <header style={{
      backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
        {/* <SideBar /> */}
        <Navbar />
        <div className="header-main-container">
          <h1>Special Dish<span>.</span></h1>
          <div className="header-text">
              <p>By Chef Francis Smith</p>
          </div>
        </div>
        <div className="sliderBtns">
          <button onClick={prevSlide}></button>
          <button onClick={nextSlide}></button>
        </div>
    </header>
  )
}

export default Header