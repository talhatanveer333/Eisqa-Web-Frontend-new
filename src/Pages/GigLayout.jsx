import Devider from "../Components/common/Devider";
import HeadingWithText from "../Components/common/HeadingWithText";
import SearchBar from "../Components/common/SearchBar";
import FamouseCategories from "../Components/Gig/FamousCategories";
import { AboutSeller } from "../Components/GigLayout/AboutSeller";
import ImageCrouseral from "../Components/GigLayout/ImageCrouseral";
import PricingSection from "../Components/GigLayout/PricingSection";
import { SellerDiscription } from "../Components/GigLayout/SellerDiscription";
import GigStats from "../Components/GigLayout/SellerStats";
import Layout from "./Layout";
import TopRated from '../Components/Gig/TopRated';
import Heading from "../Components/common/Heading";

export default function GigLayout(){
    return(
        <Layout>
            <SearchBar />
            <ImageCrouseral />
            <HeadingWithText title={'About This Gig'} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
            <div className="mt-10"></div>
            <HeadingWithText title={'Why me?'} text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}/>
            <div className="mt-10"></div>
            <HeadingWithText title={'Our Artistry Inspiration'} text={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}/>
            <div className="mt-10"></div>
            <Devider title={'About Seller'}/>
            <div className="mt-10"></div>
            <AboutSeller imageUrl={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} username={'Talha Tanveer'} level={'2'} intro={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in`}/>
            <div className="grid justify-items-center">
            <div className="mt-10 w-11/12">
            <GigStats />
            </div>
            </div>
            <div className="-mt-20"></div>
            <SellerDiscription />
            <div className="mt-20"></div>
            <PricingSection />
            <div className="mt-20"></div>
            <Heading />
            <TopRated />
        </Layout>        
    );
}