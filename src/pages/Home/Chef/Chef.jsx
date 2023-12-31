/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";


const Chef = ({ chef }) => {
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience } = chef;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <LazyLoad>
                    <img src={chefPicture} alt="Shoes" className="rounded-lg" />
                </LazyLoad>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{chefName}</h2>

                <div className="stats my-3 shadow">
                    <div className="stat place-items-center">
                        <div className="stat-value text-2xl text-orange-400">{likes}</div>
                        <div className="stat-title">likes</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-value text-2xl text-orange-400">{numberOfRecipes}</div>
                        <div className="stat-title">Recipes</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-value text-2xl text-orange-400">{yearsOfExperience}</div>
                        <div className="stat-title">Experience</div>
                    </div>
                </div>

                <div className="card-actions">
                    <button className="btn btn-warning">
                        <Link to={`chefs/${id}`}>View Recipes</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chef;