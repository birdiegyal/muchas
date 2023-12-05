import { useState } from 'react'
import axios from 'axios'
export default function useAutoSuggestions({ usrQuery, usrGeocode }) {
    // to track em suggestions
    const [suggestions, setSuggestions] = useState([])
    // to track fetching from the api
    const [fetchSuggestions, setFetchSuggestions] = useState(true)

    /* 
     DEFAULTS: 
    */    
    const placesEndpoint = import.meta.env.VITE_HERE_PLACES_AUTOSUGGEST_ENDPOINT
    const apiKey = import.meta.env.VITE_HERE_API_KEY
    const {lat, long} = usrGeocode

    useEffect(() => {
        if (fetchSuggestions) {
            // here we'll make a api call.
            fetchSuggestionsData()
        }
    }, [fetchSuggestions, query])

    const fetchSuggestionsData = async () => {
        // Replace this with your actual API call
        const response = await axios.get(`${placesEndpoint}?apiKey=${apiKey}&at=${lat, long}&q=${query}&pretty`)
        const data = await response.data
        setSuggestions(data.results)
        setFetchSuggestions(false)
    }
    return [suggestions, setFetchSuggestions]
}

