import { useEffect, useState } from 'react';

function RecipeSection() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://67cd3400dd7651e464ed9e48.mockapi.io/imageChefify')
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="px-6 py-10 bg-white">
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-2">
                This Summer Recipes
            </h2>
            <p className="text-center text-gray-500 mb-6">
                We have all your Independence Day sweets covered.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {recipes.slice(0, 4).map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow hover:shadow-md transition"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="rounded-t-xl h-40 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-800">
                                {item.name}
                            </h3>
                            <p className="text-pink-500 text-xs mt-1">
                                {item.time} minutes
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecipeSection;
