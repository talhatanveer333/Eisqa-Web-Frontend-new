export default function HeadingWithText(props){
    return(
<div className="mx-auto max-w-md px-6 sm:max-w-lg lg:max-w-7xl lg:px-8">
  <h3 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
    {props.title}
  </h3>
  <p className="mx-auto  text-xl text-gray-500">
    {props.text}
  </p>
</div>
    );
}