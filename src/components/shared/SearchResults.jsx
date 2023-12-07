import axios from "axios"
import { getGeocode } from "@/lib/HERE/main"

export default function SearchResults({ results, select }) {

    return (
        <div>
            <ul className="rounded-2xl border-2 container sm:w-2/4 w-[90%] mt-2 overflow-scroll max-h-[200px] backdrop-blur-sm backdrop-brightness-75">
                {results.map((result, i) => <SearchResult id={i} result={result} select={select} />)}
            </ul>
        </div>
    )
}

function SearchResult({ result, id, select }) {

    async function handleClick(e) {
        // console.log(select)
        const POI = e.target.innerText
        const { lat, lng } = await getGeocode(POI)
        if (lat && lng) {
            console.log(lat, lng)
            select({
                type: "flyTo",
                state: { flyToLng: lng, flyToLat: lat }
            })
        }


    }

    return (
        <li id={id} className="text-muted py-2 border-b-[1px] last:border-b-0 truncate " onClick={handleClick}>
            {result.title}
        </li>
    )
}

