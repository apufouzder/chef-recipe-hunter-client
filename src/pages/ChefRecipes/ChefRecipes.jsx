import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = () => {
    const chef = useLoaderData();
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const handleFavoriteClick = (recipeName) => {
        setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipeName]);
        toast.success(`${recipeName} is added to your favorites!`)
    };

    return (
        <div>
            <div className="bg-gray-200 py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <img src={chef.chefPicture} alt={chef.chefName} className="h-52 w-52 rounded-full" />
                    </div>
                    <h2 className="mt-4 text-3xl leading-9 font-extrabold text-gray-900 text-center">{chef.chefName}</h2>
                    <p className="mt-2 text-lg text-gray-600 text-center">{chef.bio}</p>

                    <div className="mt-4 flex items-center justify-center">
                        <div className="flex items-center mr-4">
                            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0L5 10m7-7v18" />
                            </svg>
                            <span className="ml-1 text-gray-600">{chef.likes}</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <span className="ml-1 text-gray-600">{chef.numberOfRecipes}</span>
                        </div>
                        <div className="flex items-center ml-4">
                            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                            <span className="ml-1 text-gray-600">{chef.yearsOfExperience} years</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900">Recipes</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-8">
                    {chef.recipes?.map((recipe, index) => (
                        <div key={index} className="bg-white rounded-lg shadow">
                            <div className="p-6">
                                <h3 className="text-xl leading-6 font-medium text-gray-900">{recipe.recipeName}</h3>
                                <ul className="mt-4 space-y-2">
                                    {recipe.ingredients.map((ingredient, i) => (
                                        <li key={i} className="text-lg leading-5 text-gray-500">
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-lg leading-5 text-gray-500">{recipe.cookingMethod}</p>
                                <div className="mt-4">
                                    <div className="ml-1 flex items-center gap-2 mb-3 text-gray-600">
                                        <Rating style={{ maxWidth: 100 }} value={recipe.rating} readOnly />
                                        <span>{recipe.rating}</span>
                                    </div>
                                    <button className={`ml-auto bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none ${favoriteRecipes.includes(recipe.recipeName) ? 'cursor-not-allowed opacity-50' : ''
                                            }`}
                                        onClick={() => handleFavoriteClick(recipe.recipeName)}
                                        disabled={favoriteRecipes.includes(recipe.recipeName)}
                                    >
                                        {favoriteRecipes.includes(recipe.recipeName) ? 'Favorite' : 'Add to Favorites'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefRecipes;