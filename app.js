import axios from 'axios';

const users = (id) =>{
    return new Promise(async(resolve, reject)=>{
         const {data} = await axios ("https://jsonplaceholder.typicode.com/users/" +id)
         resolve(data)
     })
 }
 
 const post = (id) =>{
      return new Promise (async(resolve, reject) =>{
         const {data} = await axios ("https://jsonplaceholder.typicode.com/posts/" + id)
         resolve(data)
         
     })
 }   

 Promise.all([users(1),post(1)]).then(console.log).catch(console.log);

 export default users;

