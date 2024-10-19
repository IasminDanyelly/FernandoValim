import React from "react";


export const Banner: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
 return (
    <>
     <div className="flex items-center justify-center h-full w-full bg-fixed bg-cover bg-parallax  absolute top-0 left-0 z-[-1] ">
          {children}
     </div>
   </>
 );
}