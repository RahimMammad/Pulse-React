import React from 'react'
import "./WelcomeCard.scss"

const WelcomeCard = ( {data} ) => {
  // console.log("data",data);
  return (
    <div className='welcome-card-container' key={data?.id}>
      <h3>{data?.year}</h3>
      <p>{data?.text}</p>
    </div>
  )
}

export default WelcomeCard