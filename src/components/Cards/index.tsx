import {useState, useEffect} from 'react';

import ImgCard1 from '../../assets/imagem-fernando2.jpg'
import ImgCard2 from '../../assets/imagem-fernando4.jpg'
import ImgCard3 from '../../assets/imagem-fernando5.jpg'
import ImgCard4 from '../../assets/imagem-fernando6.jpg'
import ImgCard5 from '../../assets/imagem-fernando1.jpg'
import ImgCard6 from '../../assets/imagem-fernando3.jpg'

export const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sizeCards, setSizeCards] = useState(4)
 

  const images = [ ImgCard1, ImgCard2, ImgCard3, ImgCard4,ImgCard5, ImgCard6 ];
  const totalImages = [...images, ...images];

  useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth <= 480){
          setSizeCards(1)
        }else if(window.innerWidth <= 640){
          setSizeCards(2)
        }else if(window.innerWidth <= 768){
          setSizeCards(3)
        }else{
          setSizeCards(4)
        }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages.length)
    }, 3500);

    return () => clearInterval(interval);
  }, [totalImages.length]);


  return (
    <div 
      className=' relative w-full mx-auto overflow-hidden '
    >
      
    <div 
      className='flex transition-transform duration-300 ease-linear w-full object-cover divCards'
      style={{
        transform: `translateX(-${(currentIndex / totalImages.length / sizeCards) * 100}%)`,
        width: `${totalImages.length * (100 / sizeCards)}%`,  
      }}
    >
      {totalImages.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          className=' h-72 object-cover '
          style={{width: `${100 / sizeCards}%`}}
         />
       ))}
     </div>  
   </div>
  );
}