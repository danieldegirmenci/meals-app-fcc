
import { useState } from "react";
import { useGlobalContext } from "../context.jsx";

const Search = () => {
  const { setSearchTerm, fetchRandomMeal, getAllMeals } = useGlobalContext();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-danger navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-brand" style={{ cursor: "pointer" }}>
            <a onClick={getAllMeals}>feed me</a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <form
              className="d-flex flex-column flex-md-row w-100"
              role="search"
              onSubmit={handleSubmit}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                <input
                  className="form-control mx-md-4 my-2 my-md-0"
                  type="search"
                  placeholder="Find Meal"
                  aria-label="Search"
                  onChange={handleChange}
                  value={text}
                />
                <button
                  className="btn btn-outline-light my-2 my-md-0"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Search
                </button>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-center mt-2 mt-md-0">
                <button
                  className="btn btn-outline-light mx-md-4"
                  type="submit"
                  onClick={getAllMeals}
                >
                  All meals
                </button>
                <button
                  className="btn btn-outline-light mx-md-4"
                  type="button"
                  onClick={handleRandomMeal}
                >
                  Surprise Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Search;
