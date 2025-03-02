function Menu() {
    return (
        <>
            <div className="flex-container border-b border-gray-200">
                <div className="flex-item">
                    <div className=" w-[500px] ml-4">
                        <div style={{ float: 'left' }}>
                            <img
                                src="/avatar_small.png"
                                alt="logo"
                                height={130}
                                width={130}
                            />
                        </div>
                        <div
                            className="-mt-[10px] ml-3"
                            style={{
                                float: 'left',
                            }}
                        >
                            <input
                                className="rounded-xl p-2 bg-gray-200 pr-40 text-sm mt-3"
                                type="text"
                                placeholder="What would you like to cook?"
                            />
                        </div>
                    </div>
                </div>
                <div className="sub-flex1 ">
                    <div className="sub-flex-item pt-3 -ml-3 text-xs">
                        <a href="#">What to cook</a>
                        <a href="#">Recipes</a>
                        <a href="#">Ingredients</a>
                        <a href="#">Occasions</a>
                        <a href="#">About Us</a>
                    </div>
                </div>
                <div className="sub-flex2 flex">
                    <div className="text-sm w-[150px] pt-2 -ml-[150px] flex bg-pink-200 p-2 rounded-xl">
                        <img
                            src="/archive_check.png"
                            alt=""
                            width={20}
                            className="mb-1"
                        />
                        <a href="#" className=" text-pink-400 ">
                            Your Recipe Box
                        </a>
                    </div>
                    <div className="ml-6">
                        <img src="/avatar.png" alt="avatar" width={40} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Menu;
