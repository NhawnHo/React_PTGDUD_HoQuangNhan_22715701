import { useEffect, useState } from 'react';

function EditorPick() {
    const [recipes, setRecipes] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [moTa, setMoTa] = useState([]);

    useEffect(() => {
        fetch('https://67cd3400dd7651e464ed9e48.mockapi.io/imageChefify')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        'Network response was not ok ' + res.statusText,
                    );
                }
                return res.json();
            })
            .then((data) => setRecipes(data))
            .catch((err) => console.error('Error fetching recipes:', err));
    }, []);

    useEffect(() => {
        fetch('https://67f6518142d6c71cca617d6a.mockapi.io/customer')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        'Network response was not ok ' + response.statusText,
                    );
                }
                return response.json();
            })
            .then((data) => setCustomers(data))
            .catch((err) => console.error('Error fetching customers:', err));
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        'Network response was not ok ' + response.statusText,
                    );
                }
                return response.json();
            })
            .then((data) => setMoTa(data))
            .catch((err) => console.error('Error fetching moTa:', err));
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
                    const customer = customers[index % customers.length];

                    const descriptionSource =
                        moTa[index]?.body || item.description;

                    const truncatedDescription = descriptionSource
                        ? descriptionSource.split('.')[0] +
                          (descriptionSource.includes('.') ? '.' : '')
                        : '';

                    return (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md p-4 flex space-x-4 relative"
                        >
                            <div className="absolute top-4 right-0 z-10">
                                <img
                                    src="https://res.cloudinary.com/duongofji/image/upload/v1741511516/Icon_Button_73_gcskwm.png"
                                    alt="button"
                                />
                            </div>

                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-28 h-28 rounded-xl object-cover"
                            />

                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="font-semibold text-sm text-gray-800">
                                        {item.name}
                                    </h3>
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
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-2">
                                        {truncatedDescription}{' '}
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
