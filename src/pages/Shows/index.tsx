import { Cards } from "../../components/Cards"


export const Shows = () => {
    return(
        <div className=" flex justify-center flex-col mt-[20%] bg-[#202021] gap-8">   
            <h1 className='relative left-[12%] text-white mt-8'>Meus shows</h1>
            <Cards/>

            <button className='border-2 border-white  flex justify-center items-center m-auto px-16 py-3 my-10 text-[18px] text-white hover:text-gray-400 transiton-all duration-300 hover:border-gray-400 '> Ver mais shows</button>
        </div>
    )
}