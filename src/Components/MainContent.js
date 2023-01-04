import { useContext } from "react";
import { PanelContext } from "../contexts/PanelContext";
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
  //remove final useless elements
  mainData = mainData.slice(1, -8);

  return (
    <div className="main">
      <p className="title">{Context.data.name}</p>
      <ul>{mainData}</ul>
      <div className="movies">{Context.returnFilms()}</div>
    </div>
  );
}
