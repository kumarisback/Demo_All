import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './login.css';

export default function Login(props) {
  let history = useHistory();
    const [data, setData] = React.useState({
        email: '',
        password: ''});

        
        async function submit(e){
         e. preventDefault();
    
          let { email, password } = data;
      
          const data1 = {
            email,
            password
            
          };

          //  handleSubmitted();
          try {
            // const config = {
            //   headers: {
            //      "Content-Type": "application/json",
            //    }};
             await axios.post("/login",data1).then(
               item  => {
                props.changeSubmit(true);
                props.handleSubmit(item)
                alert("successfully login");
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
           <h1> Login Page</h1><br /><br />
    <div>
      email
      <input type="email" id="fields" className="form-control"
       name="email"
       placeholder="email"
       onChange={changeHandler} required="required"/>
    </div>
    <div style={{ marginTop: 10 }}>
      Password
      <input type="password" id="fields1" className="form-control"
       name="password"
       placeholder="password"
       onChange={changeHandler} required="required" minLength={6}/>
    </div>
    <button  className="button" type="submit" >Login</button>
        </form>
    )
}
