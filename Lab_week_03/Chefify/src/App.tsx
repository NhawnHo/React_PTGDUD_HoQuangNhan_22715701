import './App.css';
import Footer from './component/Footer';
import Menu from './component/Menu';
import './index.css';

function App() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <Menu />
                </div>
                {/* filter */}
                <div className="filter pl-24 pt-14 pb-24">
                    <div className="border border-gray-300 rounded-xl p-5">
                        <div className="flex">
                            <img src="/List1.png" alt="List" />
                            <h2 className="font-bold text-xl ">FILTERS</h2>
                        </div>
                        <div className="flex mt-10 mb-4">
                            <h4 className="font-bold">Type</h4>
                            <img
                                src="/Chevronuplarge1.png"
                                alt=""
                                className="ml-60"
                            />
                        </div>
                        <div className=" border-b border-grey-300 mb-4">
                            <div className="grid grid-cols-2 gap-2 mb-5">
                                <div className="flex items-center">
                                    <img src="/Checkbox6.png" alt="" />
                                    <p>Pan-fried</p>
                                </div>
                                <div className="flex items-center">
                                    <img src="/Checkbox6.png" alt="" />
                                    <p>Stir-fried</p>
                                </div>
                                <div className="flex items-center">
                                    <img src="/Checkbox8.png" alt="" />
                                    <p>Grilled</p>
                                </div>
                                <div className="flex items-center">
                                    <img src="/Checkbox8.png" alt="" />
                                    <p>Roasted</p>
                                </div>
                                <div className="flex items-center">
                                    <img src="/Checkbox6.png" alt="" />
                                    <p>Sautees</p>
                                </div>
                                <div className="flex items-center">
                                    <img src="/Checkbox6.png" alt="" />
                                    <p>Baked</p>
                                </div>
                                <div className="flex items-center">
                                    <img src="/Checkbox6.png" alt="" />
                                    <p>Steamed</p>
                                </div>
                                <div className="flex items-center">
                                    <img src="/Checkbox6.png" alt="" />
                                    <p>Stewed</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-3">
                            <h4 className="font-bold">Time</h4>
                            <img
                                src="/Chevronuplarge1.png"
                                alt=""
                                className="ml-60"
                            />
                        </div>
                        <div className=" border-b border-grey-300 pb-6 ">
                            <div className="time flex text-xs">
                                <p>30 minutes</p>
                                <p>50 minutes</p>
                            </div>
                            <img src="/Slider1.png" alt="" />
                        </div>
                        <div className="flex mt-10 mb-4">
                            <h4 className="font-bold">Rating</h4>
                            <img
                                src="/Chevronuplarge1.png"
                                alt=""
                                className="ml-[228px]"
                            />
                        </div>

                        <div className="rating border-b border-grey-300 pb-5 mb-10">
                            <div className="flex">
                                <img src="/Checkbox6.png" alt="" />
                                <img src="/Rating13.png" alt="" />
                            </div>
                            <div className="flex">
                                <img src="/Checkbox6.png" alt="" />
                                <img src="/Rating12.png" alt="" />
                            </div>
                            <div className="flex">
                                <img src="/Checkbox8.png" alt="" />
                                <img src="/Rating14.png" alt="" />
                            </div>
                            <div className="flex">
                                <img src="/Checkbox8.png" alt="" />
                                <img src="/Rating15.png" alt="" />
                            </div>
                            <div className="flex">
                                <img src="/Checkbox8.png" alt="" />
                                <img src="/Rating11.png" alt="" />
                            </div>
                        </div>
                        <button className="bg-pink-600 text-white w-72 mb-3">
                            Apply
                        </button>
                    </div>
                </div>
                <div className="content pt-20 ">
                    <h3 className="text-2xl font-bold mb-5">
                        Sorry, no results were found for "cakescascsa"
                    </h3>
                    <img
                        src="/error.png"
                        alt="error"
                        width={190}
                        className="ml-[300px] mb-2"
                    />
                    <p className="mb-5">
                        We have all your independence Day sweets covered.
                    </p>
                    <div className="errsearch flex">
                        <p className="text-pink-600 bg-pink-100">Sweet Cake</p>
                        <p className="text-purple-600 bg-purple-100">
                            Black Cake
                        </p>
                        <p className="text-pink-600 bg-pink-100">
                            Pozole Verde
                        </p>
                        <p className="text-sky-700 bg-sky-100">Healthy Food</p>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
