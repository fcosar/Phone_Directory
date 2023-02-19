import React,{useState} from "react";
import "./Nav.css";


const Header = () => {
  const [search,setSearch]=useState("")
  return (
    <div >
        
      <nav className="navbar">
        <div className="container d-flex justify-content-between navbar-dark">
        <h2 className="d-flex justify-content-center">Telephone directory</h2>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(event)=>setSearch(event.target.value)}
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
          
        </div>
      </nav>
      
    </div>
  );
};
export default Header;
