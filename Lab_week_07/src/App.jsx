import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
    const [overView, setOverView] = useState([]);
    const [array, setArray] = useState([]);
   

    useEffect(() => {
        fetch('https://67f6518142d6c71cca617d6a.mockapi.io/overView')
            .then((response) => response.json())
            .then((d) => {
                setOverView(d);
            });
    }, []);
    useEffect(() => {
        fetch('https://67f6518142d6c71cca617d6a.mockapi.io/customer')
            .then((response) => response.json())
            .then((d) => {
                setArray(d);
            });
    }, []);
    return (
        <>
            <div>
                <div className="grid grid-cols-10 container mx-auto shadow-2xl items-stretch">
                    <div className="grid col-span-2 p-5 border-r border-r-gray-200 ">
                        <Menu />
                    </div>
                    <div className="self-start grid col-span-8">
                        <div className="grid grid-cols-2 h-20 pt-5.5 border-b border-b-gray-200">
                            <Header />
                        </div>

                        <div className="flex">
                            <img
                                src="https://res.cloudinary.com/duongofji/image/upload/v1744188613/Squares_four_1_oixjvr.png"
                                alt=""
                                className="h-8"
                            />
                            <p className="ml-3 text-2xl font-bold">Overview</p>
                        </div>
                        <div className="grid grid-cols-3 gap-5 mt-5 ">
                            {array.length > 0 ? (
                                overView.map((item) => (
                                    <div
                                        key={item.id}
                                        className="grid col-span-1 bg-blue-200/50 rounded-sm"
                                    >
                                        <div className="grid grid-cols-4">
                                            <div className="grid col-span-3 p-5">
                                                <p className="text-lg font-bold">
                                                    {item.title}
                                                </p>
                                                <p className="text-4xl mt-2 font-bold">
                                                    {item.amount}
                                                </p>
                                                <div className="flex mt-5">
                                                    <p className="text-green-600 font-bold pr-1">
                                                        ^ {item.change}
                                                    </p>
                                                    <p className="text-gray-500">
                                                        period of change
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid col-span-1 justify-center -mt-18">
                                                <button>
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className="h-10"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="overflow-hidden rounded-2xl mt-5">
                            <table className="min-w-full table-auto border border-gray-200 text-sm text-left">
                                <thead className="bg-gray-100 text-gray-700 uppercase">
                                    <tr className="text-gray-500">
                                        <th className="p-3 ">
                                            <input
                                                className="w-4 h-4 accent-pink-500 cursor-pointer"
                                                type="checkbox"
                                            />
                                        </th>
                                        <th className="p-3">Customer Name</th>
                                        <th className="p-3">Company</th>
                                        <th className="p-3">Order Value</th>
                                        <th className="p-3">Order Date</th>
                                        <th className="p-3 text-center">
                                            Status
                                        </th>
                                        <th className="p-3"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {array.length > 0 ? (
                                        array.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="p-3">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 accent-pink-500 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="p-3 w-[250px]">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={item.avatar}
                                                            alt=""
                                                            className="w-8 h-8 rounded-full"
                                                        />
                                                        <p className="ml-2 font-bold">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="p-3">
                                                    {item.company}
                                                </td>
                                                <td className="p-3">
                                                    ${item.orderValue}
                                                </td>
                                                <td className="p-3">
                                                    {item.orderDate}
                                                </td>
                                                <td className="p-3 text-center">
                                                    <span
                                                        className={`px-2 py-1 rounded-2xl text-xs ${
                                                            item.status ===
                                                            'New'
                                                                ? 'bg-blue-100 text-blue-700'
                                                                : item.status ===
                                                                  'In-progress'
                                                                ? 'bg-yellow-100 text-yellow-700'
                                                                : 'bg-green-100 text-green-700'
                                                        }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <button className="text-pink-500 hover:underline">
                                                        <img
                                                            src="https://res.cloudinary.com/duongofji/image/upload/v1744188614/create_qj44ru.png"
                                                            alt="Action"
                                                            className="h-5 inline"
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-center p-5"
                                            >
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
