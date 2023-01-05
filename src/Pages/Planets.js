import vader from "../Images/Vader Image.png";
import "../Styles/Pages.scss";
import MainPanel from "../Components/MainPanel";

function Planets() {
  return (
    <div>
      <div className="image">
        <img src={vader} />
      </div>
      <MainPanel request={"/planets"}/>
    </div>
  );
}

export default Planets;
