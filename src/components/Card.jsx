import { GrFavorite } from 'react-icons/gr';
import {useGlobalContext} from "../context"


const Card = ({ meal }) => {

  const {selectMeal,addToFavorites}= useGlobalContext();


  const { idMeal, strMealThumb: image, strMeal: title, strArea: region, strCategory: category } = meal
  return (
    <div className="card m-2 col-5 col-sm-4 col-md-3 col-lg-3 text-center hover-shadow"
      id={idMeal}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-truncate">{region}</li>
          <li className="list-group-item text-truncate">{category}</li>
          <li className="list-group-item text-truncate">
            <GrFavorite size={"20px"} onClick={()=>addToFavorites(idMeal)}/></li>


        </ul>
        <button type="button" className=" btn btn-danger mt-2" onClick={()=>selectMeal(idMeal)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Recipe</button>

      </div>
      </div>
  )
}
export default Card