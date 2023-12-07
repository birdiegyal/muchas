
import AutoComplete from "@/components/shared/AutoComplete";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className='w-full flex-col md:flex'>
            <AutoComplete />
            <section className='flex flex-1 h-full'>
                <Outlet />
            </section>
        </div>

    )
}