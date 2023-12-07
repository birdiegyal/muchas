import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 dark:bg-background">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
        Oops! Page not found.
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        We couldn't find what you were looking for.
      </p>
      <Link
        className="inline-flex h-10 items-center justify-center rounded w-[96%] max-w-sm bg-primary text-[20px] font-bold  mt-2  hover:bg-input hover:text-white"
        to="/"
      >
        Back to Home
      </Link>
    </section>
  );
}
