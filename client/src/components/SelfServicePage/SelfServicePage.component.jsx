import "./SelfServicePage.component.css";
import CategoryIcon from "./CategoryIcon/CategoryIcon.component";
import ItemIcon from "./ItemIcon/ItemIcon.component";
import SelfServiceHeader from "./Header/SelfServiceHeader.component";
import { useState, useEffect, useRef } from "react";

function SelfServicePage() {
  // Selected item category
  const [category, setCategory] = useState("Home");
  // List of parent categories
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  // Current page
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const inRef = useRef();

  return (
    <div className="SelfServicePage">
      <SelfServiceHeader props={{"category": category, "breadCrumbs": breadCrumbs}} />
        <div className="ItemDisplayContainer">
            <CategoryIcon />
            <CategoryIcon />
            <CategoryIcon />
            <CategoryIcon />
            <ItemIcon />
            <ItemIcon />
            <ItemIcon />
            <input ref={inRef}></input>
            <button onClick={() => setCategory("away" + inRef.current.value)}>Change</button>
        </div>
    </div>
  );
}

export default SelfServicePage;
