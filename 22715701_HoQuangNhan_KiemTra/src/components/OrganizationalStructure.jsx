import React from 'react';

const OrganizationalStructure = () => {
    return (
        <div className="flex bg-gray-100">
            {/* Sidebar - Menu bên trái */}
            <div className="w-1/4 bg-white p-6 shadow-md">
                <h2 className="text-xl font-bold text-blue-800 mb-4">
                    CƠ CẤU TỔ CHỨC
                </h2>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600"
                        >
                            LÃNH ĐẠO
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-red-600 font-semibold">
                            CÁC PHÒNG BAN
                        </a>
                        <ul className="ml-4 mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    PHÒNG TỔ CHỨC - HÀNH CHÍNH
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    PHÒNG TÀI CHÍNH - KẾ TOÁN
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    PHÒNG KẾ HOẠCH - ĐẦU TƯ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    PHÒNG ĐÀO TẠO
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    PHÒNG CÔNG TÁC CHÍNH TRỊ VÀ HỖ TRỢ SINH VIÊN
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600"
                        >
                            CÁC KHOA
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600"
                        >
                            CÁC VIỆN
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600"
                        >
                            CÁC TRUNG TÂM
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600"
                        >
                            CÁC PHẦN HIỆU
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600"
                        >
                            ĐOÀN THỂ
                        </a>
                    </li>
                </ul>
            </div>

            
        </div>
    );
};

export default OrganizationalStructure;
