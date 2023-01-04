import { useContext } from "react";
import { PanelContext } from "../contexts/PanelContext";
import "../Styles/MainContent.scss";

export default function MainContent() {
  const Context = useContext(PanelContext);

  return (
    <div className="main">
      <p className="title">{Context.data.name}</p>
      <ul>
        <li>yep</li>
      </ul>
    </div>
  );
}
