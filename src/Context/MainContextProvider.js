import React, { useState } from "react";
import { useContext } from "react";

export const MainContext = React.createContext([{}, () => { }]);
//Hook personalizado, lo cree yo, para obtener las variables desde el contexto en otros componentes (ver navBar).
// Fijate en app.Envolver app con el mainContextProvider 

export const useMainContextProvider = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {


  const [isVisible, setIsVisible] = useState();
  const mostrar = () => {
    setIsVisible(!isVisible);
  };
  const ejemplo = () => {
    console.log("Hola")
  };
//Pasar las variables por value
  return (
    <MainContext.Provider
      value={{
        isVisible,
        setIsVisible,
        mostrar,
        ejemplo
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
