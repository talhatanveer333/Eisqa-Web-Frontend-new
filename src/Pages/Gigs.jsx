import Blog from "../Components/Gig/Blog"
import ExploreCategory from "../Components/Gig/ExploreCategory"
import FamouseCategories from "../Components/Gig/FamousCategories"
import Layout from "./Layout"

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
export default function Gigs() {
  return (
    <Layout>
      <FamouseCategories />  
      <ExploreCategory />
      <div className="mt-20"></div>
      <Blog />
    </Layout>
  )
}
