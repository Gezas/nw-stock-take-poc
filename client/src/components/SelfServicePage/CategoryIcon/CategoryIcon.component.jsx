import './CategoryIcon.component.css';
import SwitchImage from '../../../assets/router-icon.PNG';
import { useEffect, useState } from 'react';

function CategoryIcon() {
  const [itemTile, setItemTile] = useState("Routers");
    return (
      <div className="CategoryIcon">
        <div className="CategoryIconTitle">{itemTile}</div>
        <img className="CategoryIconImg" src={SwitchImage} alt="hello"/>
      </div>
    );
  }
  
  export default CategoryIcon;
  