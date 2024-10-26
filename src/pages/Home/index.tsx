import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";


export const Home = () => {
  return (
  
    <div 
      className="flex bg-cover bg-fixed 
      home
      items-center 
      object-cover 
      flex-col 
      bg-left-top" 
      style={{ backgroundImage: `url("src/assets/fotoBannerFernando.jpg")` }}
    >
      <Header/>
      <Banner/>
    </div>
  );
};
