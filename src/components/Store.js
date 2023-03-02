import React from 'react';
 import '../styles/store.css'
 import Cart from './Cart';
const Store = ({item, handleClick}) => {
    const { price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            {/* <img src={"img"} alt="Image" /> */}
          <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Buy Now</button>
        </div>
        <div className='more'><button onClick={()=>onclick(item)} >More Details</button></div>
    </div>
  )
}

export default Store