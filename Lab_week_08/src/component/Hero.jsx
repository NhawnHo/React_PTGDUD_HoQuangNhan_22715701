function Hero() {
    return (
        <section className="relative">
            <img
                src="https://res.cloudinary.com/duongofji/image/upload/v1744529293/Image_73_pbjcyx.png"
                alt="hero"
                className=" h-full w-full object-cover"
            />
            <div className="absolute top-[20%] left-[10%] bg-white rounded-xl p-6 shadow-lg w-[300px]">
                <div className="text-xs bg-yellow-400 text-white inline-block px-2 py-1 rounded-full mb-2">
                    Recipe of the day
                </div>
                <h2 className="text-pink-600 font-bold text-lg">
                    Salad Caprese
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    Classic Italian Salad Caprese: ripe tomatoes, fresh
                    mozzarella, basil, olive oil, and balsamic vinegar create a
                    refreshing dish for lunch or appetizer.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                    <img
                        src="/avatar_small.png"
                        alt=""
                        width={30}
                        className="rounded-full"
                    />
                    <span className="text-xs font-medium">Salad Caprese</span>
                </div>
                <button className="mt-4 text-white bg-pink-500 px-4 py-1 text-sm rounded-full hover:bg-pink-600">
                    View now →
                </button>
            </div>
        </section>
    );
}

export default Hero;
