import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Card,
  Button,
  Spinner,
  CloseButton,
  NavDropdown,
  Form,
  FormControl,
  Modal,
  Dropdown,
} from "react-bootstrap";


const Customer = () => {
  const [lists, setList] = useState([]);

  useEffect(async () => {
    let user = localStorage.getItem("username");
    // console.log(  user)
    const params = new URLSearchParams({ email: user });
    let response = await axios.get(`/add/list?${params}`);
    if (!response || null) {
      return;
    }
    setList(await response.data);
    console.log(  lists)
  }, []);

  return (
    <>
      {lists.length >= 0 &&
        lists.map((per) => {
          return (
            <Card key={per._id} style={{ width: "18rem", margin: "10px" }}>
              <Card.Body>
                <Card.Title>{per.name}</Card.Title>
                <Card.Text>
                  size : {per.email}
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};

export default Customer;
