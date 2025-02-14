import "./Restaurant"

import ".data/data.js"
import Restaurant from "./Restaurant";
import { restaurants } from "../data/data";

const RestaurantsContainer = () => {

    return (
        <div className="RestaurantContainer">

            {

                restaurants.map(restaurant => <Restaurants restaurant = {restaurant}/>)

            }

        </div>
    );

};

export default RestaurantsContainer;

