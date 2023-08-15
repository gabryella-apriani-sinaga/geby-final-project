import React from 'react'
import IconStore from '../../assets/shop.png'


const Header = () => {
  return (
    <React.Fragment>
    <div style={{backgroundColor:'#C8AE7D', borderLeft:'15px solid #65451F', borderRight:'15px solid #65451F',boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', }} className='p-3 flex justify-between items-center  pl-8' >
    <p className="text-1xl font-bold text-white font-mono"><img src={IconStore} width="40" style={{ marginLeft:'0.8rem' ,fill:'blue', marginBottom:'0.3rem'}}/>BigShop</p>
    <div>
      <ul className='flex gap-5'>
          <li><a href="#" className='font-bold text-white'>Shop</a></li>
          <li><a href="#" className='font-bold text-white'>Story</a></li>
          <li><a href="#" className='font-bold text-white'>Auction</a></li>
      </ul>
    </div>

    </div>
   
    </React.Fragment>
  )
}

export default Header
