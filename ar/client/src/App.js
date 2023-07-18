import React, { useEffect, useState } from "react";
import Register from "./login_register/Register";
import Login from "./login_register/Login";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";

function App() {
  const [isAuth, setIsAuth] = useState();
  let nav= useNavigate();

  const setAuth = (flag) => {
    setIsAuth(flag);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link >
              <Link to="/list">List</Link>
            </Nav.Link>
          {!isAuth && (
            <Nav.Link >
              <Link to="/login">login</Link>
            </Nav.Link>
          )}
          {!isAuth && (
            <Nav.Link >
              <Link to="/signup">signup</Link>
            </Nav.Link>
          )}
          {isAuth && (
            <Nav.Link >
              <Link
                onClick={() => {
                  localStorage.removeItem("token");
                  alert("logging out");
                  setIsAuth(false);
                  nav("/")
                }}
              >
                Logout
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/signup" element={<Register> </Register>} />

        <Route path="/login" element={<Login setAuth={setAuth}> </Login>} />

        <Route path="/" element={<h1>Welcome :)</h1>} />
        <Route path="/list" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
