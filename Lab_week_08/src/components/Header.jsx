function Header() {
    return (
        <>
            <p className=" grid col-span-1 text-2xl font-bold text-pink-500 pl-7">
                Dashboard
            </p>
            <div className="flex col-span-1  justify-end pr-8">
                <div className=" flex bg-gray-200/50 justify-items-center h-9 pl-3 p-2 rounded-sm mr-3">
                    <img
                        src="https://res.cloudinary.com/duongofji/image/upload/v1744188612/Search_feka39.png"
                        alt="search"
                        className="h-5 "
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 w-80"
                    />
                </div>
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188613/Bell_1_zulk4y.png"
                    alt="thongbao"
                    className="h-7 mr-3 mt-1"
                />
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188611/Question_1_bidef5.png"
                    alt=""
                    className="h-7 mr-3 mt-1"
                />
                <img
                    src="https://res.cloudinary.com/duongofji/image/upload/v1744188614/Avatar_313_hn5lo5.png"
                    alt=""
                    className="h-10"
                />
            </div>
        </>
    );
}
export default Header;
