
import  { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {Link, useParams} from 'react-router-dom'
import firebase from './Firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const Detail = () => {
  const [emps, setEmps] = useState([]);

  const handleClick = async () => {
    try {
      const response = await axios.get(
        'https://contact-62876-default-rtdb.firebaseio.com/reactdb.json'
      );
   
      setEmps(response.data)
      console.log(response.data)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);


  const handleRemove=async(id)=>{
  
    try{
      await axios.delete(`https://contact-62876-default-rtdb.firebaseio.com/reactdb/${id}.json`)
      setEmps((preEmps)=>{
        const updateEmps={...preEmps};
        delete updateEmps[id];
        return updateEmps;
      });
      console.log(`Item with ID ${id} removed.`);
    }
     
             catch(error) {
          console.log(error);
              };
      
    }
        
       
  
       
    


  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <h3 className='my-5 text-center fw-semibolder'>User's Information</h3>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
      <table className='table table-sm table-striped text-center table-bordered'>
        <thead className='table-dark'>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>email</th>
                <th>phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    
        {
    
      Object.keys(emps).map((id,index)=>{
        const emp=emps[id];
          
             return(
                <tr key={id}>
                    <td>{index+1}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td >
                      {/* <Link to={`/RemoveDetail/${id}`}>
                           <button type="button" className="btn btn-danger mx-2 my-2">Delete</button>
                        </Link> */}
                         <button type="button" className="btn1" onClick={()=>handleRemove(id)}><DeleteIcon/></button>

                          <Link to={`/UpdateDetail/${id}`}>
                            <button type="button" style={{color:"darkblue"}} className="btn1"><ModeEditIcon/></button>
                          </Link>
                          </td>
                </tr>
                
              );
             }
        )
            }
        </tbody>
      </table>
      </div>
      <div className='col-md-1'></div>
      </div>
      </div>
    </>
  );
};

export default Detail;
