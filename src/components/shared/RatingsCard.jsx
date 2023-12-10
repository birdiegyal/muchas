import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function RatingsCard({ review }) {
  return (
    <div className="mx-auto sm:max-w-lg md:max-w-lg space-y-6 my-1">
      <main className="mt-1 mx-4 sm:mx-6 lg:mx-8">
        <div className="space-y-6">
          <div className=" shadow overflow-hidden rounded-lg sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 rounded">
              <h3 className="text-lg leading-6 font-bold text-gray-900 dark:text-gray-100">
                {review.usrname}
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <div className="flex items-center gap-1 my-2">
                  <IconStar className="w-4 h-4 fill-white" />
                  <IconStar className="w-4 h-4 fill-white" />
                  <IconStar className="w-4 h-4 fill-white" />
                  <IconStar className="w-4 h-4 fill-white" />
                  <IconStar className="w-4 h-4 fill-white" />
                </div>
                <p className=" text-gray-100 italic ">{review.reviewText}</p>
                <p className="mt-2 text-right text-gray-100 text-xs">
                  {review.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function IconFilter(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      //   stroke-width="2"
      //   stroke-linecap="round"
      //   stroke-linejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function IconSearch(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      //   stroke-width="2"
      //   stroke-linecap="round"
      //   stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function IconStar(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      //   stroke-width="2"
      //   stroke-linecap="round"
      //   stroke-linejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
