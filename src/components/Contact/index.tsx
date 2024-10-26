import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
 return (
   <div className="bg-gradient-to-t to-gray-300 from-gray-200 flex justify-center items-center flex-col  ">
      <h3 className="text-[2em] text-gray-500 mt-20 mb-5 signature ">Fernando Valim</h3>

      <div className="flex flex-row mt-5 gap-6 iconsRedes">
       <a href='https://www.instagram.com/fernandovalimcantor/'><FaInstagram  className="text-[rgba(0,0,0,.6)] hover:text-[rgba(0,0,0,.8)] transition-all duration-300 cursor-pointer" size={32}/></a>
       <a href="https://www.facebook.com/profile.php?id=100005381290373&locale=pt_BR"><FaSquareFacebook className="text-[rgba(0,0,0,.6)] hover:text-[rgba(0,0,0,.8)] transition-all duration-300 cursor-pointer" size={32}/> </a>
       <a href=""> <FaWhatsapp className="text-[rgba(0,0,0,.6)]  hover:text-[rgba(0,0,0,.8)] transition-all duration-300 cursor-pointer" size={32}/> </a>
      </div>
      
    <span className="text-xl text-gray-700 descriptionContact my-16 text-center spanContact ">Quer saber mais sobre os próximos shows, parcerias ou eventos? Entre em contato e faça parte dessa jornada musical!</span>
    <span className="border-t-2 border-gray-700 uppercase w-full flex justify-center items-center p-5 rightReserved">&copy; 2024 | Direitos Reservados</span>
    
  </div>
 );
} 