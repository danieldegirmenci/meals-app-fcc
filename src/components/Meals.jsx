import { useGlobalContext } from "../context.jsx"
import Card from "./Card"

const Meals = () => {

  const {meals, loading} = useGlobalContext();

  
  if(loading){
    return(
      <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    )
  }

  if(meals.length<1){
    return(
      <section>
      <h4>No meals matched your search term. Please try again.</h4>
      </section>
    )
  }

  return (
<section className="my-4">
  <div className="container-sm" >
    <div className="row d-flex justify-content-center">
  
  {
    meals.map((meal)=>{
      return <Card meal={meal} key={meal.idMeal}/>
    })
  }
    </div>
  </div>
</section>
  )


}
export default Meals