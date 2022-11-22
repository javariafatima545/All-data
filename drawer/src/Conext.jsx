import React, { createContext, useEffect, useState } from "react";
// let init = {
//   color: "",
// };
export const AppContext = createContext();
export const ConextProvider = (props) => {
  const [state, setState] = useState();
  useEffect(() => {
    setState({ ...state, color: "green" });
  }, []);

  const [color, setColor] = useState("green");
  return (
    <AppContext.Provider value={{ color }}>
      {props.children}
    </AppContext.Provider>
  );
};
