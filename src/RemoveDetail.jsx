import axios from "axios";
import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";


const RemoveDetail=()=>{
const {id}= useParams();
    const deletedata=()=>{
    axios.delete(`https://contact-62876-default-rtdb.firebaseio.com/reactdb/${id}.json`)
    .then(response=>{console.log(response);})
    .catch(error=>{
        console.log(error);
    })
}
useEffect(()=>{
    deletedata();
},[])
    return(
        <>
            <div className="container-fluid ">
                <div className="row g-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-center">
                        <h3 className="mt-5">Data has been removed</h3>
                            <Link to="/Detail">
                                <button type="button" className="btn btn-secondary">Go Back</button>
                            </Link> 
                        </div>
                
                    </div>
                </div>
            </div>
       
        </>
    )
   
}
export default RemoveDetail;