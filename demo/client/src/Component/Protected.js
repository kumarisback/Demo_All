import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Protected = () => {
    let nav=useNavigate();
    const [data,setData]=useState();
    useEffect(() => {
        const fetchData=async ()=>{
            if(localStorage.getItem("token")){
                try {
                
                    let res= await axios.get("http://localhost:4000/protected",{
                        headers: {
                          Authorization: localStorage.getItem("token") // Replace with your actual authorization token
                        }});
                        setData(await res.data)
                    
                } catch (error) {
                    alert(error)
                }
            }
            else{
                alert("login first");
                nav("/login")
            }
            
        }

        fetchData()
    }, [])
  return (
    <div>{data ? data.message +" Profile":  "Login first"}</div>
  )
}

export default Protected