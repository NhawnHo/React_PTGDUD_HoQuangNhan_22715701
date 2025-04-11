import { useEffect, useState } from 'react';
import ModelUpdate from '../components/ModelUpdate';
import ModalAddCustomer from '../components/ModelAddCustomer';
import Menu from '../components/Menu';
import Header from '../components/Header';

function Dashboard() {
    const [overView, setOverView] = useState([]);
    const [array, setArray] = useState([]);
    const [itemArray, setItemArray] = useState([]);
    const [page, setPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        fetch('https://67f6518142d6c71cca617d6a.mockapi.io/customer')
            .then((response) => response.json())
            .then((d) => {
                setArray(d);
                setItemArray(d.slice(0, itemsPerPage));
                const totalPages = Math.ceil(d.length / itemsPerPage);
                const pageNumbers = Array.from(
                    { length: totalPages },
                    (_, i) => i + 1,
                );
                setPage(pageNumbers);
            });
    }, []);

    useEffect(() => {
        fetch('https://67f6518142d6c71cca617d6a.mockapi.io/overView')
            .then((response) => response.json())
            .then((d) => {
                setOverView(d);
            });
    }, []);

    const handlePageClick = (p) => {
        setCurrentPage(p);
        const startIndex = (p - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setItemArray(array.slice(startIndex, endIndex));
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = async (updatedItem) => {
        try {
            const response = await fetch(
                `https://67f6518142d6c71cca617d6a.mockapi.io/customer/${updatedItem.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: updatedItem.name,
                        avatar: updatedItem.avatar,
                        company: updatedItem.company,
                    }),
                },
            );

            if (response.ok) {
                const updated = await response.json();

                // Cập nhật danh sách tổng thể
                const newArray = array.map((item) =>
                    item.id === updated.id ? updated : item,
                );

                setArray(newArray);

                // Cập nhật lại phần hiển thị theo trang hiện tại
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                setItemArray(newArray.slice(startIndex, endIndex));
                alert('Cập nhật thành công!');

                // Đóng modal
                setIsModalOpen(false);
            } else {
                console.error('Lỗi khi cập nhật:', response.statusText);
            }
        } catch (error) {
            console.error('Lỗi PUT API:', error);
        }
    };
    const handleAddCustomer = async (newCustomer) => {
        try {
            const response = await fetch(
                'https://67f6518142d6c71cca617d6a.mockapi.io/customer',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCustomer),
                },
            );

            if (response.ok) {
                const added = await response.json();

                const newArray = [...array, added];
                setArray(newArray);

                // Cập nhật lại dữ liệu hiển thị trong trang hiện tại
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                setItemArray(newArray.slice(startIndex, endIndex));

                setIsAddModalOpen(false); // đóng modal sau khi thêm
            } else {
                console.error('Lỗi khi thêm khách hàng:', response.statusText);
            }
        } catch (error) {
            console.error('Lỗi POST API:', error);
        }
    };

    return (
        <>
            {/* overview & detailed report */}
            <div className="p-6 mt-2">
                <div className="flex">
                    <img
                        src="https://res.cloudinary.com/duongofji/image/upload/v1744188613/Squares_four_1_oixjvr.png"
                        alt=""
                        className="h-8"
                    />
                    <p className="ml-3 text-2xl font-bold">Overview</p>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-5 ">
                    {overView.length > 0 ? (
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
                <div className="grid grid-cols-2 mt-8">
                    <div className="flex">
                        <img
                            src="https://res.cloudinary.com/duongofji/image/upload/v1744188611/File_text_1_jwvhth.png"
                            alt=""
                            className="h-8"
                        />
                        <p className="ml-3 text-2xl font-bold">
                            Detailed report
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="flex border border-pink-500 text-pink-500 rounded-lg px-3 py-2"
                            onClick={() => setIsAddModalOpen(true)}
                        >
                            <img
                                src="https://res.cloudinary.com/duongofji/image/upload/v1744188611/Download_qoyc0m.png"
                                alt="import"
                                className="h-5"
                            />
                            <p className="ml-1">Import</p>
                        </button>
                        <ModalAddCustomer
                            isOpen={isAddModalOpen}
                            onClose={() => setIsAddModalOpen(false)}
                            onAdd={handleAddCustomer}
                        />

                        <button className="flex border border-pink-500 text-pink-500 rounded-lg px-3 py-2 ml-3">
                            <img
                                src="https://res.cloudinary.com/duongofji/image/upload/v1744188612/Move_up_deiiqh.png"
                                alt="export"
                                className="h-5"
                            />
                            <p className="ml-1">Export</p>
                        </button>
                    </div>
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
                                <th className="p-3 text-center">Status</th>
                                <th className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {itemArray.length > 0 ? (
                                itemArray.map((item) => (
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
                                        <td className="p-3">{item.company}</td>
                                        <td className="p-3">
                                            ${item.orderValue}
                                        </td>
                                        <td className="p-3">
                                            {item.orderDate}
                                        </td>
                                        <td className="p-3 text-center">
                                            <span
                                                className={`px-2 py-1 rounded-2xl text-xs ${
                                                    item.status === 'New'
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
                                            <button
                                                className="text-pink-500 hover:underline"
                                                onClick={() => handleEdit(item)}
                                            >
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
                                    <td colSpan="7" className="text-center p-5">
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {/* Gọi Modal */}
                    <ModelUpdate
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onSave={handleSave}
                        item={selectedItem}
                    />
                </div>
                <div className="grid grid-cols-2 mt-5">
                    <p className="text-gray-500">{array.length} results</p>
                    {/* Pagination */}
                    <div className="flex justify-end">
                        {page.map((p) => (
                            <button
                                key={p}
                                onClick={() => handlePageClick(p)}
                                className={`mx-1 px-3 py-1 rounded-3xl ${
                                    currentPage === p
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-white text-pink-500'
                                }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dashboard;
