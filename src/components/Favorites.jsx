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
   <ul className="list-group list-group-horizontal bg-danger p-3 container d-flex" style={{"flexWrap":"wrap"}}>
{
  favorites.map((item)=>{
    const {idMeal, strMealThumb:image,strMeal:title}=item
    return <li key={idMeal} className="border-none d-flex flex-column list-group-item col-3  col-md-2 col-sm-6 bg-danger border border-0" >
      <span className="text-light text-wrap">{title}</span>
      <img src={image} className="img-thumbnail" alt="image" onClick={()=>{selectMeal(idMeal,true)}}/>
<MdDeleteForever style={{"color":"white"}} className="align-self-center mt-2" size={25} onClick={()=>{removeFromFavorites(idMeal)}}/>
           </li>
  })
}
    </ul>)}
    </div>
  )
}
export default Favorites