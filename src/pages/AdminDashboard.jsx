import { useState, useEffect } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState(getRestaurants());
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Rajasthani");
  const [parkingLot, setParkingLot] = useState(true);

  const addRestaurant = () => {
    if (!restaurantName || !address) {
      alert("Please fill all required fields");
      return;
    }

    const newRestaurant = {
      restaurantID: restaurants.length + 1,
      restaurantName,
      address,
      type,
      parkingLot,
      image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    };

    const updatedRestaurants = [...restaurants, newRestaurant];
    saveRestaurants(updatedRestaurants);
    setRestaurants(updatedRestaurants);
    alert("Restaurant added successfully!");

    // Clear form fields
    setRestaurantName("");
    setAddress("");
    setType("Rajasthani");
    setParkingLot(true);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Add Restaurant</h3>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Rajasthani</option>
          <option>Gujarati</option>
          <option>Mughlai</option>
          <option>Jain</option>
          <option>Thai</option>
          <option>North Indian</option>
          <option>South Indian</option>
        </select>
        <select
          value={parkingLot}
          onChange={(e) => setParkingLot(e.target.value === "true")}
        >
          <option value={true}>Parking Available</option>
          <option value={false}>No Parking</option>
        </select>
        <button onClick={addRestaurant}>Add Restaurant</button>
      </div>
      <div>
        <h3>Restaurant List</h3>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.restaurantID} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
