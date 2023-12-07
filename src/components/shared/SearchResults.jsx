export default function SearchResults({results}) {
    return (
        <div>
            <ul className="rounded-2xl border-2 container sm:w-2/4 w-[90%] mt-2 overflow-scroll max-h-[200px] backdrop-blur-sm backdrop-brightness-75">
                {results.map((result) => <SearchResult result={result} />)}
            </ul>
        </div>
    )
}

function SearchResult({ result }) {

    return (
        <li key={result.id} className="text-muted py-2 border-b-[1px] last:border-b-0 truncate ">
            {result.title}
        </li>
    )
}