import Heading from "../Components/common/Heading"
import SearchBar from "../Components/common/SearchBar"
import Blog from "../Components/Gig/Blog"
import ExploreCategory from "../Components/Gig/ExploreCategory"
import FamouseCategories from "../Components/Gig/FamousCategories"
import TopRated from "../Components/Gig/TopRated"
import Layout from "./Layout"


export default function Gigs() {
  return (
    <Layout>
      <SearchBar />
      <FamouseCategories />  
      <ExploreCategory />
      <div className="mt-20"></div>
      <Blog />
      <Heading />
      <TopRated />
      <div className="mt-20"></div>
    </Layout>
  )
}
