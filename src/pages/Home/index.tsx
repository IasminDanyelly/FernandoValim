import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { FaAngleDoubleUp } from "react-icons/fa";
import {Link} from 'react-scroll'
import BgImage from '../../assets/fotoBannerFernando.webp'

export const Home = () => {
  return (
    <div 
      className="flex bg-cover bg-fixed flex-col  items-center object-cover home h-[100vh]" 
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="fixed right-[5%] bottom-4 rounded-full bg-[rgba(27,27,56,0.79)] text-white px-5 py-5 hover:bg-[rgba(27,27,56,0.93)] transition-all duration-300 cursor-pointer"><FaAngleDoubleUp size={25}/></Link>
      <Header/>
      <Banner/>
      
    </div>
  );
};

