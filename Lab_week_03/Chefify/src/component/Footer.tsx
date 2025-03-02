function Footer() {
    return (
        <>
            <div className=" footer h-96 grid grid-cols-4">
                <div className="col-span-2 text-left p-10 text-white">
                    <p className="font-bold">About Us</p>
                    <p>
                        welcome to our website, a wonderful place to explore and
                        learn how to cook like a pro
                    </p>
                    <div className="flex mt-3">
                        <input
                            className="rounded-lg p-2 bg-gray-200 pr-48 h-10 text-sm mt-3"
                            type="text"
                            placeholder="Enter your email..."
                        />
                        <button className="h-10 mt-3 ml-3  p-2 bg-pink-600">
                            Send
                        </button>
                    </div>
                    <div className="flex text-xs mt-28 ">
                        <img
                            src="/avatar_small.png"
                            alt=""
                            width={150}
                        />
                        <p className="ml-4 mt-4">2023 Chefify Company</p>
                        <p className="ml-7 mt-4">
                            Teams of Servicel Privacy Policy
                        </p>
                    </div>
                </div>
                <div className="col-span-1 text-left p-10 text-white">
                    <p className="font-bold">Learn More</p>
                    <p className="mt-2">
                        <a className="text-white font-normal" href="#">
                            Our Cooks
                        </a>
                    </p>
                    <p className="mt-2">
                        <a className="text-white font-normal" href="#">
                            See Our Features
                        </a>
                    </p>
                    <p className="mt-2">
                        <a className="text-white font-normal" href="#">
                            FAQ
                        </a>
                    </p>
                    <p className="font-bold mt-20">Shop</p>
                    <p className="mt-2">
                        <a className="text-white font-normal" href="#">
                            Gift Subscription
                        </a>
                    </p>
                    <p className="mt-2">
                        <a className="text-white font-normal" href="#">
                            Send Us Feedback
                        </a>
                    </p>
                </div>
                <div className="col-span-1 text-left p-10 text-white">
                    <p className="font-bold">Recipes</p>
                    <p className="mt-3">
                        <a className="text-white font-normal" href="#">
                            What to Cook This Week{' '}
                        </a>
                    </p>
                    <p className="mt-4">
                        <a className="text-white font-normal" href="#">
                            Pasta
                        </a>
                    </p>
                    <p className="mt-3">
                        <a className="text-white font-normal" href="#">
                            Dinner
                        </a>
                    </p>
                    <p className="mt-4">
                        <a className="text-white font-normal" href="#">
                            Healthy
                        </a>
                    </p>
                    <p className="mt-3">
                        <a className="text-white font-normal" href="#">
                            Vegetarian
                        </a>
                    </p>
                    <p className="mt-4">
                        <a className="text-white font-normal" href="#">
                            Vegan
                        </a>
                    </p>
                    <p className="mt-3">
                        <a className="text-white font-normal" href="#">
                            Christmas
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
export default Footer;
