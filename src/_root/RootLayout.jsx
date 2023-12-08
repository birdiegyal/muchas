// import AsyncAutoSuggest from "@/components/shared/AsyncAutoSuggest2";
// import AutoComplete from "@/components/shared/AutoComplete";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo-muchas.png";

export default function RootLayout() {
  return (
    <div className="w-full flex-col md:flex">
      <Link
        to="/"
        className="flex w-screen max-h-[20%] justify-center items-start"
      >
        <img width={100} src={logo} alt="" />
      </Link>
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
}
