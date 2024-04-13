import React, { useState } from "react";
import { useContext } from "react";

export const MainContext = React.createContext([{}, () => {}]);
export const useMainContextProvider = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const saludo = () => {
    console.log("Hola");
  };

  const [isVisible, setIsVisible] = useState();
  const mostrar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <MainContext.Provider
      value={{
        isVisible,
        setIsVisible,
        mostrar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
