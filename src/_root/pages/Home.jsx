import React, { useRef, useEffect, useState, useReducer } from 'react'
import mapboxgl from 'mapbox-gl'
import AsyncAutoSuggest from '@/components/shared/AsyncAutoSuggest2'
import ProfileCard from '@/components/shared/ProfileCard'

//  SECTION:  pass this access token to mapboxgl
const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN
mapboxgl.accessToken = mapboxAccessToken

/*  
 NOTE: 
 reducer f() to play with the center of the map.
*/
function mapReducer(state, action) {
    switch (action.type) {
        case "flyTo":
            // flyTo to the specified geocode.
            return { ...state, flyTo: [action.state.flyToLng, action.state.flyToLat] }
        default:
            return state
    }
}

const initArg = {
    flyTo: [],
}


/* 
 NOTE: 
 if you face problem due to mapbox in future plz change 'mapbox-gl' to '!mapbox-gl'.
*/
export default function Home() {


    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(null)
    const [lat, setLat] = useState(null)
    const [zoom, setZoom] = useState(2)
    const [profileAppear, setProfileAppear] = useState(false)

    const [initState, dispatch] = useReducer(mapReducer, initArg)

    useEffect(() => {
        /* 
 NOTE: 
 this f() simply returns the geocode for current position.
*/
        // function getCurrentLocation() {
        function success(geocode) {
            const center = [geocode.coords.longitude, geocode.coords.latitude]

            // checkpoint for init mapboxgl.Map only once.
            if (map.current) return
            // do it if aint inited.

            // getCurrentLocation()

            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                projection: "globe",
                style: 'mapbox://styles/mapbox/navigation-night-v1',
                center: center,
                zoom: zoom
            })

            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4))
                setLat(map.current.getCenter().lat.toFixed(4))
                setZoom(map.current.getZoom().toFixed(2))
                // console.log(getCurrentLocation()) 
            })


            map.current.on('style.load', () => {
                map.current.setFog({
                    color: '#a8dadc', // Lower atmosphere
                    'high-color': '#38a3a5', // Upper atmosphere
                    'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
                    'space-color': '#001219', // Background color
                    'star-intensity': 0.8 // Background star brightness (default 0.35 at low zoooms )
                })
            })

            new mapboxgl.Marker()
                .setLngLat(center)
                .addTo(map.current)

        }

        function error(error) {
            console.error(error)
        }

        const options = {
            enableHighAccuracy: false,
            // timeout: 1000,
            maximumAge: 10000,
        }

        if (initState.flyTo.length > 0) {
            // console.log("s")
            new mapboxgl.Marker()
                .setLngLat(initState.flyTo)
                .addTo(map.current)
            map.current.flyTo({
                center: initState.flyTo,
                essential: true,
                zoom: 12,
                duration: 7000
            })
            setProfileAppear(true)
        }

        const locator = navigator.geolocation.watchPosition(success, error, options)

        // HERE we could add the 3rd party tile src to render using mapboxgl.

        return () => { navigator.geolocation.clearWatch(locator) }

    }, [initState])

    return (
        <div className='w-full h-full'>
            <AsyncAutoSuggest select={dispatch} />
            <div ref={mapContainer} className="map-container" />
            {profileAppear && <ProfileCard />}
        </div >
    )
}

