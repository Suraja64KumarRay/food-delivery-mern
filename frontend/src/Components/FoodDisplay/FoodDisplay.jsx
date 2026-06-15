import React , { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';


const FoodDisplay = ({category}) => {

    const {food_list, searchTerm} = useContext(StoreContext);

    const filteredList = food_list.filter((item) => {
        const matchesCategory = category === "All" || item.category === category;
        const matchesSearch = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

  return (
    <div className='food-display' id='food-display'>
        <h2>{searchTerm ? `Results for "${searchTerm}"` : 'Top dishes near you'}</h2>
        {filteredList.length === 0 && (
            <div className="no-results">
                <p>No food items found{searchTerm ? ` for "${searchTerm}"` : ''}. Try a different search!</p>
            </div>
        )}
        <div className="food-display-list">
            {filteredList.map((item,index) => (
                <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            ))}
        </div>
    </div>
  )
}

export default FoodDisplay
