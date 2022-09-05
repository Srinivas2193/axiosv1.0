import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { instance } from '../Services/Instance';


 
export const DataEdit = ()=> {
    const navigate = useNavigate();

  let [userData, setuserData] = useState({

        name:'',
        email:'',
        phone:''
      });

      let {idno} = useParams();  // get parameter values with destructuring..
  
      useEffect( ()=>
        {
            instance.get(`users/${idno}`).then((result)=> setuserData(result.data));
        },[]);


     let formDataHandling = (e)=>
        {
            setuserData({...userData, [e.target.name] : e.target.value});
        }

        let submitHandler = (e)=>  // firstname
        {
            e.preventDefault(); // to prevent the page refreshing...

            var Formdata = {

            name : `${userData.name}`,
            email: `${userData.email}`,
            phone: `${userData.phone}`

            }
        

            // for redirection to other page after submission..
            instance.put(`users/${idno}`, Formdata).then( ()=> {
                window.alert(".....Update Successful.....");
                navigate('/user-details'); } )
                
        }

   
   // destructuring 
     var { name, email, phone } = userData;
    return (<><br/>
        &nbsp;&nbsp;<Link to="/user-details" className='btn btn-primary'>  <i className="text-dark bi bi-arrow-left-circle-fill"></i> Go Back </Link> &nbsp;

        <h1 className='text-primary py-3 text-center'>Update User Details</h1>
    <div className='container p-5'>
    <form onSubmit={submitHandler.bind(this)}>
      <div className="mb-3">
        {/* <label className="form-label">Id</label>
        <input type="number" className="form-control" value={id} /><br/> */}
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={name} onChange={formDataHandling.bind(this)} name="name" /><br/>
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={formDataHandling.bind(this)} name="email" /><br/>
        <label className="form-label">Phone</label>
        <input type="text" className="form-control" value={phone} onChange={formDataHandling.bind(this)} name="phone" /><br/>
     
        <button type="submit" className="btn btn-warning mb-3">UPDATE</button>
      </div>
      </form>
      </div>
      </>)
  }
 