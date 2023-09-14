import { useState } from "react"
import { useGlobalContext } from "../context.jsx"


const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text) {
      setSearchTerm(text);
    }

  }

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();

  }

  return (
    <header>
      <nav className="navbar navbar-dark bg-danger navbar-expand-sm ">
        <div className="container-fluid">
          <a className="navbar-brand" >feed me</a>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">

            <form className="d-flex mx-auto m-4" role="search" onSubmit={handleSubmit}>
              <input className="form-control mx-4 " type="search" placeholder="Find Meal" aria-label="Search" onChange={handleChange} value={text} />
              <button className="btn btn-outline-light mx-1 " type="submit" onSubmit={handleSubmit}>Search</button>
              <button className="btn btn-outline-light mx-1 text-nowrap" type="button" onClick={handleRandomMeal}>Surprise Me</button>
            </form>

          </div>
        </div>
      </nav>

    </header>
  )
}
export default Search