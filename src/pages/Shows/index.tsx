import { Cards } from "../../components/Cards"

export const Shows = () => {
    return(
        <div className=" flex justify-center flex-col bg-[#202021] gap-8">   
            <h1 className='relative left-[12%] text-[2em] text-white mt-8' style={{fontFamily: "Poppins"}}>Meus shows</h1>
            <Cards/>

           <a href="https://www.instagram.com/fernandovalimcantor/"> 
            <button style={{fontFamily: 'Poppins'}} className='border-2 border-white flex justify-center items-center m-auto px-16 py-3 my-10 text-[18px] text-white hover:text-gray-400 transiton-all duration-300 hover:border-gray-400 '>
                 Ver mais shows
            </button>
          </a>
        </div>
    )
}