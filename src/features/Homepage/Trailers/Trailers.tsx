import React, { useEffect, useState } from "react";
import { Playlist } from "./Playlist/Playlist";
import "./Trailers.scss";

interface Props {}

export const Trailers = (props: Props) => {
  const [trailersList, setTrailerList] = useState([
    {
      id: "TcMBFSGVi1c",
      name: "Avengers: Endgame",
    },
    {
      id: "6ZfuNTqbHE8",
      name: "Avengers: Infinity War",
    },
    {
      id: "tmeOjFno6Do",
      name: "Avengers: Age of Ultron",
    },
  ]);
  const [currentPlaying, setCurrentPlaying] = useState("TcMBFSGVi1c");

  useEffect(() => {}, []);

  const getNextTrailer = () => {};

  const getPreviousTrailer = () => {};

  const getTrailer = (trailerId: string) => {
    setCurrentPlaying(trailerId);
  };

  return (
    <div className="container trailers">
      <h2>In theater</h2>
      <div className="d-flex">
        <iframe
          height="441px"
          title="current-playing"
          src={`https://www.youtube.com/embed/${currentPlaying}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="trailers__current-playing"
        />
        <Playlist
          currentPlaying={currentPlaying}
          trailersList={trailersList}
          getNextTrailer={getNextTrailer}
          getPreviousTrailer={getPreviousTrailer}
          getTrailer={getTrailer}
        />
      </div>
    </div>
  );
};
