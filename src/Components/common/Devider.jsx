export default function Devider(props) {
    return (
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-3xl font-bold text-green-500">{props.title}</span>
        </div>
      </div>
    )
  }
  