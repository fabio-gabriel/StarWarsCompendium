import { useState, useEffect } from "react";
import api from "../services/api";
import "../Styles/Sidebar.scss";

export default function Sidebar() {
  const [list, setList] = useState({ count: 0, results: [] });

  useEffect(() => {
    api
      .get("/people")
      .then((response) => setList(response.data))
      .catch((err) => {
        console.error("The API couldn't be reached" + err);
      });
  }, []);

  return (
    <div>
      <p>Total ({list.count})</p>
      <ul>
        {list.results.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
