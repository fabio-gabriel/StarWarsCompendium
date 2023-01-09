import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PanelContext } from "../contexts/PanelContext";
import api from "../services/api";
import "../Styles/MainContent.scss";

export default function MainContent() {
  const Context = useContext(PanelContext);
  let mainData = [];
  let filmsList = [];

  for (const key in Context.data) {
    mainData.push(
      <li key={key}>
        {key}: {Context.data[key]}
      </li>
    );
  }

  //remove final useless elements/minimize api calls
  switch (useLocation().pathname.substring(1)) {
    case "people":
      mainData = mainData.slice(1, -8);
      break;
    case "planets":
      mainData = mainData.slice(1, -5);
    case "films":
      mainData = mainData.slice(1, -8);
    case "species":
      mainData = mainData.slice(1, -5);
      mainData.splice(7, 1);
    default:
      break;
  }

  return (
    <div className="main">
      <p className="title">{Context.data.name}</p>
      <ul>{mainData}</ul>
      <div className="movies">
        {Context.data.films ? Context.returnFilms() : null}
      </div>
    </div>
  );
}
