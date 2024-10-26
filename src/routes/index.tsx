
import { About } from '../components/About';
import { Contact } from '../components/Contact';

import { Home } from '../pages/Home';
import { Shows } from '../pages/Shows';

export default function Routes(){
    return(
        <div>
         <Home/>
         <Shows/>
         <About/>
         <Contact/>
        </div>
    )
};