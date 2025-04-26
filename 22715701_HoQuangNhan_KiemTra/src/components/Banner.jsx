export default function Banner() {
    return (
        <div className="relative h-64 md:h-80 bg-gradient-to-r from-sky-300 to-blue-400 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                    <div className="text-red-600 font-bold text-xl md:text-2xl mb-2">
                        CHÀO MỪNG KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">
                            50
                        </div>
                        <div className="text-red-600 font-bold text-2xl md:text-3xl">
                            HÒA BÌNH - PHÁT TRIỂN
                        </div>
                    </div>
                    <div className="text-white mt-2">
                        Vươn tầm cao mới, hướng tới tương lai
                    </div>
                </div>
            </div>
        </div>
    );
}
