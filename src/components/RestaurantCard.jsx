import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/admin/restaurants/update", { state: { restaurant } });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      const updatedRestaurants = getRestaurants().filter(
        (r) => r.restaurantID !== restaurant.restaurantID
      );
      saveRestaurants(updatedRestaurants);
      alert("Restaurant deleted successfully!");
      window.location.reload();
    }
  };

  return (
    <div>
      <img src={restaurant.image} alt={restaurant.restaurantName} />
      <h4>{restaurant.restaurantName}</h4>
      <p>{restaurant.address}</p>
      <p>Type: {restaurant.type}</p>
      <p>Parking: {restaurant.parkingLot ? "Available" : "Not Available"}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RestaurantCard;
