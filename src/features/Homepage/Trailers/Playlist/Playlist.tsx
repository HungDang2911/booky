import React from "react";
import "./Playlist.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Trailer {
  id: string;
  name: string;
}

interface Props {
  currentPlaying: string;
  trailersList: Trailer[];
  getNextTrailer: () => void;
  getPreviousTrailer: () => void;
  getTrailer: (trailerName: string) => void;
}

export const Playlist = (props: Props) => {
  return (
    <div className="container trailers__playlist position-relative">
      <button
        className="trailers__playlist__prev-btn"
        onClick={props.getPreviousTrailer}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <button
        className="trailers__playlist__next-btn"
        onClick={props.getNextTrailer}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div className="trailers__playlist__slide d-flex flex-column">
        {props.trailersList.map((trailer) => {
          return (
            <div
              className={`trailers__playlist__slide__item d-flex ${
                trailer.id === props.currentPlaying ? "selecting" : ""
              }`}
              onClick={() => {
                props.getTrailer(trailer.id);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
