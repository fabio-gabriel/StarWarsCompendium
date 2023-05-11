import { useState, useEffect, useContext, memo } from "react";
import { useLocation } from "react-router-dom";
import { PanelContext } from "../contexts/PanelContext";
import api from "../services/api";
import "../Styles/Sidebar.scss";

function Sidebar({ request }) {
  const Context = useContext(PanelContext);
  let location = useLocation().pathname;
  location = location.substring(1);

  const [list, setList] = useState({ count: 0, results: [] });

  async function getResults() {
    try {
      let location = request;
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
      alert(error);
    }
  }
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <p>Total ({list.count})</p>
      <ul>
        {list.results.map((item, index) => {
          return (
            <li
              onClick={() => Context.updateData(location, index + 1)}
              key={item.name}
            >
              {item.name ? item.name : item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(Sidebar);
