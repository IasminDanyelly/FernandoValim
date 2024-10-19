import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
     <header className="bg-[#202021] text-[#c4474f] w-full max-w-[70%] m-auto my-7 items-center justify-between flex h-[80px] z-10 ">
        <div>
          <h3 className="pl-10 text-xl">Logo</h3>
        </div> 

       <div className='flex items-center justify-center'>
        <div className='md:hidden'>
          <button onClick={() => setOpen(!open)} className="text-3xl mr-5" >
            {open ? <MdCancel /> : <IoMenu /> }
          </button>
        </div>

        <nav className={`transition-all duration-800  ${open ? "bg-[#821d1d] py-3 px-8 flex items-center justify-start" : ""} ` }>
          <ul className={` md:flex flex-col md:flex-row text-xl cursor-pointer 
            ${open ? "block" : "hidden mr-10"} md:block text-justify md:gap-10 flex flex-col  `}>
            <a className="hover:text-[#821d1d] transition-all duration-300 my-2" href='/'>Home</a>
            <a className="text-white hover:text-[#8f8d8d] transition-all duration-300 my-2" href='/about'>About</a>
            <a className="text-white hover:text-[#8f8d8d] transition-all duration-300 my-2" href='/contact'>Contact</a>
            <a className="text-white hover:text-[#8f8d8d] transition-all duration-300 my-2" href='/cards'>Shows</a>
          </ul>
        </nav>
      </div>   
  
     </header>
     
 );
}