import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import Card from './Card'
import Carousel from '../Header/Carousel'

import axios from 'axios'

const ThumbnailList = () => {
  const [thumbList, setThumbList] = useState([]);
  

  useEffect(() => {
    axios.get('https://giant-cow-sundress.cyclic.cloud/api/video-thumbnails').then((res) => {
      setThumbList(res.data.data.videoThumbnailList)
    })
    
  }, [])

  return (
    <div>
      <Header />
      <Carousel />
      <div className="w-3/4 mx-auto mt-6 flex">
        {thumbList.map(thumb => <Card thumb={thumb} />)}
      </div>
    </div>
  )
}

export default ThumbnailList
