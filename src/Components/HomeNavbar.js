import { Link, useLocation } from "react-router-dom";
import "../Styles/HomeNavbar.scss";
import logo from "../Images/Star_Wars_Logo.png";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function HomeNavbar() {
  const location = useLocation();

  return (
    <header className="header-home">
      <div>
        <ul>
          <li>
            <Link
              onClick={scrollToTop}
              to="/"
              className={location.pathname === "/" ? "selected" : null}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
              to="/people"
              className={location.pathname === "/people" ? "selected" : null}
            >
              CHARACTERS
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
              to="/planets"
              className={location.pathname === "/planets" ? "selected" : null}
            >
              PLANETS
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
              to="/films"
              className={location.pathname === "/films" ? "selected" : null}
            >
              MOVIES
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
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
