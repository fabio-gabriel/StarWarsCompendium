import { Link, useLocation } from "react-router-dom";
import "../Styles/HomeNavbar.scss";
import logo from "../Images/Star_Wars_Logo.png";

export default function HomeNavbar() {
  const location = useLocation();

  return (
    <header className="header-home">
      <div>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "selected" : null}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/characters"
              className={
                location.pathname === "/characters" ? "selected" : null
              }
            >
              CHARACTERS
            </Link>
          </li>
          <li>
            <Link
              to="/planets"
              className={location.pathname === "/planets" ? "selected" : null}
            >
              PLANETS
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className={location.pathname === "/movies" ? "selected" : null}
            >
              MOVIES
            </Link>
          </li>
          <li>
            <Link
              to="/species"
              className={location.pathname === "/species" ? "selected" : null}
            >
              SPECIES
            </Link>
          </li>
        </ul>
      </div>
      <img src={logo} />
    </header>
  );
}
