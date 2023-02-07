import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'

export default function SearchBar() {
    return(
      <div className="grid justify-items-center">
                <form action="#" className="mt-6 sm:flex sm:w-full sm:max-w-lg">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero-email" className="sr-only">
                      Find Services
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="Find Services"
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-10"  
                    >
                      Search
                    </button>
                  </div>
                </form>
                </div>
                   );
}