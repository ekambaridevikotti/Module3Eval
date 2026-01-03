import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveRestaurants, getRestaurants } from "../utils/localStorage";

const UpdateRestaurant = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const restaurant = state?.restaurant;
  const [restaurantName, setRestaurantName] = useState(restaurant.restaurantName);
  const [address, setAddress] = useState(restaurant.address);
  const [type, setType] = useState(restaurant.type);
  const [parkingLot, setParkingLot] = useState(restaurant.parkingLot);

  const handleUpdate = () => {
    const updatedRestaurant = { ...restaurant, restaurantName, address, type, parkingLot };
    const updatedRestaurants = getRestaurants().map((r) =>
      r.restaurantID === restaurant.restaurantID ? updatedRestaurant : r
    );
    saveRestaurants(updatedRestaurants);
    alert("Restaurant updated successfully!");
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <h2>Update Restaurant</h2>
      <input
        type="text"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
      />
      <input
        type="text"
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
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateRestaurant;
