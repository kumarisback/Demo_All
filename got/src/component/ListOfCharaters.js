import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ListOfCharaters = () => {
  const [player, setPlayer] = useState();
  let nav = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("http://localhost:8080/api/charaters");
      let temp = res.data;
      setPlayer(temp);
    };
    fetchData();
  }, []);

  const markFavCall =async(id)=>{
    await axios.post(`http://localhost:8080/api/charaters/${id}/favourite`);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {player?.map((charater) => {
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
              <Button
                variant="danger"
                onClick={() => {
                  let fav=localStorage.getItem("fav");
                  console.log(fav);
                  if(fav){
                    fav=JSON.parse(fav);
                    if(fav.includes(charater.id)){
                        alert("Removed as favirote");
                        fav=fav.filter((number) => number !== charater.id);
                        localStorage.setItem("fav",JSON.stringify(fav));
                        return
                    }
                    fav.push(charater.id);
                    console.log(typeof fav);
                    localStorage.setItem("fav",JSON.stringify(fav));
                    markFavCall(charater.id);
                    alert("Marked as favirote");
                  }
                  else{
                    localStorage.setItem("fav",JSON.stringify([charater.id]));
                  }

                }}
              >
                Fav
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ListOfCharaters;
