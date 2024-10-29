import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";


export const Home = () => {
  return (
    <div 
      className="flex bg-cover bg-fixed flex-col  items-center object-cover home h-[100vh]" 
      style={{ backgroundImage: `url("https://instagram.fccm11-1.fna.fbcdn.net/v/t51.293…iBWnc3TbDgiAi_AWW7iEvw&oe=672697BB&_nc_sid=7a9f4b")` }}
    >
      <Header/>
      <Banner/>
    </div>
  );
};

