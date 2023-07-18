import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import List from "./List";

const GLBViewer = () => {
  const [id, setId] = useState("64b62672c330fbe185c034ea");

  

  return (
    <div>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Model Id
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </InputGroup>
      <br />

      <div id="card">
        <model-viewer
          src={`http://localhost:3000/retrive/${id}`}
          ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
          poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
          alt="A 3D model"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
        ></model-viewer>
      </div>

      <List />
    </div>
  );
};

export default GLBViewer;
