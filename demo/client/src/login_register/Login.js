import React from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let nav=useNavigate();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });


  async function submit(e) {
    e.preventDefault();
    let { email, password } = data;
    
    // if(email.trim)
    if(password.trim().length<6){
      alert("Enter correct password")
    }
 
    const data1 = {
      email,
      password,
    };

    try {
      await axios
        .post("http://localhost:4000/login", data1)
        .then((item) => {
          console.log("item");
          localStorage.setItem("token",item.data.token);
          console.log("item");
          console.log("item");
          props.setAuth(true);
          console.log("item");
          nav("/profile");
          alert(item.data.message);
          return
          
        })
        .catch((err) => {
          console.log(err.response)
          if (err.response.data.message !== "") {
            alert(err.response.data.message);
          } else {
            alert(err.response.data.error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form className="form-container" onSubmit={submit}>
      <h1> Login Page</h1>
      <br />
      <br />
      <div>
        email
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          placeholder="email"
          onChange={changeHandler}
          required
        />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <input
          type="password"
          id="pass"
          className="form-control"
          name="password"
          placeholder="password"
          onChange={changeHandler}
          required
        />
      </div>
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
}
