import { useState } from "react";

export default function useUsrLoc() {
    const [loc, setLoc] = useState(() => [])
    
    /* 
     NOTE: 
     this f() simply returns the geocode for current position.
    */
    function getCurrentLocation() {
        function success(geocode) {
            console.log(geocode, "this from success")
            setLoc([geocode.coords.latitude, geocode.coords.longitude])
        }

        function error(error) {
            console.error(error)
        }

        const options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 10000,
        }
        const locator = navigator.geolocation.getCurrentPosition(success, error, options)
        return locator
    }

    return loc

}

