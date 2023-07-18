import React, { useEffect, useState } from "react";
import axios from "axios";
import './product.css'


const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
        const fetchData =async () => {
            let res= await axios.get("http://localhost:4000/product");
            setData(res.data);
          };
          
          fetchData()
        } catch (error) {
          alert("something wrong with api")
        }
        
      }, []);
  return (
<div className="container">
    {data?.map((per)=>{
        return(
            <div className="card" key={per.id}>
            <img src={per.image} alt="Product Image" className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">{per.title}</h2>
              <p className="card-description">{per.description}</p>
              <p className="card-price">{per.price}</p>
              <p className="card-category">{per.category}</p>
              <div className="card-rating">
                <span className="card-rating-value">{per.rate}</span>
                <span className="card-rating-count">{per.count}</span>
              </div>
            </div>
              </div>
        )
    })}
 
    </div>
  );
};

export default Product;
