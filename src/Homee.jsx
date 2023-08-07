import axios from 'axios';
import {useEffect, useRef, useState } from 'react';
import {useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homee=()=>{
    const {id}= useParams();
    const forname= useRef();
    const[msg, setmsg]=useState();
    const[data, setData]= useState({
        name:"",
        email:"",
        addr:"",
        phone:"",
        dept:"",

    });

    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
        
    }
        const {name,email,phone,addr}= data;
        console.log(data);

        

        const handleClick= async(e)=>{
    
             e.preventDefault();
            
             
             if(!name || !email || !phone)
             {
                toast.error('Please fill all the input fields', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

             }
             else{   
                           
                try {
                    const response = await axios.post(
                        "https://contact-62876-default-rtdb.firebaseio.com/reactdb.json", // Add '.json' to the URL
                        {
                            name,
                            email,
                            phone, 
                        }
                    
                     );                
                    }
                catch(error){
                    console.error(error);
                }
                if(!setData(""))
                {  
                    setData({name:"",email:"",phone:""});
                    toast.success('Data has been saved', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    
                }

            }
        }
         
    

    return(
        <>     
             <div className='container-fluid'>
             <div className='row g-2'>
           
             <h1 className='text-center my-2 fs-3 bg-body-secondary fw-semibold'>Contact Us</h1>   
             {/* <p className='text-center'>{msg}</p> */}
                <form className="row g-3" onSubmit={handleClick}>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={data.name} name="name" placeholder='Enter name' ref={forname} onChange={handleChange}/>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 ">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={data.email} name="email" placeholder='Enter email' onChange={handleChange}/>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 ">
                        <label className="form-label">Phone No.</label>
                        <input type="text" className="form-control" value={data.phone} name="phone" placeholder='Enter phone no.' onChange={handleChange}/>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>

 
                    <div className="col-4 text-center"> 
                    <input type="submit" className="contact-btn " value={id?"Update":"Submit"}/>
                    <ToastContainer />
                    </div>
                    <div className="col-md-4"></div>

                 </form>
            </div> 
        </div>
        
         


        </>
    )

}


export default Homee;
