import React, { useRef, useEffect, useState } from 'react' 
import mapboxgl from 'mapbox-gl' 

//  SECTION:  pass this access token to mapboxgl
const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN
mapboxgl.accessToken = mapboxAccessToken

/* 
 NOTE: 
 if you face problem due to mapbox in future plz change 'mapbox-gl' to '!mapbox-gl'.
*/
export default function Home() {


    const mapContainer = useRef(null) 
    const map = useRef(null) 
    const [lng, setLng] = useState(-70.9) 
    const [lat, setLat] = useState(42.35) 
    const [zoom, setZoom] = useState(3) 

    useEffect(() => {
        // checkpoint for init mapboxgl.Map only once.
        if (map.current) return
        // do it if aint inited.
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            projection: "globe",
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: [lng, lat],
            zoom: zoom
        })

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4)) 
            setLat(map.current.getCenter().lat.toFixed(4)) 
            setZoom(map.current.getZoom().toFixed(2)) 
        })

        
        
        /* 
         NOTE: 

        */
        // map.on("load", () => {

        // })
    }) 

    return (
        <>
            <div ref={mapContainer} className="map-container" />

        </>
    )
}

/* 
 NOTE: 
 this f() simply returns the geocode for current position.
*/
function getCurrentLocation() {
    function success(geocode){
        console.log(geocode, "this from success")
        return [geocode.coords.latitude, geocode.coords.longitude]  
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