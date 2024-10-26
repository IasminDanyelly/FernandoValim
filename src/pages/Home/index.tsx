import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";


export const Home = () => {
  return (
  
    <div className="flex bg-parallax bg-cover bg-fixed 
     h-[60vh]
     sm:h-[100vh] 
     md:h-[60vh] 
     lg:h-[80vh] 
     xl:h-[100vh] 
     items-center 
     object-cover 
     flex-col 
     bg-left-top   
     ">
      <Header/>
      <Banner/>
    </div>
  );
};
