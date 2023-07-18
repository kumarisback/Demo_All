import { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

const List = () => {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const fetchIDs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all');
        console.log(response.data);
        setIds(response.data);
      } catch (error) {
        console.error('Error fetching IDs:', error);
      }
    };

    fetchIDs();
  }, []);

  return (
    <div>
      <h2>List of IDs:</h2>
      <ListGroup>
        {ids.map((product,i) => (
          <ListGroup.Item key={i}>{product._id}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
