import vader from "../Images/Vader Image.png";
import "../Styles/Pages.scss";
import Sidebar from "../components/SIdebar";
import MainContent from "../components/MainContent";

function Characters() {
  return (
    <div>
      <div className="image">
        <img src={vader} />
      </div>
      <div className="content">
        <Sidebar request={"people"} />
        <MainContent />
      </div>
    </div>
  );
}

export default Characters;
