import vader from "../Images/Vader Image.png";
import "../Styles/Pages.scss";
import MainPanel from "../Components/MainPanel";

function Characters() {
  return (
    <div>
      <div className="image">
        <img src={vader} />
      </div>
      <MainPanel />
    </div>
  );
}

export default Characters;
