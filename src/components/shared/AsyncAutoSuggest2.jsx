import { debounce } from "lodash"
import axios from "axios"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar2"
import SearchResults from "./SearchResults"
const placesEndpoint = import.meta.env.VITE_HERE_PLACES_AUTOSUGGEST_ENDPOINT
const apiKey = import.meta.env.VITE_HERE_API_KEY
const delay = 1000

async function getSuggestions(placesEndpoint, apiKey, lat, long, query, setResults, setIsLoading) {
    try {
        setIsLoading(true)

        let suggestions = await axios.get(`${placesEndpoint}?apiKey=${apiKey}&at=${lat},${long}&q=${query}&limit=7&lang=en&pretty`)
        suggestions = suggestions.data.items
        setResults(suggestions)
    } catch (error) {
        console.error(error)
    } finally{
        setIsLoading(false)
    }
}

const debouncedSearch = debounce(getSuggestions, delay)

export default function AsyncAutoSuggest({ select}) {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [location, setLocation] = useState({ lat: 21.169692263823002 , long: 79.14948942756396 });

    useEffect(() => {
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude: lat, longitude: long } = position.coords;
                setLocation({ lat, long });
            },
            (error) => {
                console.error('Failed to get user location:', error);
            },
            {
                enableHighAccuracy: false,
                // timeout: 5000,
                maximumAge: 86400000,
            }
        );
    }, []);


    function onSearch(query) {
        const {lat, long} = location

        if(!query){
            debouncedSearch.cancel()
            setResults([])
            setIsLoading(false)
        }
        debouncedSearch(placesEndpoint, apiKey, lat, long, query, setResults, setIsLoading)

    }

    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-1/2">
            <SearchBar onSearch={onSearch} isLoading={isLoading} />
            {results.length > 0 && (<SearchResults select={select} results={results} />)}
        </div>
    )
}