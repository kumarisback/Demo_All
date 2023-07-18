import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import axios from "axios";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../helper";
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <rect width="20" height="20" x="-10" onClick={toggleNode} />
    <text fill="black" strokeWidth="1" x="20">
      {nodeDatum.name}
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

function App() {
  const [dimensions, translate, containerRef] = useCenteredTree();

  const [data, setdata] = useState();
  const [flag, setFlag] = useState(false);
  const [player, setPlayer] = useState();
  const [tree, setTree] = useState();

  useEffect(() => {
    const fetch = async () => {
      let res = await axios.get("http://localhost:8080/api/charaters/houses");
      let temp = res.data;
      setdata(temp);
    };

    fetch();
  }, []);

  const getData = async (houseName) => {
    setFlag(false)
    let res = await axios.get(
      "http://localhost:8080/api/charaters/familytree/" + houseName
    );
    let temp = res.data;
    setPlayer(temp);

    player?.forEach((element, ind) => {
      if (ind > 0) return;


      let mytree = {
        name: "root",
        children: [],
      };

      // console.log(element.parents);

      let top = [];
      if (element.parents && element.parents.length > 0) {
        for (let temp in element.parents) {
          console.log(element.parents[temp]);
          // console.log;
          let objt = {
            name: element.parents[temp],
            children: [],
          };
          top.push(objt);
        }
      }

      let same = [];
      if (element.siblings && element.siblings.length > 0) {
        let objt = {
          name: element.actorName,

          children: [],
        };
        same.push(objt);
        for (let temp in element.siblings) {
          let objt = {
            name: element.siblings[temp],
            children: [],
          };
          same.push(objt);
        }
      } else {
        let objt = {
          name:
            element.actorName,
          children: [],
        };
        same.push(objt);
      }

      let bottom = [];

      if (element.parentOf && element.parentOf.length > 0) {
        for (let temp in element.parentOf) {
          let objt = {
            name: element.parentOf[temp],
            children: [],
          };
          bottom.push(objt);
        }
      }

      if (top.length > 0) {
        mytree.children = top;
      }

      if (same.length > 0) {
        if (mytree.children.length > 0) {
          mytree.children[0].children = same;
        } else {
          mytree.children = same;
        }
      }

      if (bottom.length > 0) {
        if (mytree.children.length > 0) {
          if (mytree.children.children && mytree.children.children.length > 0) {
            mytree.children.children[0].children = bottom;
          } else {
            mytree.children[0].children[0].children = bottom;
          }
        } else {
          mytree.children = bottom;
        }
      }

      setTree(mytree);
      
      setFlag(true)
    });
  };

  return (
    <div className="App">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select HouseName
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data?.map((per) => {
            return (
              <Dropdown.Item onClick={() => getData(per)}>{per}</Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

        {flag && tree!=null && (
      <div ref={containerRef} style={{ width: "1000px", height: "600px" }}>
          <Tree
            data={tree.children}
            dimensions={dimensions}
            translate={translate}
            renderCustomNodeElement={renderRectSvgNode}
            orientation="vertical"
          />
      </div>
        )}
    </div>
  );
}

export default App;
