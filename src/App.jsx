import Favorites from "./components/Favorites"
import Meals from "./components/Meals"
import Search from "./components/Search"
import Modal from "./components/Modal"
import {useGlobalContext} from "./context"


import './App.css'
import { useEffect,useState } from "react"


export default function App() {
const {showModal,favorites}=useGlobalContext();
const [isOpen, setIsOpen] = useState(favorites.length > 0);

useEffect(()=>{
setIsOpen(favorites.length>0)
},[favorites]);

  
  return (
    <main>
     <Search /> 
     <div className={`favorites-container ${isOpen > 0 ? "show" : ""}`}>
      {favorites.length>0 && <Favorites/> }
      </div>
      <Meals  />
      {showModal&&<Modal />}



    </main>
  )
}
