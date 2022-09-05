import React , {useState, useEffect} from 'react';
import { instance } from '../Services/Instance';

const PostsComments = () => {
    const [data,setData] = useState([]);

  useEffect(()=>{
    instance.get('/posts/1/comments')
    .then(res=> setData(res.data))
    .catch(err=> err)
  },[]);
  return (
    <div>
      <h1>Post data</h1>
      <br/>
      {
        data.map((res,i)=>{
          return (
            <ul key={i}>
            <li style={{listStyle:"none",fontSize:"22px",padding:"5px", margin:"5px",fontWeight:"bold"}}>{i+1} . {res.name}</li>
            <li style={{listStyle:"none",fontSize:"22px",padding:"5px", margin:"5px",fontWeight:"bold"}}> Email:  {res.email}</li>
            </ul>
          )
        })
      }
    </div>
  );
}

export default PostsComments