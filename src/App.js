import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Planets from "./Pages/Planets";
import Species from "./Pages/Species";
import Characters from "./Pages/Characters";
import Movies from "./Pages/Movies";
import HomeNavbar from "./Components/HomeNavbar";

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="/species" element={<Species />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
