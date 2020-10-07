import React, { useEffect, useState } from "react";
import { TrailersSlider } from "./MovieSlider/TrailersSlider";
import "./Trailers.scss";

interface Props {}

export const Trailers = (props: Props) => {
  const [trailersList, setTrailerList] = useState([
    {
      name: "Avengers: Endgame",
      link:
        "https://www.youtube.com/watch?v=TcMBFSGVi1c&t=3s&ab_channel=MarvelEntertainment",
    },
    {
      name: "Avengers: Infinity War",
      link:
        "https://www.youtube.com/watch?v=6ZfuNTqbHE8&t=16s&ab_channel=MarvelEntertainment",
    },
    {
      name: "Avengers: Age of Ultron",
      link:
        "https://www.youtube.com/watch?v=tmeOjFno6Do&t=34s&ab_channel=MarvelEntertainment",
    },
  ]);
  const [currentPlaying, setCurrentPlaying] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="container in-theater">
      <h2>In theater</h2>
      <div className="flex-column flex-lg-row">
        <iframe
          title="current-playing"
          src="https://www.youtube.com/embed/QwievZ1Tx-8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <TrailersSlider
          currentPlaying={currentPlaying}
          trailersList={trailersList}
        />
      </div>
    </div>
  );
};
