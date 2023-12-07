import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";

const AddressInput = () => {
  const [selectedOption, setSelectedOption] = useState(
    "choose to enter address"
  );
  const [manualAddress, setManualAddress] = useState("");

  const handleAddressOptionChange = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === "current-location") {
      handleGetCurrentLocation();
    }
  };

  const handleManualAddressChange = (event) => {
    setManualAddress(event.target.value);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showCurrentLocation, showError);
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  const showCurrentLocation = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    // Use the latitude and longitude to retrieve the address
    // (You can use a geocoding service like Google Maps Geocoding API)
    // const address = getAddressFromCoordinates(latitude, longitude);
    // setManualAddress(address);
  };

  const showError = (error) => {
    alert(`Error retrieving current location: ${error.message}`);
  };

  return (
    <div className="min-h-screen  max-w-2xl mt-24 mx-auto sm:max-w-lg md:max-w-lg  space-y-6">
      <select
        className="w-80 form-input  "
        id="address-option"
        value={selectedOption}
        onChange={handleAddressOptionChange}
      >
        <option value="manual-input">Enter Address Manually</option>
        <option value="current-location">Current Location</option>
      </select>
      {selectedOption !== "manual-input" && (
        <p
          className="mx-auto text-center italic text-xs
        "
        >
          Note: You are required to turn on your Location
        </p>
      )}

      {selectedOption === "manual-input" && (
        <div className="manual-address-container w-80 text-center mt-10">
          <Label htmlFor="manual-address" className="text-md ">
            Address
          </Label>
          <input
            type="text"
            id="manual-address"
            value={manualAddress}
            className="p-2 mt-2 w-full form-input"
            onChange={handleManualAddressChange}
            placeholder="Enter your complete address"
          />
        </div>
      )}
    </div>
  );
};

export default AddressInput;