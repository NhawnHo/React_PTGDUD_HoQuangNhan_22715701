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

            {/* Nội dung bên phải */}
            <div className="w-3/4 p-6">
                {/* Phần Thông Báo */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        THÔNG BÁO
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2">🔥</span>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600"
                            >
                                Thông báo v/v kế hoạch nghỉ hè đối với sinh viên
                                năm 2024
                            </a>
                            <span className="ml-2 text-red-600 text-sm">
                                [MỚI]
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2">🔥</span>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600"
                            >
                                Thông báo tuyển chọn nhóm sinh thực hiện đề tài
                                cho học sinh, sinh viên đại học Cần Thơ năm
                                2024-2025
                            </a>
                            <span className="ml-2 text-red-600 text-sm">
                                [MỚI]
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2">🔥</span>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600"
                            >
                                Đại học Công nghệ... 25-04-2025
                            </a>
                            <span className="ml-2 text-red-600 text-sm">
                                [MỚI]
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Phần Tin Tức - Sự Kiện */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        TIN TỨC - SỰ KIỆN
                    </h3>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Sự kiện"
                                className="mb-2"
                            />
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600"
                            >
                                AVETA tại triển giới phần mềm trí giá 180.000 ĐS
                                Mỹ
                            </a>
                            <p className="text-gray-600 text-sm">
                                Hội nghị Khoa học Quốc tế BẮC 2025 lần 2 tại
                                TP.HCM - Sức mạnh AI trong... 22-04-2025
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Sự kiện"
                                className="mb-2"
                            />
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600"
                            >
                                Đại học Công nghệ TP.HCM tham gia dự án Green
                                Edu Seeds của quý Erasmus 19-03-2025
                            </a>
                            <p className="text-gray-600 text-sm">
                                Học sinh viên năng... 24-03-2025
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default OrganizationalStructure;
