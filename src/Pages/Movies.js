import vader from "../Images/Vader Image.png";
import "../Styles/Pages.scss";
import MainPanel from "../Components/MainPanel";

function Movies() {
  return (
    <div>
      <div className="image">
        <img src={vader} />
      </div>
      <MainPanel request={"/films"} />
    </div>
  );
}

export default Movies;
