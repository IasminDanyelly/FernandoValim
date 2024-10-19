import { Banner } from "../../components/Banner";

export const Home = () => {
  return (
    <div className="flex ">
      <Banner/>
        <section className="relative left-[15%] my-[10%]  text-white ">
          <h2 className="text-[4em] ">Fernando Valim</h2>
          <span className="text-[1.5em]">& Banda</span>
        </section>
   
    </div>
  );
};
