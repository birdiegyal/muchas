import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function AutoComplete() {
    const [results, setResults] = useState(() => [])
    
    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-1/2">
            <SearchBar setResults={setResults}/>
            {results.length > 0 && (<SearchResults results={results} />)}
        </div>
    )
}