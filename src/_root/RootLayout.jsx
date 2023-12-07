
// import AsyncAutoSuggest from "@/components/shared/AsyncAutoSuggest2";
// import AutoComplete from "@/components/shared/AutoComplete";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className='w-full flex-col md:flex'>
            
            
            <section className='flex flex-1 h-full'>
                <Outlet />
            </section>
        </div>

    )
}