import "./NavBar.component.css";
import SearchBar from "../SelfServicePage/SearchBar/SearchBar.component";

function NavBar() {
  return (
    <div className="navbar">
        <div>Self service</div>    
        <SearchBar />
    </div>
  );
}

export default NavBar;
