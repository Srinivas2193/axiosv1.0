import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { instance } from '../Services/Instance';
import { getUserDetails } from '../Services/API/ApiData';

// Global variable for RESTAPI URL...

export const UserDetails= ()=>
{
    const [userData, setUserData] = useState([]);
 
    let getdata = ()=>
    {
        getUserDetails('/users').then( (result)=> setUserData(result.data) );
    }
    useEffect( ()=>{ 
        getdata()
    }, []);

 let DeleteHandler = (id)=>
 {
     if(window.confirm(`Delete the Selected Record ${id}`))
     {
         //delete the selcted record
         instance.delete(`/users/${id}`)

         // fetch the rest of the data..
         getdata();
     }
 }

            return(<>
            
            <div className='container p-5'>

               <h1> FETCH RESTAPI DATA FROM GLOBAL URL/ CLIENT </h1>

                <table className='table table-dark table-bordered my-5'>
                    
                      <thead className='table table-light'>
                          <tr>
                              <th>Sno</th>
                              <th>NAME</th>
                              <th>EMAIL</th>
                              <th>PHONE</th>
                              <th colSpan="3" className="text-center">ACTIONS</th>
                          </tr>
                      </thead>

            <tbody>
                    {
                        
                      userData.map( (res,i) =>{

                        return(<tr key={i}>
                            <td> {i + 1} </td>
                            <td> {res.name} </td>
                            <td> {res.email} </td>
                            <td> {res.phone} </td>
                            <td> <Link to={`/user-details/view/${res.id}`} className='btn btn-primary '><i className="bi bi-binoculars-fill"></i>&nbsp;View</Link> </td>
                            <td> <Link to={`/user-details/edit/${res.id}`} className='btn btn-warning'><i className="bi bi-pencil-square"></i>&nbsp;Edit</Link> </td>
                            <td> <button onClick={()=> DeleteHandler(res.id)} className='btn btn-danger'><i className="bi bi-trash3"></i>&nbsp;Delete</button> </td>
                        </tr>)
                      } )
                      
                    }
                 </tbody>   
                </table>
                
            </div>
            
            </>)

    }