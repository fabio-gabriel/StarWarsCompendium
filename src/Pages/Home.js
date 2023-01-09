import "../Styles/Home.scss";
import logo from "../Images/Star_Wars_Logo.png";
import tutorial1 from "../Images/tutorial1.png";
import tutorial2 from "../Images/tutorial2.png";

function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <img src={logo} />
      </div>
      <div className="welcome">
        <p className="titleSection">WELCOME TO THE STAR WARS COMPENDIUM</p>
        <div>
          <div className="card">
            <img src={tutorial1} />
            <p className="titleCard">PICK A CATEGORY</p>
            <p className="cardText">
              Choose a category of information from the compendium from the list on top, there are 4 categories available, being Characters, Planets, Movies and Species.
            </p>
          </div>
          <div className="card">
            <img src={tutorial2} />
            <p className="titleCard">CHOOSE AN ITEM</p>
            <p className="cardText">
              The sidebar has a list of all items available from the host API in the given category. Choose one and the information will appear in the right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
