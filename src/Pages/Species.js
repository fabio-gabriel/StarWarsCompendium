import vader from "../Images/Vader Image.png";
import "../Styles/Pages.scss";
import MainPanel from "../Components/MainPanel";

function Species() {
  return (
    <div>
      <div className="image">
        <img src={vader} />
      </div>
      <MainPanel request={"/species"} />
    </div>
  );
}

export default Species;
