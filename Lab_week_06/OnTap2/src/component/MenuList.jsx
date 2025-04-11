import React, { useState, useEffect } from 'react';

function MenuList() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('src/data/menu.json')
            .then((response) => response.json())
            .then((data) => setMenu(data))
            .catch((error) => console.error('Lỗi khi tải dữ liệu:', error));
    }, []);

    return (
        <div className="mt-15 mb-15">
            <div className="grid grid-cols-3 gap-10 justify-items-center pl-60 pr-60">
                {menu.map((item) => (
                    <div
                        key={item.id}
                        className="col-span-1 justify-items-center shadow-2xl  rounded-3xl"
                    >
                        <div className='overflow-hidden rounded-t-3xl'>
                            <img
                                className="h-60 w-100 rounded-t-3xl transform-transition duration-300 hover:scale-150 ease-in-out"
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                        <div className="w-full p-5 rounded-b-3xl">
                            <p className="font-bold text-xl">{item.name}</p>
                            <p className="text-gray-400">{item.description}</p>
                            <p className="font-bold text-sx">
                                {item.price.toLocaleString()} VND
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuList;
