import { useEffect, useState } from 'react';

function EditorPick() {
    const [recipes, setRecipes] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://67cd3400dd7651e464ed9e48.mockapi.io/imageChefify')
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://67f6518142d6c71cca617d6a.mockapi.io/customer')
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="px-6 py-10 bg-white">
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-2">
                Editor&apos;s pick
            </h2>
            <p className="text-center text-gray-500 mb-6">
                Curated Culinary Delights: Handpicked Favorites by Our Expert
                Editors!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recipes.slice(4, 8).map((item, index) => {
                    const customer = customers[index % customers.length]; // lặp nếu thiếu
                    return (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md p-4 flex space-x-4"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-28 h-28 rounded-xl object-cover"
                            />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="font-semibold text-sm text-gray-800">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-2">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    {customer && (
                                        <>
                                            <img
                                                src={customer.avatar}
                                                alt={customer.name}
                                                className="w-6 h-6 rounded-full"
                                            />
                                            <p className="text-xs text-gray-600">
                                                {customer.name}
                                            </p>
                                        </>
                                    )}
                                    <p className="text-xs text-pink-500 ml-auto">
                                        {item.time} minutes
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default EditorPick;
