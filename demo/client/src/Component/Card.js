import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";

const Card = ({ id, collectionName, modelName, deleteCard,editCard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [editedCollectionName, setEditedCollectionName] = useState(collectionName);
  const [editedModelName, setEditedModelName] = useState(modelName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(()=>{
    if(localStorage.getItem("token")){
        setIsAuth(true);
        console.log("hi");

    }
  },[])

  const handleSave = () => {
    // Perform your save/update logic here, e.g., send data to API, update state, etc.
    // For this example, we will simply update the local state values
    setEditedCollectionName(editedCollectionName);
    setEditedModelName(editedModelName);

    setIsEditing(false);

    editCard(id,editedCollectionName,editedModelName);
  };

  return (
    <div className="container">
      <div className="imgBx">
        <div className="dashboard-container">
          <div className="model-wrapper">
            <DashBoard />
          </div>
        </div>
      </div>
      <div className="details">
       { isAuth && <div className="top-buttons">
          { isEditing ? (
            <>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className="delete-button" onClick={() => deleteCard(id)}>
            Delete
          </button>
        </div>}
        <div className="content">
          <h2>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedModelName}
                  onChange={(e) => setEditedModelName(e.target.value)}
                />
                <br />
                <span>
                  <input
                    type="text"
                    value={editedCollectionName}
                    onChange={(e) => setEditedCollectionName(e.target.value)}
                  />
                </span>
              </>
            ) : (
              <>
                {editedModelName} <br />
                <span>{editedCollectionName}</span>
              </>
            )}
          </h2>
          <p>
            Featuring soft foam cushioning and lightweight, woven fabric in the upper,
            the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight
            Breathability: Lightweight woven fabric with real or synthetic leather
            provides breathable support. Cushioned Comfort: A full-length foam midsole
            delivers lightweight, plush cushioning. Secure Traction: Exaggerated
            herringbone-pattern outsole offers traction on a variety of surfaces.
          </p>
          <h3>Cartoon Model</h3>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
