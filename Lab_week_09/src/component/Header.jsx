import Search from './Search';

function Header() {
    return (
        <div className="grid grid-cols-6 items-center px-6 py-4 border-b border-gray-200 bg-white">
            {/* Cột 1: Logo + Search */}
            <div className=" col-span-3 flex items-center space-x-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/avatar_small.png" alt="logo" height={30} />
                    <span className="text-pink-600 font-bold text-xl">
                        Chefify
                    </span>
                </div>

                {/* Search */}
                <Search/>
            </div>

            {/* Cột 2: Navigation */}
            <div className="col-span-2 flex justify-center space-x-6 text-sm text-gray-600">
                <a href="#" className="hover:text-pink-500">
                    What to cook
                </a>
                <a href="#" className="hover:text-pink-500">
                    Recipes
                </a>
                <a href="#" className="hover:text-pink-500">
                    Ingredients
                </a>
                <a href="#" className="hover:text-pink-500">
                    Occasions
                </a>
                <a href="#" className="hover:text-pink-500">
                    About Us
                </a>
            </div>

            {/* Cột 3: Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="text-pink-500 px-4 py-1 text-sm rounded-full border border-pink-500 hover:bg-pink-50">
                    Login
                </button>
                <button className="bg-pink-500 text-white px-4 py-1 text-sm rounded-full hover:bg-pink-600">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default Header;
