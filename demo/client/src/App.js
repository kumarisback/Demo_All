import React, { useEffect, useState } from "react";
import Register from "./login_register/Register";
import Login from "./login_register/Login";
import { Route, Link, Routes } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Component/Product";
import Protected from "./Component/Protected";
import DashBoard from "./Component/DashBoard";
import Home from "./Component/Home";

function App() {
  const [isAuth, setIsAuth] = useState();

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
          <Nav.Link >
            <Link to="/product">Product</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/profile">Protected (Profile)</Link>
          </Nav.Link>
          {isAuth && (
            <Nav.Link >
              <Link
                onClick={() => {
                  localStorage.removeItem("token");
                  alert("logging out");
                  setIsAuth(false);
                }}
                to="/"
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
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Protected />} />

        {/* <Route path="/" element={<h1>welcome :)</h1>} /> */}
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
