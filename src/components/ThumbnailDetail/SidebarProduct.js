import React, {useEffect, useState} from 'react';
import CardProduct from './CardProduct';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SidebarProduct = () => {
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    axios.get(`https://zealous-yak-leg-warmers.cyclic.cloud/api/products/${id}`).then(res => {
    setProduct(res.data.data.products);
    }) 
  }, []);
  
  return (
    
    <div className='flex flex-col items-start'>
    {product.length === 0 ? 'Tidak Tersedia' : product.map(prd =>  <CardProduct product = {prd}  /> )}
    </div>
  );
};

export default SidebarProduct;
