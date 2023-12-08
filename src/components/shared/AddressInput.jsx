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
  };

  const showError = (error) => {
    alert(`Error retrieving current location: ${error.message}`);
  };

  return (
    <>
      <div className=" w-[96%] space-y-6">
        <select
          className="w-full form-input  "
          id="address-option"
          value={selectedOption}
          onChange={handleAddressOptionChange}
        >
          <option value="current-location">Current Location</option>
          <option value="manual-input">Enter Address Manually</option>
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
          <div className="manual-address-container w-full text-center mt-10">
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
    </>
  );
};

export default AddressInput;
