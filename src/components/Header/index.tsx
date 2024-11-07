import Logo from '../../assets/logoFernandoValim-removebg-pronta.png'

export const Header = () => {
  return (
     <header className="bg-[#1b1b38] text-[#f6f6f6] w-full max-w-[90%] sm:max-w-[80%] m-auto my-10 items-center justify-between flex h-[80px] z-20 rounded-lg">
        <div className='flex w-full row-auto items-center px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16'> 
           <img src={Logo} className='w-20'/>
        </div>
      
        <nav className='transition-all duration-800 mr-16 header '>
           <ul className='flex text-[1.3rem] cursor-pointer text-justify gap-12 mx-5  '>
            <a className="hover:text-[#8f8d8d] transition-all duration-300 " href='/'>Home</a>
            <a className="text-white hover:text-[#8f8d8d] transition-all duration-300 " href='/about'>Shows</a>
            <a className="text-white hover:text-[#8f8d8d] transition-all duration-300 " href='/contact'>Sobre</a>
            <a className="text-white hover:text-[#8f8d8d] transition-all duration-300 " href="https://wa.me/48998022432?text=Olá,tudobem?Tenhointeresseemcontratarabanda!" target='_blank'>Contato</a>
           </ul>
         </nav>
        
     </header>
     
 );
}