import axios from "axios";
import { useEffect,useState } from "react";
import {useParams} from "react-router-dom"
import Detail from "./Detail"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDetail=()=>{
    const {id}= useParams();
    const[data, setData]= useState({
        name:"",
        email:"",
        phone:"",

    });
    const[msg, setmsg]= useState();
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        
    }


    const handleUpdate=async(e)=>{
        e.preventDefault();
        
          axios.put(`https://contact-62876-default-rtdb.firebaseio.com/reactdb/${id}.json`,data )
       
          .catch(error => {
            console.log(error);
          }); 
          if(!setData())
          {
            toast.success('Data has been updated', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              
          setData({name:"",email:"", phone:""});
        
          
            
          }   
    }

    
    useEffect(() => {
        if (id) {
          const fetchData = async () => {
            try {
              const response = await axios.get(
                `https://contact-62876-default-rtdb.firebaseio.com/reactdb/${id}.json`
              );
              setData(response.data);
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
        }
      }, [id]);

    return(
        
            <>
             <div className='container-fluid'>
             <div className='row g-2'>
             
             <h1 className='text-center my-2 fs-3 bg-body-secondary fw-semibold'>Contact Us</h1>   
                <form className="row g-3" action="" method="POST">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={data.name} name="name" placeholder='Enter name' onChange={handleChange}/>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={data.email} name="email" placeholder='Enter email' onChange={handleChange}/>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <label className="form-label">Phone No.</label>
                        <input type="text" className="form-control" value={data.phone} name="phone" placeholder='Enter phone no.' onChange={handleChange}/>
                    </div>
                    

                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-4 text-center"> 
                    <button type="submit" className="btn btn-primary " aria-title="update" onClick={handleUpdate}>Update</button>
                    <ToastContainer />
                    </div>
                    <div className="col-md-4"></div>

                 </form>
</div> 
</div> 

    </>
   )     
}
export default UpdateDetail;