import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Loader from "./Loader";

export default function SearchBar({ onSearch, isLoading }) {
    return (
        <div className="flex gap-1 px-2 rounded-lg container sm:w-2/4 overflow-clip backdrop-blur-sm backdrop-brightness-50">
            <Search color="#cad2c5" size={30} className="self-center " />
            <Input placeholder="search here..." type="text" className="search-places bg-transparent" onChange={(e) => onSearch(e.target.value)} />
            {isLoading && <Loader />}
        </div>
    )
}
