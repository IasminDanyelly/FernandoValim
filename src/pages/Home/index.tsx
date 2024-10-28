import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";


export const Home = () => {
  return (
    <div 
      className="flex bg-cover bg-fixed flex-col  items-center object-cover home h-[100vh]" 
      style={{ backgroundImage: `url("src/assets/fotoFernando.jpg")` }}
    >
      <Header/>
      <Banner/>
    </div>
  );
};

