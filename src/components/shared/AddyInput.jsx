import React, { useState } from 'react';

const AddressInput = () => {
    const [selectedOption, setSelectedOption] = useState('choose to enter address');
    const [manualAddress, setManualAddress] = useState('');

    const handleAddressOptionChange = (event) => {
        setSelectedOption(event.target.value);

        if (event.target.value === 'current-location') {
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
            alert('Geolocation not supported by your browser.');
        }
    };

    const showCurrentLocation = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude)
 
    };

    const showError = (error) => {
        alert(`Error retrieving current location: ${error.message}`);
    };

    return (
        <div className="">
            <select className="w-full form-input m-auto" id="address-option" value={selectedOption} onChange={handleAddressOptionChange}>
                <option value="manual-input">Enter Address Manually</option>
                <option value="current-location">Current Location</option>
            </select>

            {selectedOption === 'manual-input' && (
                <div >
                    <input type="text" id="manual-address" value={manualAddress} onChange={handleManualAddressChange} placeholder="Enter your complete address" />
                </div>
            )}

        </div>
    );
};

export default AddressInput;
