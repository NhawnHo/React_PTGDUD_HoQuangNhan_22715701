import { useState, useEffect } from 'react';
import { useSearch } from './SearchContext';

interface Item {
    id: number;
    imageUrl: string;
    name: string;
}
function Filter() {
    const [array, setArray] = useState<Item[]>([]);
    const [soluong, setSoluong] = useState(0);
    const { search } = useSearch(); // Lấy search từ context

    useEffect(() => {
        fetch('https://67cd3400dd7651e464ed9e48.mockapi.io/imageChefify')
            .then((response) => response.json())
            .then((d: Item[]) => {
                setArray(d);
            });
    }, []);

    // Lọc danh sách theo từ khóa tìm kiếm
    const filteredArray = search
        ? array.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase()),
          )
        : array;
    const soluongItem = filteredArray.length;
    useEffect(() => {
        setSoluong(soluongItem);
    }, [soluongItem]);

    return (
        <>
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
                    <button className="bg-pink-600 text-white w-72 mb-3 rounded-lg pt-2 pb-2">
                        Apply
                    </button>
                </div>
            </div>
            <div className="content  ">
                <div>
                    {filteredArray.length != 0 ? (
                        <p className="mt-14 text-4xl font-bold text-left ml-5">
                            {search}({soluong})
                        </p>
                    ) : null}
                </div>

                <div className="grid grid-cols-3 mt-9 ml-5">
                    {filteredArray.length > 0 ? (
                        filteredArray.map((item) => (
                            <div
                                className="rounded-2xl border w-[200px] border-gray-200 mb-5  "
                                key={item.id}
                            >
                                <div>
                                    <img
                                        className="w-[200px] h-[120px] rounded-t-2xl"
                                        src={item.imageUrl}
                                        alt="Hình ảnh"
                                    />
                                </div>
                                <div className="p-3 h-[100px]">
                                    <div className="flex h-16">
                                        <p className="mr-10 text-left text-sm font-bold w-28">
                                            {item.name}
                                        </p>
                                        <p>
                                            <img
                                                src="https://res.cloudinary.com/duongofji/image/upload/v1741511516/Icon_Button_73_gcskwm.png"
                                                alt=""
                                                width={28}
                                            />
                                        </p>
                                    </div>
                                    <p className="text-pink-500 bg-pink-100 w-24 rounded-xl text-xs ">
                                        {Math.floor(Math.random() * 30) + 20}{' '}
                                        minutes
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h3 className="text-2xl mt-10 ml-32 font-bold mb-5 w-[540px]">
                                Sorry, no results were found for "cakescascsa"
                            </h3>
                            <img
                                src="/error.png"
                                alt="error"
                                width={190}
                                className="ml-[300px] mb-2"
                            />
                            <p className="mb-5 w-96 ml-52  ">
                                We have all your independence Day sweets
                                covered.
                            </p>
                            <div className="flex w-[600px] ml-48 text-xs">
                                <p className="text-pink-600 bg-pink-100 w-24 p-2 rounded-full mr-2 ml-1">
                                    Sweet Cake
                                </p>
                                <p className="text-purple-600 bg-purple-100 w-24 p-2 rounded-full mr-2">
                                    Black Cake
                                </p>
                                <p className="text-pink-600 bg-pink-100 w-24 p-2 rounded-full mr-2">
                                    Pozole Verde
                                </p>
                                <p className="text-sky-700 bg-sky-100 w-24 p-2 rounded-full">
                                    Healthy Food
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Filter;
