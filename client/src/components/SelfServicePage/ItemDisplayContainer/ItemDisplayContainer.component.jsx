import './ItemDisplayContainer.component.css';
import ItemIcon from '../ItemIcon/ItemIcon.component';
import SearchBar from '../SearchBar/SearchBar.component';
import CategoryIcon from '../CategoryIcon/CategoryIcon.component';

function ItemDisplayContainer() {
  return (
    <div>
      <div>Items</div>
      <div className="ItemDisplayContainer">
        <CategoryIcon />
        <ItemIcon />
        <ItemIcon />
        <ItemIcon />
      </div>
    </div>
  );
}

export default ItemDisplayContainer;
