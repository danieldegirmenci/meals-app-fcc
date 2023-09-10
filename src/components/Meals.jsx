import { useGlobalContext } from "../context.jsx"
import { GrFavorite } from 'react-icons/gr';

const Meals = () => {

  const {meals} = useGlobalContext();

  return (
<section class="m-3">
  <div className="container-sm" >
    <div className="row d-flex justify-content-center">
  
  {
    meals.map((meal)=>{
      console.log(meal);
      
      return <div className="card m-2 col-6 col-sm-3 col-md-3 col-lg-3 text-center " key={meal.idMeal}  >
        <img src={meal.strMealThumb} className="card-img-top" alt="..."/>
               <div className="card-body">
            <h5 className="card-title">{meal.strMeal}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-truncate">{meal.strArea}</li>
                <li className="list-group-item text-truncate">{meal.strCategory}</li>
                <li className="list-group-item text-truncate">  
               <GrFavorite style={{color:"red"}}/></li>
               
    
       </ul>
             <button type="button"  className=" btn btn-danger mt-2">Recipee</button>

                </div>
       
      </div>
    })
  }
    </div></div>
</section>
  )


}
export default Meals