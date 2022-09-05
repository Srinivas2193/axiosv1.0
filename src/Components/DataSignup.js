import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { instance } from '../Services/Instance';


export const DataSignup =  ()=> {
    const navigate = useNavigate();

   let [userData,setuserData]=useState({

        name:'',
        email:'',
        phone:''
      })

      var {name, email, phone} = userData;

      let formDataHandling = (e)=>
      {
          setuserData({...userData, [e.target.name] : e.target.value })
      }
  


  let submitHandler = (e)=>  // firstname
  {
    e.preventDefault(); // to prevent the page refreshing...

    var Formdata = {
 
       name: `${userData.name}`,
       email: `${userData.email}`,
       phone: `${userData.phone}`,
    }

    instance.post(`/users`, Formdata).then( ()=> {
        window.alert(".....Account Created.....");
        navigate('/user-details'); 
    } );

  }
    return (<><br/><br/>
      &nbsp;&nbsp;<Link to="/user-details" className='btn btn-primary'>  <i className="text-dark bi bi-arrow-left-circle-fill"></i> Go Back </Link> &nbsp;
     
      <div className='container'>
          <h3 className='text-primary text-left p-3' style={{marginLeft:"100px"}}>User Registration Form</h3>
        <div className="mb-3 w-50 mx-auto my-5">
      
       <form onSubmit={submitHandler.bind(this)}>
      <input className='form form-control'  placeholder="Username"  style={ {width:'80%'} } value={name} onChange={formDataHandling.bind(this)} name="name"  />
      <br/><br/>
      <input className='form form-control'  placeholder="Email Id"  style={ {width:'80%'} } value={email} onChange={formDataHandling.bind(this)} name="email"  />
      <br/> <br/>
      <input className='form form-control'  placeholder="Phone"  style={ {width:'80%'} } value={phone} onChange={formDataHandling.bind(this)} name="phone"  />
      <br/> <br/>
     
      <button style={{marginLeft:"120px"}} type='submit'  className='btn btn-primary p-2' >
      Create Account
      </button>
      {/* <br/><br/> <span className='text-primary' style={{marginLeft:"70px"}}>You May Signup using Google Account</span><br/><br/> */}
    </form>
      
       
    </div>
      </div>

    </>)
  }
