import { useGlobalContext } from "../context.jsx"

const Meals = () => {

  const {meals} = useGlobalContext();

  return (
<section>
  {
    meals.map((meal)=>{
      console.log(meal);
      return <h3>{meal.strMeal}</h3>
    })
  }
</section>
  )


}
export default Meals