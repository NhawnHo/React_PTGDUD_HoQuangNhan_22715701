import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    'https://iuh.edu.vn/Resource/Upload2/Image/2025/03/banner_iuh2.jpg',
    '	https://iuh.edu.vn/Resource/Upload2/Image/2025/02/BANNER%20FB_WEB-01%20(1).jpg',
    '	https://iuh.edu.vn/Resource/Upload2/Image/2025/03/banner%20web%20iuh%20-%20vr%20tour.png',
    'https://iuh.edu.vn/Resource/Upload2/Image/2024/12/banner%20web_fb%20te%CC%82%CC%81t%20dl2024-01.jpg',
    'https://iuh.edu.vn/Resource/Upload2/Image/2025/03/banner%20web%20iuh%20-%20vr%20tour.png',
];

export default function Banner() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
            >
                {images.map((imgSrc, index) => (
                    <div key={index}>
                        <img
                            src={imgSrc}
                            alt={`Slide ${index + 1}`}
                            className="object-cover h-64 md:h-96 w-full"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
