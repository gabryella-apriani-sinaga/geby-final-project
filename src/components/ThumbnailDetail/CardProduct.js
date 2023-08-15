import React from 'react'

const CardProduct = ({product}) => {
  return (
    <a href={product.linkProduct}>
    <div className=' shadow-lg rounded-md' style={{backgroundColor:'#F8F0E5', marginRight:'1rem'}} >
    <img className="w-4/5 h-auto mx-auto mt-4 rounded-md " src={product.imageProduct} alt="Gambar Card" />
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p>Rp.{product.price}</p>
    </div>
    </div>
    </a>
  )
}

export default CardProduct
