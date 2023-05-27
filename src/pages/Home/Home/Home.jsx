import Features from "../Features/Features";
import BannerSection from "../BannerSection/BannerSection";
import BlogSection from "../BlogSection/BlogSection";
import ChefsSection from "../ChefsSection/ChefsSection";


const Home = () => {
    return (
        <div className="container mx-auto">
            <BannerSection />
            <ChefsSection />
            <Features />
            <BlogSection />
        </div>
    );
};

export default Home;