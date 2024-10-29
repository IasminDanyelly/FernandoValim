import {useEffect, useState} from 'react'

import Event1 from '../../assets/imagem-fernando1.jpg'
import Event2 from '../../assets/imagem-fernando2.jpg'
import Event3 from '../../assets/imagem-fernando3.jpg'

import ImgDemo1 from '../../assets/imagem-fernando4.jpg'
import ImgDemo2 from '../../assets/imagem-fernando3.jpg'
import ImgDemo3 from '../../assets/imagem-fernando2.jpg'
import ImgDemo4 from '../../assets/imagem-fernando1.jpg'
import ImgDemo5 from '../../assets/imagem-fernando5.jpg'
import ImgDemo6 from '../../assets/imagem-fernando6.jpg'

import Video1 from '../../assets/Video1.mp4'
import Video2 from '../../assets/Video2.mp4'
import Video3 from '../../assets/Video3.mp4'

export const About = () => {
  const [fade, setFade] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [ImgDemo1, ImgDemo2, ImgDemo3, ImgDemo4, ImgDemo5, ImgDemo6];
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        setFade(false);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])
 
 return (
   <div className="bg-gray-200 flex justify-center items-center py-20 flex-col" >
      <h1 className='text-[#a83840]  text-center h1About '>
        Mais que notas, cada canção é uma parte de mim. 
        Venha conhecer a alma por trás da música.
      </h1>

    <div className="w-full max-w-[70%] sm:max-w-[80%] flex flex-row justify-center gap-10 mt-10 "> 
      
      <section className="max-w-[30%] flex flex-col text-justify gap-5 sobre">
        <h3 className="text-2xl border-b-2 border-[#c4474f] text-gray-900 sobre" style={{fontFamily: "Poppins"}}> Sobre mim </h3>

        <span className='text-[21px]'style={{fontFamily:"Poppins"}} >
          Com um timbre marcante e uma presença de palco vibrante, Fernando Valim está dando os primeiros passos no sertanejo ao lado de sua banda,
          conquistando o público a cada apresentação. Com uma mistura envolvente de clássicos e novos sucessos do gênero,
          ele traz uma energia autêntica e promete crescer ainda mais no cenário musical. O início de uma jornada que só tende a ganhar força! 
        
        <br/><br/>
        
         {readMore ? (
         <>  
         Fernando Valim já marcou presença em eventos inesquecíveis, levando sua energia contagiante a festas como a <strong className='text-[#c4474f]'>  OktoberFest </strong>, 
         a tradicional  <strong className='text-[#c4474f]'> Polvilhana </strong>  e a vibrante <strong className='text-[#c4474f]'>  Perkins </strong>.
         Cada show é uma nova oportunidade de Fernando e sua banda compartilharem momentos únicos com o público
         </>
        ): ''}
      

        </span>
       
        
        <button 
        onClick={() => setReadMore(!readMore)} 
        className='relative left-0 border-2 border-[#b1424a] text-[#b1424a] w-44 py-2 mt-1 hover:border-[#8b343c] hover:text-[#8b343c] transition-all duration-300 text-[20px] text-center buttonMore '>
          Leia mais...
        </button> 
      </section>

      <ul className='max-w-[50%] mx-10 events'>
        <h3 className="text-3xl border-b-2 border-[#c4474f] text-gray-900" style={{fontFamily:"Poppins"}}>Eventos</h3>

        <li className=' relative group ' > 
          <img src={Event1} className='w-44 h-44 object-cover mt-5'/> 
          <div className='absolute inset-0 bg-[rgba(0,0,0,.4)] opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300'>
            <span className='text-white text-xl font-medium events'>OktoberFest</span>
          </div>
        </li>
 
        <li className='relative group'>
          <img src={Event2} className='w-44 h-44 object-cover mt-3'/>
          <div className='absolute inset-0 bg-[rgba(0,0,0,.4)] opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300'>
            <span className="text-white text-xl font-medium events">Polvilhana</span>
          </div>
        </li>

        <li className='relative group'>
          <img src={Event3} className='w-44 h-44 object-cover mt-3'/>
          <div className='absolute inset-0 bg-[rgba(0,0,0,.4)] opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300'>
            <span className="text-white text-xl font-medium events">Perkins</span>
          </div>
        </li>
      </ul>

      <section className='max-w-[30%] w-full flex justify-center items-center slide '>
        <img src={images[imageIndex]} className={`w-full h-full object-cover transition-opacity transition-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}/>
      </section>

    </div>



    <ul className="flex flex-col  md:flex-row items-center justify-center w-full mx-10 gap-6 events mt-24 py-20 videos">
    <li className="w-full sm:w-[20rem] md:w-[24rem] lg:w-[26rem] xl:w-[28rem] rounded-lg"> 
        <video controls className="h-72 sm:h-80 md:h-80 lg:h-96 object-cover w-full rounded-lg">
            <source src={Video1} className='rounded-lg'/>
        </video>
    </li>

    <li className="w-full sm:w-[20rem] md:w-[24rem] lg:w-[26rem] xl:w-[28rem] rounded-lg"> 
        <video controls className="h-72 sm:h-80 md:h-80 lg:h-96 object-cover w-full rounded-lg">
            <source src={Video2} className='rounded-lg'/>
        </video>
    </li>

    <li className="w-full sm:w-[20rem] md:w-[24rem] lg:w-[26rem] xl:w-[28rem] rounded-lg"> 
        <video controls className="h-72 sm:h-80 md:h-80 lg:h-96 object-cover w-full rounded-lg">
            <source src={Video3} className='rounded-lg'/>
        </video>
    </li>
   </ul>
   </div>
 );
};