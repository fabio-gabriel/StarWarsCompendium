import { createContext, useState } from "react";
import api from "../services/api";

export const PanelContext = createContext();

export default function PanelProvider(props) {
  const [data, setData] = useState({ name: "Please select a character" });

  const updateData = (type, id) => {
    console.log(type + "/" + id);
    api
      .get("/" + type + "/" + id)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("Error fetching the API: " + err);
      });
  };

  let state = {
    data: data,
  };

  return (
    <PanelContext.Provider
      value={{
        data: state.data,
        updateData,
      }}
    >
      {props.children}
    </PanelContext.Provider>
  );
}
