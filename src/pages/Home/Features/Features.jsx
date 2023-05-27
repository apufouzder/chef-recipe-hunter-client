

const Features = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content  py-20 text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Our Best Features Here!</h1>
                    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas est molestiae incidunt dolores odit cupiditate, repellat quibusdam minima impedit!</p>
                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Features;