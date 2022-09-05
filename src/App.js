import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import Posts1 from './Components/Posts1';
import PostsComments from './Components/PostsComments';
import { DataEdit } from './Components/DataEdit';
import { DataSignup } from './Components/DataSignup';
import { ViewData } from './Components/ViewData';
import { UserDetails } from './Components/UserDetails';

function App() {

  return(
    <>
<ul style={{marginLeft:"5px"}}>
{/* <li><NavLink to='/posts1' style={{fontWeight:"bold", fontSize:"23px"}}>Posts1</NavLink> </li>
    <li><NavLink to='/posts-comments' style={{fontWeight:"bold", fontSize:"23px"}}>Posts-Comments</NavLink></li> */}
    <li><NavLink to='user-details' style={{fontWeight:"bold", fontSize:"23px"}} > User Details</NavLink></li>
    <li><NavLink to='data-signup' style={{fontWeight:"bold", fontSize:"23px"}} > User signup</NavLink></li>

</ul>

    <Routes>
      <Route path='/posts1' element={<Posts1 />} />
      <Route path='/posts-comments' element={<PostsComments />} />
      <Route exact path="/user-details" element={<UserDetails />} />

    {/* <hooksView /> with router parameter  */}
    <Route  path="/user-details/view/:idno" element= {<ViewData />} />

    {/* <hooksEdit /> with router parameter  */}
    <Route  path="/user-details/edit/:idno" element= {<DataEdit />} />

    {/* <hooks Signup /> with router parameter  */}
    <Route exact path="/data-signup" element= {<DataSignup />} />
      </Routes>
    </>
  )
  
  
}

export default App;
