import React from 'react';

const ContentSection = () => {
    return (
        <div className="bg-blue-900 p-6">
            {' '}
            {/* Main container with dark blue background and padding */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
                {' '}
                {/* Container for columns, using flexbox */}
                {/* Column 1: Phân Hiệu Quảng Ngãi */}
                <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg">
                    {' '}
                    {/* Column container */}
                    <div className="bg-blue-800 text-white text-center py-3 font-bold">
                        PHÂN HIỆU QUẢNG NGÃI
                    </div>
                    <img
                        src="./src/assets/quangngai.png" // Replace with actual image URL
                        alt="Phân Hiệu Quảng Ngãi"
                        className="w-full h-48 object-cover" // Image styling
                    />
                    {/* Optional: Add more content like description or link */}
                </div>
                {/* Column 2: Cơ Sở Thanh Hóa */}
                <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg">
                    {' '}
                    {/* Column container */}
                    <div className="bg-blue-800 text-white text-center py-3 font-bold">
                        CƠ SỞ THANH HÓA
                    </div>
                    <img
                        src="./src/assets/thanhhoa.png" // Replace with actual image URL
                        alt="Cơ Sở Thanh Hóa"
                        className="w-full h-48 object-cover" // Image styling
                    />
                    {/* Optional: Add more content like description or link */}
                </div>
                {/* Column 3: Video và Hình Ảnh */}
                <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg relative">
                    {' '}
                    {/* Column container, relative for button positioning */}
                    <div className="bg-blue-800 text-white text-center py-3 font-bold flex justify-between items-center px-4">
                        <span>VIDEO VÀ HÌNH ẢNH</span>
                        <button className="bg-gray-200 text-blue-900 text-sm px-3 py-1 rounded">
                            Xem tất cả
                        </button>
                    </div>
                    {/* Video Thumbnail/Placeholder */}
                    <div className="relative w-full h-48 bg-cover bg-center">
                        <img src="./src/assets/video.png" alt="" className='h-47' />{' '}
                        {/* Replace with actual video thumbnail */}
                        {/* Optional: Add a play button icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Example Play Button (using a simple circle) */}
                            <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                                {/* Simple triangle for play icon */}
                                <svg
                                    className="w-6 h-6 text-blue-900"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
