import Logo from '../../assets/logoFernandoValim-removebg-pronta.png';
import {Link} from 'react-scroll';


export const Header = () => {
  return (
     <header className="bg-[#1b1b38] text-[#f6f6f6] w-full max-w-[90%] sm:max-w-[80%] m-auto my-10 items-center justify-between flex h-[80px] z-20 rounded-lg header">
        <div className='flex w-full row-auto items-center px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16'> 
           <img src={Logo} className='w-20 logo'/>
        </div>
      
        <nav className='transition-all duration-800 mr-16 navHeader '>
           <ul className='flex text-[1.3rem] cursor-pointer text-justify gap-12 mx-5  '>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}  className="hover:text-[#8f8d8d] transition-all duration-300 " >Home</Link>
            <Link to="showsComponent" spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-[#8f8d8d] transition-all duration-300 ">Shows</Link>
            <Link to="aboutComponent" spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-[#8f8d8d] transition-all duration-300 " >Sobre</Link>
            <Link to="contactComponent" spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-[#8f8d8d] transition-all duration-300 " >Contato</Link>
           </ul>
         </nav>
        
     </header>
     
 );
}