import React from 'react';

const Carousel = () => {
  return (
    <div className='flex justify-center'>
    <div className="carousel w-10/12 h-96 rounded-2xl mt-3">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/kh5gNjL/daria-nepriakhina-x-Y55b-L5m-ZAM-unsplash.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/3RxMvNm/nathan-dumlao-LPRr-EJU2-Gb-Q-unsplash.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/kh5gNjL/daria-nepriakhina-x-Y55b-L5m-ZAM-unsplash.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/3RxMvNm/nathan-dumlao-LPRr-EJU2-Gb-Q-unsplash.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
