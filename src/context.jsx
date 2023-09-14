import React, { useContext, useEffect, useState } from "react"
import axios from "axios"


const AppContext = React.createContext();

const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");





  const fetchRandomMeal = () => {
    fetchData(randomMealUrl);
  }

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data.meals) {
        console.log(data)
        setMeals(data.meals);
      }
      else {
        setMeals([]);
      }
    }
    catch(e) {
      console.error(e.response)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(allMealsUrl)
  }, []);

  useEffect(() => {
    if (!searchTerm) return
    fetchData(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{meals, loading, setSearchTerm, fetchRandomMeal}}>
      {children}
    </AppContext.Provider>)

}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
