import React , {useState, useEffect} from 'react';
import { instance } from '../Services/Instance';

const Posts1 = () => {
    const [data,setData] = useState([]);

  useEffect(()=>{
    instance.get('/posts')
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
            <li style={{listStyle:"none",fontSize:"22px",padding:"5px", margin:"5px",fontWeight:"bold"}}>{i+1} . {res.title}</li>
          )
        })
      }
    </div>
  );
}

export default Posts1