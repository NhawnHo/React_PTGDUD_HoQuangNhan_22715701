function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <h3 className="text-sm font-semibold mb-2">About Us</h3>
                    <p className="text-xs">
                        Welcome to our website, a wonderful place to explore and
                        learn how to cook like a pro.
                    </p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="mt-3 w-full px-3 py-1 rounded-md text-black"
                    />
                </div>
                <div>
                    <h3 className="text-sm font-semibold mb-2">Learn More</h3>
                    <ul className="text-xs space-y-1">
                        <li>Our Cooks</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold mb-2">Shop</h3>
                    <ul className="text-xs space-y-1">
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold mb-2">Recipes</h3>
                    <ul className="text-xs space-y-1">
                        <li>Pasta</li>
                        <li>Dinner</li>
                        <li>Healthy</li>
                        <li>Vegetarian</li>
                        <li>Vegan</li>
                        <li>Christmas</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-xs mt-6">
                <p>©2025 Chefify Company | Terms of Service | Privacy Policy</p>
            </div>
        </footer>
    );
}

export default Footer;
