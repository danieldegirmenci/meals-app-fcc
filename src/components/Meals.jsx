import { useGlobalContext } from "../context.jsx"
import { GrFavorite } from 'react-icons/gr';
import Card from "./Card"

const Meals = () => {

  const {meals, loading} = useGlobalContext();

  
  if(loading){
    return(
      <section className="d-flex justify-content-center">
      <h4 className="">Loading...</h4>
        </section>
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
<section className="">
  <div className="container-sm" >
    <div className="row d-flex justify-content-center">
  
  {
    meals.map((meal)=>{
      return <Card meal={meal}/>
    })
  }
    </div>
  </div>
</section>
  )


}
export default Meals