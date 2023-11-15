import React from 'react'
import Header from '../layouts/Header/Header'
import WelcomeSection from '../layouts/WelcomeSection/WelcomeSection'
import Testimonials from '../layouts/TestimonialsLayout/Testimonials'

const Home = () => {
  return (
    <div>
        <Header />
        <WelcomeSection />
        <Testimonials />
    </div>
  )
}

export default Home