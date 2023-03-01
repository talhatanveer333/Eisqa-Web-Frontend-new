export function TextArea(props){
    return(
      <div>
<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
<label className="block text-lg font-bold text-gray-500 sm:mt-px sm:pt-2">
  Gig Title
</label>
<div className="mt-1 sm:col-span-2 sm:mt-0">
  <textarea
    id="about"
    name="about"
    rows={3}
    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    defaultValue={''}
  />
  <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
</div>
</div>
</div>
    );
}
