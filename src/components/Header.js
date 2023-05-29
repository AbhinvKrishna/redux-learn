import React from 'react'

function Header(props) {

    console.warn('headers', props.data)

  return (
    <div>
        <div>
        <h3 style={{fontSize:'2rem',display:'flex',
        marginLeft:'780px', color:'red', position:'absolute'}}>{props.data.length}</h3>

        <img style={{width:'100px', height:'100px', display:'flex',
        marginLeft:'700px'}} src="https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-add-to-cart-vector-icon-png-image_313447.jpg" alt="" />
      </div>
    </div>
  )
}

export default Header