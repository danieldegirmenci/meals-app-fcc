import React, { useContext, useEffect, useState } from "react"
import axios from "axios"


const AppContext = React.createContext();

const randomMealUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const allMealsUrl= "https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({ children }) => {

const [meals,setMeals]=useState([]);
  const [loading,setLoading]=useState(false);

  
 const fetchData = async(url) => {
   setLoading(true)
      try {
       const {data}= await axios.get(url);
        if(data.meals){
       setMeals(data.meals);        
      }
      else{
        setMeals([])
      }
      }
      catch (error) {
        console.error(error.response)
      }
   setLoading(false)
    }
  
  useEffect(() => {
    fetchData(allMealsUrl)
  }, [])



  return <AppContext.Provider
    value={{meals, loading}}>
    {children}
  </AppContext.Provider>

}

export { AppContext, AppProvider }

export const useGlobalContext = () => {
  return useContext(AppContext)
}