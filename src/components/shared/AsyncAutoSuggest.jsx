import { useState } from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead"
import axios from "axios"

export default function AsyncAutoSuggest() {
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState([])
    const placesEndpoint = import.meta.env.VITE_HERE_PLACES_AUTOSUGGEST_ENDPOINT
    const apiKey = import.meta.env.VITE_HERE_API_KEY


    const handleSearch = async (query) => {

        async function succCallbk(geocode) {
            const lat = geocode.coords.latitude
            const long = geocode.coords.longitude
            try {
                const suggestions = await getSuggestions({ placesEndpoint, apiKey, lat, long, usrQuery: query })
                setOptions(suggestions)
            } catch (error) {
                console.error(error)
            }
        }

        function errCallbk(error) {
            console.error(error)
        }

        const opt = {
            enableHighAccuracy: false,
            // timeout: 1000,
            maximumAge: 10000,
        }

        try {
            setIsLoading(true)
            navigator.geolocation.getCurrentPosition(succCallbk, errCallbk, opt)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true

    return (
        <AsyncTypeahead
            className="w-full bg-background"
            filterBy={filterBy}
            id="async-example"
            isLoading={isLoading}
            labelKey="title"
            minLength={3}
            onSearch={handleSearch}
            options={options}
            placeholder="Search..."
            renderMenuItemChildren={(option) => (
                <>
                    <span>{option.title}</span>
                </>
            )}
        />
    )
}

async function getSuggestions({ placesEndpoint, apiKey, lat, long, usrQuery }) {
    try {
        console.log(usrQuery)
        if (usrQuery) {
            const response = await axios.get(`${placesEndpoint}?apiKey=${apiKey}&at=${lat},${long}&q=${usrQuery}&limit=7&lang=en&pretty`)
            const data = await response.data.items
            return data
        }
    } catch (error) {
        console.error(error)
    }
}