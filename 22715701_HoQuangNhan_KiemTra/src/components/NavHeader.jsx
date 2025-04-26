import React from 'react';

const NavHeader = () => {
    const menuItems = [
        {
            name: 'GIỚI THIỆU',
            subItems: [
                'Giới thiệu chung',
                'Tầm nhìn - Sứ mạng - Mục tiêu chiến lược',
                'Triết lý giáo dục',
                'Phương châm hoạt động',
                'Giá trị cốt lõi',
                'Chính sách chất lượng',
                'Sơ đồ bộ máy tổ chức',
                'Cơ sở vật chất',
                'Đội ngũ',
                'Ba công khai',
                'Hệ thống nhận diện',
            ],
        },
        {
            name: 'ĐÀO TẠO',
            subItems: [
                'Đào tạo đại học',
                'Đào tạo sau đại học',
                'Chương trình liên kết',
            ],
        },
        {
            name: 'TUYỂN SINH',
            subItems: ['Tuyển sinh đại học', 'Tuyển sinh cao học'],
        },
        {
            name: 'NGHIÊN CỨU',
            subItems: ['Công trình nghiên cứu', 'Hợp tác nghiên cứu'],
        },
        {
            name: 'SINH VIÊN',
            subItems: ['Hỗ trợ sinh viên', 'Câu lạc bộ', 'Ký túc xá'],
        },
        {
            name: 'GIẢNG VIÊN',
            subItems: ['Tài liệu giảng dạy', 'Chính sách giảng viên'],
        },
        {
            name: 'VĂN BẰNG',
            subItems: ['Thông tin văn bằng', 'Tra cứu văn bằng'],
        },
    ];

    return (
        <header className="w-full bg-[#b9cfd7] text-[#1c1c5a] py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 relative">
                {/* Menu */}
                <nav className="flex items-center space-x-6">
                    {/* Home icon */}
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
                        <span>🏠</span>
                    </div>

                    {/* Dynamic Menu Items */}
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <button className="flex items-center space-x-1 font-bold uppercase hover:text-red-600">
                                <span>{item.name}</span>
                                <span>▼</span>
                            </button>

                            {/* Sub Menu */}
                            <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black shadow-md mt-2 w-56 z-10">
                                {item.subItems.map((subItem, subIndex) => (
                                    <div
                                        key={subIndex}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Search Box */}
                <div className="flex items-center ml-auto">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="rounded px-2 py-1 text-sm"
                    />
                </div>
            </div>
        </header>
    );
};

export default NavHeader;
