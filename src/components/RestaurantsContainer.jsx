
import Restaurant from "./Restaurant";
import {restaurants} from "../data/data";

const RestaurantsContainer = () => {

    return (
        <div className="RestaurantContainer">;
                        
            {
            restaurants.map(restaurant => (
                <Restaurant key={restaurant.id} restaurant={restaurant} />
            ))
            
            }            
            
        </div>
    )

};

export default RestaurantsContainer;

