export default function UniversityFooter() {
    return (
        <footer className=" text-gray-800 w-full">
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-300 pb-6">
                    {/* Contact Section */}
                    <div>
                        <h2 className="text-red-800 font-bold text-lg mb-3">
                            LIÊN HỆ
                        </h2>
                        <div className="space-y-2 text-sm">
                            <p className="font-bold">
                                ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
                            </p>
                            <p>
                                Địa chỉ : Số 12 Nguyễn Văn Bảo, Phường 4, Quận
                                Gò Vấp, Thành phố Hồ Chí Minh
                            </p>
                            <p>
                                Điện thoại:{' '}
                                <a
                                    href="tel:02838940390"
                                    className="hover:underline"
                                >
                                    028 3894 0390
                                </a>{' '}
                                - 100
                            </p>
                            <p>
                                Tuyển sinh:{' '}
                                <a
                                    href="tel:02839851932"
                                    className="hover:underline"
                                >
                                    028 3985 1932
                                </a>{' '}
                                -
                                <a
                                    href="tel:02838955858"
                                    className="hover:underline"
                                >
                                    {' '}
                                    028 3895 5858
                                </a>{' '}
                                -
                                <a
                                    href="tel:02839851917"
                                    className="hover:underline"
                                >
                                    {' '}
                                    028 3985 1917
                                </a>
                            </p>
                            <p>
                                Email:{' '}
                                <a
                                    href="mailto:dhcn@iuh.edu.vn"
                                    className="hover:underline"
                                >
                                    dhcn@iuh.edu.vn
                                </a>
                            </p>
                        </div>
                        <div className="mt-4">
                            <img
                                src="/placeholder.svg?height=60&width=200"
                                alt="IUH Logo"
                                width="200"
                                height="60"
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Other Activities Section */}
                    <div>
                        <h2 className="text-red-800 font-bold text-lg mb-3">
                            HOẠT ĐỘNG KHÁC
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:underline">
                                    Hoạt động phục vụ cộng đồng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Sinh viên tình nguyện
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    CLB/Đội/Nhóm sinh viên
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Kết nối doanh nghiệp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Extended Information Section */}
                    <div>
                        <h2 className="text-red-800 font-bold text-lg mb-3">
                            THÔNG TIN MỞ RỘNG
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:underline">
                                    Báo chí viết về IUH
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Khám phá IUH
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Kỹ năng mềm
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Bộ sưu tập
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Dịch vụ sinh viên
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Documents Section */}
                    <div>
                        <h2 className="text-red-800 font-bold text-lg mb-3">
                            VĂN BẢN TIỆN ÍCH
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:underline">
                                    Quy chế-Quy định-Quy trình
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Ba công khai
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Biểu mẫu đào tạo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Quản lý khoa học
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Phản hồi
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Stats and Social Media */}
                <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-300">
                    <div className="flex flex-col md:flex-row gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">👥</span>
                            <span>Số lượt truy cập : 288,835,923</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">👥</span>
                            <span>Hôm nay : 22,272</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">👁️</span>
                            <span>Đang xem : 63</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span className="text-sm">Chia sẻ</span>
                        <a
                            href="#"
                            className="bg-blue-600 p-1 rounded inline-block w-7 h-7 text-center"
                        >
                            <span className="text-white">f</span>
                        </a>
                        <a
                            href="#"
                            className="bg-blue-400 p-1 rounded inline-block w-7 h-7 text-center"
                        >
                            <span className="text-white">t</span>
                        </a>
                        <a
                            href="#"
                            className="bg-blue-700 p-1 rounded inline-block w-7 h-7 text-center"
                        >
                            <span className="text-white">in</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-4 text-xs">
                    <p>
                        © Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí
                        Minh
                    </p>
                    <p className="italic mt-1">
                        Mọi hành động sử dụng nội dung đăng tải trên Website
                        iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học
                        Công nghiệp Thành phố Hồ Chí Minh.
                    </p>
                </div>
            </div>
        </footer>
    );
}
