import React,{useState,useEffect} from 'react'
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  let fav=localStorage.getItem("fav");
  fav=JSON.parse(fav);
  let nav=useNavigate();
  const [player, setPlayer] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("http://localhost:8080/api/charaters");
      let temp = res.data;
      setPlayer(temp);
    };
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
    {player?.map((charater) => {
      if(fav.includes(charater.id))
      return (
        <Card style={{ width: "200px" }}>
          <Card.Img
            style={{ width: "100%", height: "150px" }}
            variant="top"
            src={charater.characterImageFull}
            alt="No image found"
          />
          <Card.Body>
            <Card.Title>{charater.actorName}</Card.Title>
            <Card.Text>Character Name : {charater.characterName}</Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                nav("/details", {
                  state: charater,
                });
              }}
            >
              Details
            </Button>
            
          </Card.Body>
        </Card>
      );
    })}
  </div>
  )
}

export default Fav