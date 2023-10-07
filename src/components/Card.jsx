import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useGlobalContext } from "../context"


const Card = ({ meal }) => {

  const { selectMeal, addToFavorites, favorites } = useGlobalContext();



  const { idMeal, strMealThumb: image, strMeal: title, strArea: region, strCategory: category } = meal
  const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal) ? true : false;
  return (
    <div className="card card-hover m-2 col-5 col-sm-4 col-md-3 col-lg-3 text-center hover-shadow"
      id={idMeal}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-truncate">{region}</li>
          <li className="list-group-item text-truncate">{category}</li>
          <li className="list-group-item text-truncate">
            {alreadyFavorite ?
              <MdFavorite className="icon" size={"20px"}
                onClick={() => addToFavorites(idMeal)}
                color="#DC3545" /> : <MdFavoriteBorder className="icon" size={"20px"}
                  onClick={() => addToFavorites(idMeal)}
                  color="#DC3545" />}


          </li>


        </ul>
        <button type="button" className=" btn btn-danger mt-2" onClick={() => selectMeal(idMeal)} data-bs-toggle="modal" data-bs-target="#modal" >Recipe</button>

      </div>
    </div>
  )
}
export default Card