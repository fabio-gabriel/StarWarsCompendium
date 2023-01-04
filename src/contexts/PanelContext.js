import { createContext, useState } from "react";
import api from "../services/api";
import * as posters from "../Images/postersIndex";
import "../Styles/film.scss";

export const PanelContext = createContext();

export default function PanelProvider(props) {
  const [data, setData] = useState({
    name: "Please select a character",
    films: [],
  });

  const updateData = (type, id) => {
    api
      .get("/" + type + "/" + id)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("Error fetching the API: " + err);
      });
  };

  const returnFilms = () => {
    let filmList = [];
    let poster;

    for (const i of data.films) {
      switch (i.slice(-2, -1)) {
        case "1":
          poster = posters.sw1;
          break;
        case "2":
          poster = posters.sw2;
          break;
        case "3":
          poster = posters.sw3;
          break;
        case "4":
          poster = posters.sw4;
          break;
        case "5":
          poster = posters.sw5;
          break;
        case "6":
          poster = posters.sw6;
          break;
        default:
          break;
      }

      filmList.push(
        <div className="moviePoster" key={i}>
          <img src={poster} />
        </div>
      );
    }

    if (data.films.length !== 0) {
      filmList.unshift(<p className="subtitle">Movies</p>);
    }

    return filmList;
  };

  let state = {
    data: data,
  };

  return (
    <PanelContext.Provider
      value={{
        data: state.data,
        updateData,
        returnFilms,
      }}
    >
      {props.children}
    </PanelContext.Provider>
  );
}
