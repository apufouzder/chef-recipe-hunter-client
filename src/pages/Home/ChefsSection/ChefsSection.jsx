import { useEffect, useState } from "react";
import Chef from "../Chef/Chef";


const ChefsSection = () => {
    const [chefs, setChefs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data.chefs))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="my-24">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Our Talented <span className="text-orange-500">Chefs</span></h1>
                <p className="text-gray-700 text-lg">Meet our team of talented Bangladeshi chefs who are passionate about creating delicious and authentic dishes. <br /> Get ready to indulge in a culinary journey through the rich and diverse tastes of Bangladesh!</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef} />)
                }
            </div>
        </div>
    );
};

export default ChefsSection;