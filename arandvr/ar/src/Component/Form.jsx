import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('http://localhost:3000/upload', formData)
      .then((response) => {
        console.log(response);
        if(response.status===200) alert(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        alert("Something went wrong");
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Form;
