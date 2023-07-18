import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './component/App';
import ListOfCharaters from './component/ListOfCharaters';
import Fav from './component/Fav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Details from './component/Details';
const Home = () => {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tree">Characters</Nav.Link>
            <Nav.Link href="/fav">Fav</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfCharaters />}/>
          <Route path="/tree" element={<App />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/details" element={<Details />} />
        
      </Routes>
    </BrowserRouter>
    </>

    
  )
}

export default Home