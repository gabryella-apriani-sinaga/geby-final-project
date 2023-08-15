import React from 'react'
import { useNavigate} from "react-router-dom";

const  CardProduct = ({thumb}) => {

  const navigate = useNavigate();

  console.log("======" , thumb.urlImageThumbnail);
  const handleCardClick = (productId) => {
    // Navigate to a specific route, passing the product ID as a parameter
    navigate(`/thumbnail-list/${productId}`);
  };

  return (
   <div onClick={() => handleCardClick(thumb._id)}>
      <div className=' shadow-lg rounded-md' style={{backgroundColor:'#F8F0E5', marginRight:'1rem'}} >
      <img className="w-4/5 h-auto mx-auto mt-4 rounded-md " src={thumb.urlImageThumbnail} alt="Gambar Card" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">{thumb.title}</h2>
       
       
      </div>
      </div>
   </div>
  )
}

export default CardProduct;
