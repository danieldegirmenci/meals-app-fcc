import React, { useContext, createContext } from "react"

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

  return <AppContext.Provider
    value={"sharedData"}>
    {children}
  </AppContext.Provider>

}

export { AppContext, AppProvider }

