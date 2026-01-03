import { useEffect, useState } from "react";
import { getRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <div>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.restaurantID} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;
