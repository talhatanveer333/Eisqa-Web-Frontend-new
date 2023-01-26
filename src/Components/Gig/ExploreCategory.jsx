/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Logo & Brand Identity',
      imageSrc: 'https://images.pexels.com/photos/15275675/pexels-photo-15275675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An art & design degree studies different visual media like painting, drawing, sculpture, and graphic design. Art and design majors learn basic design principles, color theory, critical thinking, and artistic techniques.',
    },
    {
      id: 2,
      name: 'Art & Illustrations',
      imageSrc: 'https://images.pexels.com/photos/8275209/pexels-photo-8275209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'a picture or diagram that helps make something clear or attractive. : an example or instance that helps make something clear.',
    },
    {
      id: 3,
      name: 'Creative Writing',
      imageSrc: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Creative writing, a form of artistic expression, draws on the imagination to convey meaning through the use of imagery, narrative, and drama. ',
    },
    {
      id: 4,
      name: 'Marketing Design',
      imageSrc: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Marketing Designers are marketing employees who specialize in graphic design. They bring the marketing vision to life by creating the actual publicity material. ',
    },
    {
      id: 7,
      name: 'Creative Writing',
      imageSrc: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Creative writing, a form of artistic expression, draws on the imagination to convey meaning through the use of imagery, narrative, and drama. ',
    },
    {
      id: 8,
      name: 'Marketing Design',
      imageSrc: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Marketing Designers are marketing employees who specialize in graphic design. They bring the marketing vision to life by creating the actual publicity material. ',
    },
    {
      id: 6,
      name: 'Art & Illustrations',
      imageSrc: 'https://images.pexels.com/photos/8275209/pexels-photo-8275209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'a picture or diagram that helps make something clear or attractive. : an example or instance that helps make something clear.',
    },
    {
      id: 5,
      name: 'Logo & Brand Identity',
      imageSrc: 'https://images.pexels.com/photos/15275675/pexels-photo-15275675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An art & design degree studies different visual media like painting, drawing, sculpture, and graphic design. Art and design majors learn basic design principles, color theory, critical thinking, and artistic techniques.',
    },
    
    // More products...
  ]
  
  export default function ExploreCategory() {
    return (
        
      <div className="bg-white">
        <div className="px-4 sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-3xl font-bold tracking-tight text-green-500 text-center">Explore Art & Design</h2>
        </div>
        <div className="mx-auto max-w-2xl py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 font-extrabold ">{product.name}</h3>
                <p className="mt-1 text-lg text-gray-900 line-clamp-3 font-light  ">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  