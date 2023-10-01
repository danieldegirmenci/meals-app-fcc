import { useGlobalContext } from "../context";
import {useState} from "react";
import {RxCross2} from "react-icons/rx";

const Favorites = () => {
const [showFavorites, setShowFavorites]=useState(false);

  const {favorites,removeFromFavorites,selectMeal}=useGlobalContext();

  const toggleFavorites=()=>{
    setShowFavorites(!showFavorites);
  }


  return (
    <div className="bg-danger text-light">
      <h3 className=" text-center p-3">
        <a className="text-decoration-none text-light fs-5 card-hover" onClick={toggleFavorites}  
      data-bs-toggle="collapse" href="#collapseExample"
       role="button" aria-expanded="false" aria-controls="collapseExample"
     >
      Favorites</a></h3>
  

   <ul 
   className={`collapse ${showFavorites ? 'show' : ''} list-group list-group-horizontal bg-danger p-3 container d-flex justify-content-center favs`}
   id="collapseExample" 
   style={{"flexWrap":"wrap"}}>
{
  favorites.map((meal)=>{
    const {idMeal, strMealThumb:image,strMeal:title}=meal
    return <li  key={idMeal} className="d-flex flex-column list-group-item col-3  col-md-2 col-sm-4 bg-danger border border-0 align-items-center" >
      <span className="text-light text-center text-wrap p-1">{title}</span>
     
     <img src={image} className="img-fluid rounded border border-0 icon"  alt="image" onClick={()=>{selectMeal(idMeal)}} data-bs-toggle="modal" data-bs-target="#modal" />
             <RxCross2  style={{"color":"white"}} className="align-self-center my-2 icon m-2" size={25} onClick={()=>{removeFromFavorites(idMeal)}}/>

           </li>
  })
}
    </ul>
    </div>
  )
}
export default Favorites