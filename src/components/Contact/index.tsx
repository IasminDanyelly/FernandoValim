import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
 return (
   <div className="bg-gradient-to-t to-gray-300 from-gray-200 flex justify-center items-center flex-col contactComponent ">
      <h3 className="text-[2em] text-gray-500 my-12 signature ">Fernando Valim</h3>

      <div className="flex flex-row my-2 gap-6 iconsRedes">
       <a href='https://www.instagram.com/fernandovalimcantor/' target="_blank"><FaInstagram  className="text-[rgba(0,0,0,.6)] hover:text-[rgba(0,0,0,.8)] transition-all duration-300 cursor-pointer" size={32}/></a>
       <a href="https://www.facebook.com/profile.php?id=100005381290373&locale=pt_BR" target="_blank"><FaSquareFacebook className="text-[rgba(0,0,0,.6)] hover:text-[rgba(0,0,0,.8)] transition-all duration-300 cursor-pointer" size={32}/> </a>
       <a href="https://wa.me/554898022432?text=Olá%20Fernando,%20gostaria%20de%20saber%20mais%20sobre%20os%20shows!" target="_blank"> <FaWhatsapp className="text-[rgba(0,0,0,.6)]  hover:text-[rgba(0,0,0,.8)] transition-all duration-300 cursor-pointer" size={32}/> </a>
      </div>
      
    <span className="text-xl text-gray-700 descriptionContact my-10 text-center spanContact ">Quer saber mais sobre os próximos shows, parcerias ou eventos? Entre em contato e faça parte dessa jornada musical!</span>
    <span className="border-t-2 border-gray-700 uppercase w-full flex justify-center items-center p-5 rightReserved text-[rgba(0,0,0,.7)]">&copy; 2024 | Direitos Reservados por Fernando Valim</span>
    <span className="text-[18px] text-[rgba(0,0,0,.6)] font-sans mb-5 mt-4">Feito por UpStudio</span>
    
  </div>
 );
} 