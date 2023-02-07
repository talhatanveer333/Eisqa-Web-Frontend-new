import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'From', stat: 'India', },
  { id: 2, name: 'Member Since', stat: 'Feb 2015'},
  { id: 3, name: 'Avg. Response Time', stat: '2 Hours'},
  { id: 3, name: 'Last Delivery', stat: 'Just Now'},
]

export default function GigStats() {
  return (
    <div className='shadow rounded-3xl overflow-hidden'>
      <dl className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden bg-white px-4 pt-5 pb-12 border-r-2 sm:px-6 sm:pt-6"
          >
            <dt>
              <p className="ml-16 truncate text-lg font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-4xl font-semibold text-green-500">{item.stat}</p>
              
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
