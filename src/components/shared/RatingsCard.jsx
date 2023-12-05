import { Button } from "@/components/ui/button";

export function RatingsCard() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <header className="bg-white dark:bg-input py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Reviews
        </h1>
        <div className="mt-4 relative rounded-md shadow-sm">
          <IconSearch className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="focus:ring-black h-10 focus:border-border block w-full pl-10 sm:text-sm border-border rounded-md"
            placeholder="Search reviews"
            type="text"
          />
          <Button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 mr-4 "
            variant="outline"
          >
            <IconFilter className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="mt-6 mx-4 sm:mx-6 lg:mx-8">
        <div className="space-y-6">
          <div className="bg-white dark:bg-input shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                John Doe
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <IconStar className="w-4 h-4 fill-primary" />
                  <IconStar className="w-4 h-4 fill-primary" />
                  <IconStar className="w-4 h-4 fill-primary" />
                  <IconStar className="w-4 h-4 fill-primary" />
                  <IconStar className="w-4 h-4 fill-primary" />
                </div>
                <p>Amazing product! Highly recommend</p>
                <p className="mt-2 text-right text-gray-500 text-xs">
                  September 4, 2023
                </p>
              </div>
            </div>
            <Button className="w-full py-2" variant="secondary">
              Write a review
            </Button>
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
