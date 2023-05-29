import React from 'react'

function Home(props) {

  console.warn("Homeprops", props)


  return (
    <div>
      <h1>Home</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img  src="https://www.91-img.com/pictures/144646-v8-apple-iphone-14-pro-mobile-phone-large-1.jpg" alt="" />
        </div>
        <div className='text-wrapper item'>
          <span>
            <b>Item:</b> I-Phone
          </span>
          <br />
          <span>
            price: 1000$
          </span>
        <div className='btn-wrapper item'>
          <button style={{background:"skyblue"}} onClick={()=> props.addToCartHandler({price:"500$",name:"I-Phone11"})}>Add to Cart</button>

          <button style={{background:"red", marginLeft:'20px'}} onClick={()=> props.removeToCartHandler()}>Remove from Cart</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home