import { useGlobalContext } from "../context";
import {useState} from "react";
import {MdDeleteForever} from "react-icons/md";

const Favorites = () => {
const [showFavorites, setShowFavorites]=useState(false);

  const {favorites,removeFromFavorites,selectMeal}=useGlobalContext();

  const toggleFavorites=()=>{
    setShowFavorites(!showFavorites);
  }


  return (
    <div className="bg-danger text-light">
      <h3 className=" text-center p-3"><button className="btn text-light" onClick={toggleFavorites}>
      Favorites</button></h3>
  
   {showFavorites&&( 
   <ul className="list-group list-group-horizontal bg-danger p-3 container d-flex justify-content-center" style={{"flexWrap":"wrap"}}>
{
  favorites.map((meal)=>{
    const {idMeal, strMealThumb:image,strMeal:title}=meal
    return <li key={idMeal} className="d-flex flex-column list-group-item col-3  col-md-2 col-sm-4 bg-danger border border-0 align-items-center" >
      <span className="text-light text-center text-wrap p-1">{title}</span>
      <img src={image} className="img-thumbnail border border-0" alt="image" onClick={()=>{selectMeal(idMeal,true)}}/>
<MdDeleteForever style={{"color":"white"}} className="align-self-center my-2" size={25} onClick={()=>{removeFromFavorites(idMeal)}}/>
           </li>
  })
}
    </ul>)}
    </div>
  )
}
export default Favorites