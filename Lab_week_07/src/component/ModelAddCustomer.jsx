import { useState } from 'react';

const ModalAddCustomer = ({ isOpen, onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [company, setCompany] = useState('');
    const [orderValue, setOrderValue] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = () => {
        if (
            !name ||
            !avatar ||
            !company ||
            !orderValue ||
            !orderDate ||
            !status
        ) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        const newUser = {
            name,
            avatar,
            company,
            orderValue,
            orderDate,
            status,
        };

        onAdd(newUser);

        // Reset input
        setName('');
        setAvatar('');
        setCompany('');
        setOrderValue('');
        setOrderDate('');
        setStatus('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-2xl relative w-[500px] max-h-[90vh] overflow-y-auto">
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                    onClick={onClose}
                >
                    ×
                </button>

                <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">
                    Thêm khách hàng
                </h2>

                <label className="block mb-2 font-bold">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <label className="block mb-2 font-bold">Avatar URL</label>
                <input
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <label className="block mb-2 font-bold">Company</label>
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <label className="block mb-2 font-bold">Order Value</label>
                <input
                    type="number"
                    value={orderValue}
                    onChange={(e) => setOrderValue(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <label className="block mb-2 font-bold">Order Date</label>
                <input
                    type="date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />

                <label className="block mb-2 font-bold">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                >
                    <option value="">-- Chọn trạng thái --</option>
                    <option value="New">New</option>
                    <option value="In_progress">Completed</option>
                    <option value="Complete">Pending</option>
                </select>

                <div className="flex justify-end gap-3">
                    <button
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Hủy
                    </button>
                    <button
                        className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600"
                        onClick={handleSubmit}
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddCustomer;
