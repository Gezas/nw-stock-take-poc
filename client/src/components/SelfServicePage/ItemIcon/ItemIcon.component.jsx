import './ItemIcon.component.css';
import SwitchImage from '../../../assets/switch-icon.PNG';
import { useEffect, useState } from 'react';

function ItemIcon() {
  const [itemTile, setItemTile] = useState("Cisco Catalyst 48 Port swtich");
    return (
      <div className="ItemIcon">
        <img className="itemIconImg" src={SwitchImage} alt="hello"/>
        <div className="itemIconTitle">{itemTile}</div>
      </div>
    );
  }
  
  export default ItemIcon;
  