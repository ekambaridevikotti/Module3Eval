import { useState, useEffect, useRef } from "react";
import { getRestaurants } from "../utils/localStorage";

const Navbar = ({ setFilteredRestaurants }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [parkingFilter, setParkingFilter] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSearch = () => {
    let filtered = getRestaurants();

    if (searchTerm) {
      filtered = filtered.filter(
        (restaurant) =>
          restaurant.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter) {
      filtered = filtered.filter((restaurant) => restaurant.type === typeFilter);
    }

    if (parkingFilter !== "") {
      const parkingAvailable = parkingFilter === "true";
      filtered = filtered.filter((restaurant) => restaurant.parkingLot === parkingAvailable);
    }

    setFilteredRestaurants(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm, typeFilter, parkingFilter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or address"
        ref={searchRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="">All Types</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>
      <select value={parkingFilter} onChange={(e) => setParkingFilter(e.target.value)}>
        <option value="">All Parking</option>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
    </div>
  );
};

export default Navbar;
