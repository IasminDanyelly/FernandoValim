
export const Banner = () => {
 return (
    <>
    <div className="absolute bg-[rgba(0,0,0,.7)] inset-0 opacity-50 z-10 opacityBanner"></div>
     <div className=" flex flex-col relative text-white top-[10%] z-20 right-0 left-[16%] divBanner "> 
        <h2 className="text-[5.5em] nomeCantorBanner"> Fernando Valim </h2>
        <span className="text-[2.3em] spanBanner"> & Banda </span> 
     </div>
   </>
 );
}

