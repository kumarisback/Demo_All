import React, { useState } from "react";
import Card from "./Card";

const Home = () => {
  let data = [
    {
      id: 1,
      collectionName: "Trending Collection",
      modelName: "Nakli Srk",
    },
    {
      id: 2,
      collectionName: "Seasone Collection",
      modelName: "Doremon",
    },
  ];

  const [collectionsData, setCollectionsData] = useState(data);

  const deleteCard = (id) => {
    let temp = collectionsData;
    temp = temp.filter((per) => per.id !== id);
    setCollectionsData(temp);
  };

  const editCard = (id, cn, mn) => {
    let temp = collectionsData;
    temp.forEach((per) => {
      if (per.id === id) {
        per.collectionName = cn;
        per.modelName = mn;
      }
    });
    setCollectionsData(temp);
  };

  return (
    <>
      {collectionsData.map((datas) => {
        return (
          <Card
            key={datas.id}
            id={datas.id}
            collectionName={datas.collectionName}
            modelName={datas.modelName}
            deleteCard={deleteCard}
            editCard={editCard}
          />
        );
      })}
    </>
  );
};

export default Home;
