import {useState} from "react"
import { useGlobalContext } from "../context.jsx"

const Search = () => {

  return (
    <header>
    <nav class="navbar navbar-dark bg-danger navbar-expand-sm ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">feed me</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      
      <form class="d-flex mx-auto " role="search">
        <input class="form-control m-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning mx-2 " type="submit">Search</button>
        <button class="btn btn-outline-warning mx-4 text-nowrap" type="submit">Surprise Me</button>
      </form>
        
    </div>
  </div>
</nav>
    
    </header>
  )
}
export default Search