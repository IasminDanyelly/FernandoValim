
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import ImgCard1 from '../../assets/imagem-fernando1.jpg'
import ImgCard2 from '../../assets/imagem-fernando2.jpg'
import ImgCard3 from '../../assets/imagem-fernando3.jpg'
import ImgCard4 from '../../assets/imagem-fernando4.jpg'
import ImgCard5 from '../../assets/imagem-fernando5.jpg'
import ImgCard6 from '../../assets/imagem-fernando6.jpg'


export const Cards = () => {

  const images = [ImgCard1, ImgCard2, ImgCard3, ImgCard4, ImgCard5, ImgCard6];

  return (
    
    <div>  
      
      <Swiper 
      navigation
      pagination={{clickable: true}} 
      modules={[Navigation, Pagination, Autoplay]} 
      className="mySwiper object-cover flex items-center"
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}

      breakpoints={{
        300: {slidesPerView: 1},
        640: {slidesPerView: 2},
        700: {slidesPerView: 2},
        1000: {slidesPerView: 3},
        1200: {slidesPerView: 4},
      }}
      >
        {images.map((imgSrc, index ) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
             <img src={imgSrc} alt={`Slide ${index + 1}`} className='h-[50vh] object-cover '/>
          </SwiperSlide>
        ))}
    
      </Swiper>
   </div>
  );
}