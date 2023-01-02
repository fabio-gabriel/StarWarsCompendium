import { useState, useEffect } from "react";
import api from "../services/api";
import "../Styles/Sidebar.scss";

export default function Sidebar() {
  const [list, setList] = useState({ count: 0, results: [] });

  async function getResults() {
    try {
      let location = "/people";
      let loop = true;
      let finalList = [];
      let finalCount = 0;

      do {
        const response = await api.get(location);

        if (response.data.results) {
          finalList = finalList.concat(response.data.results);
        }

        finalCount = response.data.count;
        location = response.data.next;
        loop = response.data.next != null;
      } while (loop);

      setList({
        count: finalCount,
        results: finalList,
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getResults();
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
