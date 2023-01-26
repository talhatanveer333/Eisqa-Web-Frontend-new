const categories = [
    {
      name: 'Technical',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3361488/pexels-photo-3361488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Art',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Photography',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/5561156/pexels-photo-5561156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Creative Writing',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/7015290/pexels-photo-7015290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Financial',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/7213441/pexels-photo-7213441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

export default function FamouseCategories(){
    return (
<div className="bg-white">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-3xl font-bold tracking-tight text-green-500 text-center">Most Popular Categories</h2>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
    )
}