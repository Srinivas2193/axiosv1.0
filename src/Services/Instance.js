import axios from 'axios';



export const instance = axios.create({
    // baseURL : 'https://jsonplaceholder.typicode.com',
    baseURL : `http://localhost:3005`,
    headers : {
      authorName : "Users Data"
    }
  })