import React, { useContext, useEffect, useState } from "react"
import axios from "axios"


const AppContext = React.createContext();

const randomMealUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const allMealsUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({ children }) => {

const [meals,setMeals]=useState([]);
  
 const fetchData = async(url) => {
      try {
       const {data}= await axios.get(url);
       setMeals(data.meals);        
      }
      catch (error) {
        console.error(error.response)
      }
    }
  
  useEffect(() => {
    fetchData(allMealsUrl)
  }, [])



  return <AppContext.Provider
    value={{meals}}>
    {children}
  </AppContext.Provider>

}

export { AppContext, AppProvider }

export const useGlobalContext = () => {
  return useContext(AppContext)
}