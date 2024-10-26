import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";


export const Home = () => {
  return (
  
    <div 
      className="flex bg-cover bg-fixed bg-parallax
      h-[100vh]
      home
  
      items-center 
      object-cover 
      flex-col 
      bg-left-top" 
      
    >
      <Header/>
      <Banner/>
    </div>
  );
};
