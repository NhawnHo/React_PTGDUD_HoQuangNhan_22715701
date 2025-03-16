import { useEffect, useState } from 'react';
import { useSearch } from './SearchContext'; // Import context

interface Item {
    id: number;
    imageUrl: string;
    name: string;
}

function Product() {
    const [array, setArray] = useState<Item[]>([]);
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
        : array; // Nếu search rỗng, lấy toàn bộ danh sách

    return (
        <div>
            <div className="pt-6  w-[1216px] mb-8">
                <div className="grid grid-cols-4 gap-6">
                    {filteredArray.length > 0 ? (
                        filteredArray.map((item) => (
                            <div
                                className="rounded-2xl border w-[290px] border-gray-200"
                                key={item.id}
                            >
                                <div>
                                    <img
                                        className="w-[288px] h-[180px] rounded-t-2xl"
                                        src={item.imageUrl}
                                        alt="Hình ảnh"
                                    />
                                </div>
                                <div className="p-3 h-[120px]">
                                    <div className="flex h-16">
                                        <p className="mr-10 text-left font-bold w-44">
                                            {item.name}
                                        </p>
                                        <p className="w-[40px] ">
                                            <img
                                                className="text-right"
                                                src="https://res.cloudinary.com/duongofji/image/upload/v1741511516/Icon_Button_73_gcskwm.png"
                                                alt=""
                                            />
                                        </p>
                                    </div>
                                    <p className="text-pink-500 bg-pink-100 w-24 rounded-xl ">
                                        {Math.floor(Math.random() * 30) + 20}{' '}
                                        minutes
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;
