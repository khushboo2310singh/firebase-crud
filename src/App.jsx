
import UpdateDetail from "./UpdateDetail";
import RemoveDetail from "./RemoveDetail";
import Detail from "./Detail"
import Homee from "./Homee";
import React from 'react';
import Navbar from './Navbar';
import ErrorMsg from './ErrorMsg';
import { Route,Routes} from 'react-router-dom';
import firebase from './Firebase';


const App=()=>{

    return(
        <>
        
        <Navbar/>
        <Routes>

            <Route path="/" element={<Homee/>}/>
            <Route path="/Detail" element={<Detail/>}/>
            <Route path="/RemoveDetail/:id" element={<RemoveDetail/>}/>
            <Route path="/UpdateDetail/:id" element={<UpdateDetail/>}/>
            <Route path="*" element={<ErrorMsg/>}/>
            

        </Routes>
        
        </>
    )

}
export default App;

