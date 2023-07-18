import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Apartment() {
    let history = useHistory();
    const [data, setData] = React.useState({
        owner: "",
          size: "",
          rooms: "",
          address: "",
          rent: "",
          security: ""});

       
        async function submit(e){
         e. preventDefault();
            console.log(data);
          let { 
          size,
          rooms,
          address,
          rent,
          security } = data;
      
          let owner=localStorage.getItem('username')
          const post = { owner,
                size,
                rooms,
                address,
                rent,
                security };

          try {
             await axios.post("/add",post).then(
               item  => {
                
                alert("uploaded successfully");
                history.push("/posts")

                }).catch(  err =>{
              
              if(err.response.data.message!=''){
                alert(err.response.data.message);
              }
              else{
                alert(err.response.data.error);
              }
             });
          }
          catch(error) {
            console.log(error);
          }
        }
        const changeHandler = e => {
          setData({...data, [e.target.name]: e.target.value});
       }

       
    return (
        <form className="formdata" onSubmit={submit}>
           <h1> Apparement Details</h1><br /><br />
    {/* <div>
      owner
      <input type="text"  className="form-control"
       name="owner"
       placeholder="owner"
       onChange={changeHandler} required="required"/>
    </div> */}
    <div>
      size
      <input type="text"  className="form-control"
       name="size"
       placeholder="size"
       onChange={changeHandler} required="required"/>
    </div>
    <div>
      rooms
      <input type="number"  className="form-control"
       name="rooms"
       placeholder="rooms"
       onChange={changeHandler} required="required"/>
    </div>
    <div>
      address
      <input type="text"  className="form-control"
       name="address"
       placeholder="address"
       onChange={changeHandler} required="required"/>
    </div>
    <div>
      rent
      <input type="number"  className="form-control"
       name="rent"
       placeholder="rent"
       onChange={changeHandler} required="required"/>
    </div>
    <div>
      security
      <input type="number"  className="form-control"
       name="security"
       placeholder="security"
       onChange={changeHandler} required="required"/>
    </div>
    
    <button  className="button" type="submit" >Submit</button>
        </form>
    )
}
