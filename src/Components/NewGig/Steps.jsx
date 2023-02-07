const steps = [
    { id: '1', name: 'Overview', href: '#', status: 'complete' },
    { id: '2', name: 'Pricing', href: '#', status: 'current' },
    { id: '3', name: 'Description', href: '#', status: 'upcoming' },
    { id: '4', name: 'Requirements', href: '#', status: 'upcoming' },
    { id: '5', name: 'Gallery', href: '#', status: 'upcoming' },
    { id: '6', name: 'Public', href: '#', status: 'upcoming' },
  ]
  
  export default function Steps() {
    return (
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {steps.map((step) => (
            <li key={step.name} className="md:flex-1">
              {step.status === 'complete' ? (
                <a
                  href={step.href}
                  className="group flex flex-col border-l-4 border-gray-400 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                >
                  <span className="text-lg font-bold text-gray-400">{step.id}<span className="text-lg font-medium text-black">. {step.name}</span></span>                  
                </a>
              ) : step.status === 'current' ? (
                <a
                  href={step.href}
                  className="flex flex-col border-l-4 border-green-500 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                  aria-current="step"
                >
                  <span className="text-lg font-bold text-green-500">{step.id}<span className="text-lg font-medium text-black">. {step.name}</span></span>
                </a>
              ) : (
                <a
                  href={step.href}
                  className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                >
                  <span className="text-lg font-bold text-gray-500 group-hover:text-gray-700">{step.id}<span className="text-lg font-medium">. {step.name}</span></span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }
  