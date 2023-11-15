import React from 'react'
import WelcomeCard from '../../components/WelcomeCard/WelcomeCard.jsx'
import "./WelcomeSection.scss"
import Sign from "../../assets/sign.png.webp"

const WelcomeSection = () => {
    const welcomeApi = [
        {
            id: 1, 
            year: 2002,
            text: "In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat."
        },
        {
            id: 2, 
            year: 2010,
            text: "Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium."
        },
        {
            id: 3, 
            year: 2018,
            text: "In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat."
        }
    ]
  return (
    <section>
        <h2>Welcome</h2>
        <div className='welcome-main-container'>
            {
                welcomeApi.map((data) => (
                    <WelcomeCard key={data?.id} data={data} />
                ))
            }
        </div>
        <div className='signImg'>
            <img src={Sign} alt="" />
        </div>
    </section>     
  )
}

export default WelcomeSection