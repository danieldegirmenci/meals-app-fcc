import { useGlobalContext } from "../context.jsx"
const Meals = () => {

  const {meals} = useGlobalContext();

  return (
<section>
  <div className="container-lg ">
    <div class="row">
  
  {
    meals.map((meal)=>{
      console.log(meal);
      
      return <div className="card m-2 col-3" >
        <img src={meal.strMealThumb} className="card-img-top" alt="..."/>
               <div className="card-body">
            <h5 className="card-title">{meal.strMeal}</h5>
     <ul class="list-group list-group-flush">
    <li class="list-group-item">{meal.strArea}</li>
    <li class="list-group-item">{meal.strCategory}</li>
    
       </ul>
             <a href="#" className="btn btn-danger">Go somewhere</a>
                </div>
       
      </div>
    })
  }
    </div></div>
</section>
  )


}
export default Meals