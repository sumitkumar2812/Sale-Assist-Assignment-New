import React from 'react'
import "./index.css"

const Card = ({data}) => {


  return (

    <div key={data.id} className="product-card">
      <div>
        <img className='home-image' src={data.image} alt='ecomme' />
      </div>
      <h2 className='title'>{data.title}</h2>
      <div className='bottom-function'>
        <div className='price-container'>
          <p className='price'>&#8377;{data.price}</p>
          <p className='discount'>{data.price * 2 }</p>
          <p className='fifty-off'>(50% off)</p>
        </div>
        <img className='shoping-bag' src='https://res.cloudinary.com/dzbfzovvx/image/upload/v1713121857/shopping-bag_j2z4vh.png' alt='shoping-bag'/>
      </div>
    </div>  

  )
}

export default Card

