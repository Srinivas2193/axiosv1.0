import React, { useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { instance } from '../Services/Instance';

// Global variable
  // var idno;

export const ViewData = (props)=>
{
    var [userData, setuserData] = useState({
        id:'',
        name:'',
        email:'',
        phone:''
    });

    let {idno} = useParams(); // get parameter value 

      let {id, name, email, phone } = userData // destructuring ...

    useEffect( ()=> {

        instance.get(`users/${idno}`).then( (result)=>setuserData(result.data) );
    } , [])
        


        return(<><br/><br/>

            <Link to="/user-details" className='btn btn-primary'>  <i className="text-dark bi bi-arrow-left-circle-fill"></i> Go Back </Link> &nbsp;
        <div className='container p-5'>
        
          <br/>

           <h1> View Component </h1>
           <p > {idno} Record data displayed</p>

           <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{phone}</li>



                {/* <li>{this.state.id}</li>
                <li>{this.state.name}</li>
                <li>{this.state.email}</li>
                <li>{this.state.phone}</li> */}
           </ul>
        </div>
        
        </>)
    }

    
