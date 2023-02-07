import { Bars3Icon, LifebuoyIcon, NewspaperIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

const supportLinks = [
    {
      name: 'Graphic Design',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: PhoneIcon,
    },
    {
      name: 'Web Developement',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: LifebuoyIcon,
    },
    {
      name: 'App Developement',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: NewspaperIcon,
    },
    {
      name: 'Content Writing',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: PhoneIcon,
    },
  ]

export default function TopRated() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {supportLinks.map((link) => (
                <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <h3 className="text-2xl text-blue-gray-900 font-bold">{link.name}</h3>
                  </div>
                  <div className="rounded-bl-2xl rounded-br-2xl bg-blue-gray-50 p-6 md:px-8">
                    <a href={link.href} className="text-base font-medium text-blue-700 hover:text-blue-600">
                      Show More
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
    </ul>
  )
}
