import { Link } from "react-router-dom";
import "../Styles/HomeNavbar.scss";

export default function HomeNavbar() {
  return (
    <header className="header-home">
      <ul>
        <li>
          <Link to="/planets"> PLANETS </Link>
        </li>
        <li>
          <Link to="/characters"> CHARACTERS </Link>
        </li>
        <li>
          <Link to="/movies"> MOVIES </Link>
        </li>
        <li>
          <Link to="/species"> SPECIES </Link>
        </li>
      </ul>
    </header>
  );
}
