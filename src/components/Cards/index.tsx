import {useState, useEffect} from 'react';

import ImgCard1 from '../../assets/raul-najera-OsTJNX83lC0-unsplash.jpg'
import ImgCard2 from '../../assets/dan-gold-t5VKrG0xNtw-unsplash.jpg'
import ImgCard3 from '../../assets/victor-clime-0L-IgR1-3fE-unsplash.jpg'
import ImgCard4 from '../../assets/george-bakos-83HwuZirc-c-unsplash.jpg'
import ImgCard5 from '../../assets/victor-clime-0L-IgR1-3fE-unsplash.jpg'
import ImgCard6 from '../../assets/dan-gold-t5VKrG0xNtw-unsplash.jpg'
import ImgCard7 from '../../assets/raul-najera-OsTJNX83lC0-unsplash.jpg'
import ImgCard8 from '../../assets/george-bakos-83HwuZirc-c-unsplash.jpg'

export const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    ImgCard1, ImgCard2, ImgCard3, ImgCard4,
    ImgCard5, ImgCard6, ImgCard7, ImgCard8
  ];
  
  const totalImages = [...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages.length)
    }, 5000);

    return () => clearInterval(interval);
  }, [totalImages.length]);

  return (
   <div className='relative w-full mx-auto overflow-hidden '>
    <div 
    className='flex transition-transform duration-300 ease-linear w-full'
    style={{
      transform: `translateX(-${(currentIndex / totalImages.length) * 100}%)`,
      width: `${totalImages.length * 25}%`,  
    }}
    >
      {totalImages.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          className='w-1/4 h-72 object-cover '
         />
       ))}
     </div>   
   </div>
  );
}