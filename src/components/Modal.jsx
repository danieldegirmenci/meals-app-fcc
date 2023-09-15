import {useGlobalContext} from "../context"



const Modal = () => {

  const {selectedMeal,closeModal}=useGlobalContext();
  const ingredients=[];
  const measurements=[];
  if(selectedMeal){
  for(let i=1;i<20;i++){
    let ingredientDataKey=`strIngredient${i}`;
    let ingredientValue=selectedMeal[ingredientDataKey];
    if (ingredientValue && ingredientValue.trim() !== "") {
      ingredients.push(ingredientValue);
  }
  }
 
  for(let i=1;i<20;i++){
    let measurementDataKey=`strMeasure${i}`;
    let measurementValue=selectedMeal[measurementDataKey];
    if (measurementValue && measurementValue.trim() !== "") {
      measurements.push(measurementValue);
  }
  }

}
const { strMeal: title,strMealThumb:image } = selectedMeal || {};



  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-4" id="staticBackdropLabel">{title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      

      <div className="modal-body">
      

        
            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Ingredients
              </button>
             
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {ingredients.map((ingredient, index) => (
                  <li className="dropdown-item" key={index}>
                    {ingredient}: {measurements[index]}
                  </li>
                ))}
              </ul>
              </div>
              
              
           

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
  </div>


  )
}

export default Modal