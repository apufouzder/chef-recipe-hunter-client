import bannerImg from "../../../assets/images/chef-banner.png";

const BannerSection = () => {
    return (
        <>
            <div className="flex items-center my-10 px-6 lg:flex-row flex-col justify-around gap-10">
                <div>
                    <h1 className="text-5xl text-gray-700 leading-tight font-bold">Your EveryDay <br /> Cooking <span className="text-orange-400">Inspiration🍕</span></h1>
                    <p className="py-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa reprehenderit <br /> provident explicabo dolores eveniet eaque voluptas obcaecati saepe quas?</p>
                    <div className="mb-8">
                        <button className="btn border-0 bg-orange-500">Get Started</button>
                    </div>

                    <div className="stats shadow">
                        <div className="stat place-items-center">
                            <div className="stat-value text-orange-400">301K</div>
                            <div className="stat-title">Recipe</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value text-orange-400">20K</div>
                            <div className="stat-title">User</div>
                        </div>
                        <div className="stat place-items-center">
                        <div className="stat-value text-orange-400">30+</div>
                            <div className="stat-title">Features</div>
                        </div>
                    </div>

                </div>
                <img src={bannerImg} className="max-w-md rounded-lg" />
            </div>
        </>
    );
};

export default BannerSection;