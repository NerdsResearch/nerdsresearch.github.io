// ImageSlideshow.tsx
import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css';

const ImageSlideshow: React.FC = () => {
    const imageUrls = [
        'ai1.jpg',
        'ai2.jpg',
        'ai3.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Set up a timer to automatically advance to the next image every 3 seconds
        const timer = setInterval(nextImage, 6000);

        // Clear the timer when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="slideshow-container">
            <div className="slideshow-nav">
                <button onClick={prevImage} className="nav-button prev-button">
                    &lt;
                </button>
                <button onClick={nextImage} className="nav-button next-button">
                    &gt;
                </button>
            </div>
            <img
                src={imageUrls[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="slideshow-image"
            />
        </div>
    );
};

export default ImageSlideshow;
