import React, {  useEffect, useState } from "react";
import axios from 'axios';
import {
    Card,
  } from "react-bootstrap";
const Posts = () => {
  
 
 
  const [isAuth,setIsAuth] =useState(false)
 
  const [posts, setpost] = useState([]);
  
  
  useEffect( () => {
    const fetchData=async()=>{
      if(localStorage.getItem('user')){
        setIsAuth(true);
      }
      let response = await axios.get(' http://localhost:4000/add/appartment');
      if (!response || null) {
        
        return;
      }
      setpost(await response.data.data)
    }

    fetchData()
    // console.log( await response.data.data)
    
  },[]);


  const showinterest=async (id)=>{
     let  user=localStorage.getItem('user');
      // console.log(JSON.stringify(user))
      let res=await axios.post("/add/interest",{user,id});
      
      //   if(res.ok()){
        if(res.status === 200){
            alert("updated successfully")
        }
        else{
            alert("something went wrong please try after sometime")
        }
    //       alert
    //   }
  }

  return (
  
<>
      {
         posts.map((per)=>{
            return (
            
                <Card key={per._id} style={{ width: "18rem", margin:"10px" ,}}>
               
                <Card.Body>
                  <Card.Title>{per.owner}</Card.Title>
                  <Card.Text>
                  size : {per.size}
            <br />
            rooms : {per.rooms}
            <br />
            address : {per.address}
            <br />
            rent : {per.rent}
            <br />
            security deposit Amount : {per.security}
            <br />
                  </Card.Text>
                  {isAuth && <button onClick={()=>showinterest(per._id )}>interested</button>}
                  
                  </Card.Body>
              </Card>
            
            
            
            
            )
        })
      }
   </>
  );
};

export default Posts;