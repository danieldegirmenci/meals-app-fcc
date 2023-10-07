import React, { useContext, useEffect, useState } from "react"
import axios from "axios"


const AppContext = React.createContext();

const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem("favorites"))
  }
  else {
    favorites = [];
  }
  return favorites
}


const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const initialFavorites = getFavoritesFromLocalStorage();
  const [favorites, setFavorites] = useState(initialFavorites);


  const addToFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal) ? true : false;
    if (!alreadyFavorite) {
      const updatedFavorites = [...favorites, meal];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log(favorites)
    }
    else {
      removeFromFavorites(idMeal);
    }

  }

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setIsOpen(false);
    setTimeout(() => {
      
      setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
      
    }, 500);
    
  }


  const [isOpen, setIsOpen] = useState(favorites.length > 0);

  useEffect(() => {
    if (favorites.length > 0) {
      setIsOpen(true);
    }
    else {
      setTimeout(() => {
        setIsOpen(false);

      }, 100)
    }
  }, [favorites]);



  const ingredients = [];
  const measurements = [];
  if (selectedMeal) {
    for (let i = 1; i < 20; i++) {
      let ingredientDataKey = `strIngredient${i}`;
      let ingredientValue = selectedMeal[ingredientDataKey];
      if (ingredientValue && ingredientValue.trim() !== "") {
        ingredients.push(ingredientValue);
      }
    }

    for (let i = 1; i < 20; i++) {
      let measurementDataKey = `strMeasure${i}`;
      let measurementValue = selectedMeal[measurementDataKey];
      if (measurementValue && measurementValue.trim() !== "") {
        measurements.push(measurementValue);
      }
    }

  }



  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favorites.find((meal) => meal.idMeal === idMeal);
      setSelectedMeal(meal);
      console.log(meal)
      setShowModal(true);

    }
    else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelectedMeal(meal)
    setShowModal(true);
  }


  const fetchRandomMeal = () => {
    fetchData(randomMealUrl);
  }

  const getAllMeals = () => {
    fetchData(allMealsUrl)
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
    catch (e) {
      console.error(e.response)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(allMealsUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return
    fetchData(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{ getAllMeals, meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, ingredients, measurements, favorites, addToFavorites, removeFromFavorites, isOpen }}>
      {children}
    </AppContext.Provider>)

}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
