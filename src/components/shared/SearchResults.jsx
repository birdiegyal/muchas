import axios from "axios"
import { getGeocode } from "@/lib/HERE/main"
import { ClickAwayListener } from 'react-advanced-click-away';

export default function SearchResults({ results, select, showModal, hideResults }) {

    function handleClickAway() {
        hideResults()
    }
    
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <ul className="rounded-2xl border-2 container sm:w-2/4 w-[90%] mt-2 overflow-scroll max-h-[200px] backdrop-blur-sm backdrop-brightness-75">
                {results.map((result, i) => <SearchResult id={i} result={result} select={select} showModal={showModal}/>)}
            </ul>
        </ClickAwayListener>
    )
}

function SearchResult({ result, id, select ,showModal}) {

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
        showModal()


    }

    return (
        <li id={id} className="text-muted py-2 border-b-[1px] last:border-b-0 truncate " onClick={handleClick}>
            {result.title}
        </li>
    )
}

