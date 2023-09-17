import {useGlobalContext} from "../context"



const Modal = () => {

  const {selectedMeal,measurements,ingredients}=useGlobalContext();
  
const { strMeal: title,strMealThumb:image } = selectedMeal || {};



  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-4" id="staticBackdropLabel">{title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      

      <div className="modal-body d-flex">
      
                <img src={image} className="img-fluid  w-50 h-50 rounded" alt={title}/>
                <ul className="list-group-flush list-group">
               
                {ingredients.map((ingredient, index) => (
                  <li className="list-group-item" key={index}>
                    {ingredient}: <span class="badge bg-danger rounded-pill">{measurements[index]}</span> 
                  </li>
                ))}
                </ul>
                </div>
                <div className="modal-content">
                  <div className="modal-body">
                    selam
                  </div>
                </div>
              
           

      
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Watch</button>
        <button type="button" className="btn btn-danger">Source</button>
      </div>
    </div>
  </div>
  </div>


  )
}

export default Modal