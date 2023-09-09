import { useGlobalContext } from "../context.jsx"
const Meals = () => {

  const {meals} = useGlobalContext();

  return (
<section class="m-4">
  <div className="container" >
    <div class="row d-flex justify-content-center">
  
  {
    meals.map((meal)=>{
      console.log(meal);
      
      return <div className="card m-2 col-md-3 " style={{"min-width":"6rem"}} >
        <img src={meal.strMealThumb} className="card-img-top" alt="..."/>
               <div className="card-body">
            <h5 className="card-title">{meal.strMeal}</h5>
     <ul class="list-group list-group-flush">
    <li class="list-group-item">{meal.strArea}</li>
    <li class="list-group-item text-truncate">{meal.strCategory}</li>
    
       </ul>
             <button  className="btn btn-danger">Recipee</button>
                </div>
       
      </div>
    })
  }
    </div></div>
</section>
  )


}
export default Meals