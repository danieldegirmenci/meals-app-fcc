import Favorites from "./components/Favorites"
import Meals from "./components/Meals"
import Search from "./components/Search"
import Modal from "./components/Modal"
import {useGlobalContext} from "./context"


import './App.css'


export default function App() {
const {showModal,favorites}=useGlobalContext();

  
  return (
    <main>
     <Search /> 
      {favorites.length>0 && <Favorites/> }
      <Meals  />
      {showModal&&<Modal />}



    </main>
  )
}
