import React from 'react';

const Header = () => {
    return (
        <header className="w-screen bg-indigo-900 text-white py-2 px-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        {/* Icon có thể thêm sau */}
                        <span className="text-sm font-medium">E-OFFICE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">EMAIL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">
                            THƯ VIỆN - THÔNG TIN
                        </span>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium">KẾT NỐI | LIÊN HỆ</div>
                    <img
                        src="./src/assets/vietnam.png"
                        alt="Vietnam Flag"
                        className="w-6 h-4 object-cover"
                    />
                    <img
                        src="./src/assets/hoaki.png"
                        alt="UK Flag"
                        className="w-6 h-4 object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
