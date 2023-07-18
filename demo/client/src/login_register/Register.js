import React from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  let nav=useNavigate();
  const [person, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  async function submit(e) {
    e.preventDefault();

    let { name, email, password } = person;

    const data1 = {
      name,
      email,
      password,
    };

    if(password.trim().length<6 || name.trim().length<3 || email.trim().length<0){
      alert("Give us valid input");
      return
    }
    try {
      await axios
        .post("http://localhost:4000/signup", data1)
        .then((item) => {
          console.log(item);
          alert("successfully register");
          nav("/login");
        })
        .catch((err) => {
          if (err.response.data.error) {
            alert(err.response.data.error);
          } else {
            alert(err.response.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  const changeHandler = (e) => {
    setData({ ...person, [e.target.name]: e.target.value });
  };
  return (
    <form className="form-container" onSubmit={submit}>
      <h1> Register user</h1>
      <br />
      <br />
      <div>
        Name
        <br />
        <input
          type="text"
          id="name"
          className="form-control"
          name="name"
          placeholder="Name"
          onChange={changeHandler}
          required
        />
      </div>
      <div>
        Email
        <br />
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          placeholder="Enter a valid email id"
          onChange={changeHandler}
          required
        />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <br />
        <input
          type="password"
          id="pass"
          className="form-control"
          name="password"
          placeholder="password with minimun length 6"
          onChange={changeHandler}
          required
        />
      </div>
      <button className="button" type="submit">
        signup
      </button>
    </form>
  );
}
