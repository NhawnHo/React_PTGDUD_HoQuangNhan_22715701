import { useEffect, useState } from 'react';

interface item {
    id: number;
    imageUrl: string;
    name: string;
}
function Product() {
    const [array, setArray] = useState<item[]>([]);
    useEffect(() => {
        fetch('https://67cd3400dd7651e464ed9e48.mockapi.io/imageChefify')
            .then((response) => response.json())
            .then((d: item[]) => {
                setArray(d);
                console.log(d);
            });
    }, []);
    return (
        <div>
            <div className="pt-6  w-[1216px] mb-8">
                <div className="grid grid-cols-4 gap-6">
                    {array.map((item) => (
                        <div
                            className="rounded-2xl border w-[290px] border-gray-200"
                            key={item.id}
                        >
                            <div className="">
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
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Product;
