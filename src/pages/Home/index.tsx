import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import BgImage from '../../assets/fotoFernando.jpg'

export const Home = () => {
  return (
    <div 
      className="flex bg-cover bg-fixed flex-col  items-center object-cover home h-[100vh]" 
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Header/>
      <Banner/>
    </div>
  );
};

