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
if(favorites.length>0){
  setIsOpen(true);
}
else{
setTimeout(()=>{
    setIsOpen(false);  

  },100)
}
},[favorites]);

  
  return (
    <main>
     <Search /> 
     <div className={`favorites-container ${isOpen ? "show" : "hide"}`}>
      <Favorites/> 
      </div>
      <Meals  />
      {showModal&&<Modal />}



    </main>
  )
}
