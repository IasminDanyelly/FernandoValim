import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";


export const Home = () => {
  return (
    <div 
      className="flex bg-cover bg-fixed flex-col  items-center object-cover home h-[100vh]" 
      style={{ background: '#4f43cc' }}
    >
      <Header/>
      <Banner/>
    </div>
  );
};

