
import { Input } from "../ui/input"
import { Search } from 'lucide-react'
import { useState } from "react"
import axios from "axios"

/* 
 TODO: 
 rename this component to autosuggest.
*/

export default function SearchBar({setResults}) {
    const [usrQuery, setUsrQuery] = useState("")
    const placesEndpoint = import.meta.env.VITE_HERE_PLACES_AUTOSUGGEST_ENDPOINT
    const apiKey = import.meta.env.VITE_HERE_API_KEY
    const { lat, long } = { lat: 45.127545, long: 78.102471 }

    async function handleChange(e) {
        
        setUsrQuery(e.target.value)

        if(!usrQuery){
            setResults([])
        }
        // @debounced rate
        const suggestions = await getSuggestions({placesEndpoint, apiKey, lat, long, usrQuery})
        if(suggestions){
            setResults(suggestions)
        }

    }
    return (
        <div className="flex gap-1 px-2 rounded-lg border-4 container sm:w-2/4 overflow-clip backdrop-blur-sm backdrop-brightness-50">
            <Search color="#cad2c5" size={30} className="self-center " />
            <Input placeholder="search here..." type="text" className="search-places bg-transparent" value={usrQuery} onChange={handleChange}/>
        </div>
    )

    /*
     WORKFLOW: 
     ✅ we'll accept the query param i.e. the text entered by the usr.
     ✅ we'll use it to fetch results from the HERE places api.
     ✅ we'll map over the results and put it inside the ul.
    */

}

async function getSuggestions({placesEndpoint, apiKey, lat, long, usrQuery}) {
    try {
        if(usrQuery){
            const response = await axios.get(`${placesEndpoint}?apiKey=${apiKey}&at=${lat},${long}&q=${usrQuery}&limit=7&lang=en&pretty`)
            const data = await response.data.items
            return data
        }
    } catch (error) {
        console.error(error);
    }
}
