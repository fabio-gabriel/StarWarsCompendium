import { Link } from "react-router-dom";
import "../Styles/HomeNavbar.scss";

export default function HomeNavbar() {
  return (
    <header className="header-home">
      <ul>
        <li>
          <Link to="/"> Planets </Link>
        </li>
        <li>
          <Link to="/planets"> Characters </Link>
        </li>
        <li>
          <Link to="/planets"> Movies </Link>
        </li>
        <li>
          <Link to="/planets"> Species </Link>
        </li>
      </ul>
    </header>
  );
}
