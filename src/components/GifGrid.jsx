import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data:images , loading } = useFetchGifs(category);

  return (
    <>
      <h1 className="title animate__animated animate__fadeIn">{category}</h1>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
