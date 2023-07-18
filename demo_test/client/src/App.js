import React,{useState,useEffect} from 'react'
import Register from './login_register/register';
import Login from './login_register/login';
import Apartment from './post/Apartment'
import Posts from './post/Posts'
import Customer from './post/Customer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";


function App() {

  const [isAuth,setIsAuth] =useState(false)
 const [ user ,setUserData]=useState({});
const changeSubmit=(flag )=>{
setIsAuth(flag);
console.log(flag);
}
const  handleSubmit=(user )=>{
   setUserData(user.data);
  console.log(user);
  localStorage.setItem('username',user.data.email );
  localStorage.setItem('user', user.data._id);
  }

  const  logoutHandle=()=>{
    localStorage.removeItem('user') 
    
   setIsAuth(false)
  }
  useEffect(()=>{
    if(localStorage.getItem('user')){
      setIsAuth(true);
    }
  },[])


  return (
    <Router>
      
      <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      {!isAuth  ? <Nav.Link ><Link to="/login">Log in</Link></Nav.Link> :<button onClick={logoutHandle}>{isAuth &&"Logout"}</button> }
      {!isAuth  ?<Nav.Link ><Link to="/signup">Sign up</Link></Nav.Link>:""}
      {isAuth  ?<Nav.Link ><Link to="/add">Upload </Link></Nav.Link>:""}
      {isAuth  ?<Nav.Link ><Link to="/list">Customer List </Link></Nav.Link>:""}
      <Nav.Link ><Link to="/posts">Posts</Link></Nav.Link>
    </Nav>
    
  </Navbar>
     
      <Switch className="screen">
        
        <Route path="/signup">
       <Register> </Register>
        </Route>
        <Route path="/login" >
       <Login changeSubmit={changeSubmit} handleSubmit={handleSubmit}/>
        </Route>
        <Route path="/posts">
       <Posts></Posts>
        </Route>
        <Route path="/add">
       <Apartment></Apartment>
        </Route>
      
        <Route path="/list">
      <Customer></Customer>
       
        </Route>
        <Route path="/">
        <h1>welcome :)</h1>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
