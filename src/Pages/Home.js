import "../Styles/Home.scss";
import logo from "../Images/Star_Wars_Logo.png";

function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <img src={logo} />
      </div>
      <h1>Just something</h1>
    </div>
  );
}

export default Home;
