import SidebarProduct from './SidebarProduct';
import CommentProduct from './CommentProduct';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
;
const ThumbnailDetail = () => {
  const [thumbList, setThumbList] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get('http://localhost:3001/api/video-thumbnails').then((res) => {
      const thumb = res.data.data.videoThumbnailList.find(el => el._id === id)
      setThumbList(thumb)
    })
  }, []);

  return (
    <>
    <Header />
    <div  className='flex mx-auto gap-5'>
      <SidebarProduct/>
      <div className="embed-responsive embed-responsive-16by9" style={{marginTop:'1rem'}}>
        <iframe
          className="embed-responsive-item"
          src={thumbList.urlVideoThumbnail}
          allowFullScreen
          height="300"
          width="500"
        ></iframe>
      </div>
      <CommentProduct />
    </div>
    </>
  );
};

export default ThumbnailDetail;
