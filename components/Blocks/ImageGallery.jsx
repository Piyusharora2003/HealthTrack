import React, { useState, useEffect } from 'react';
import { images } from '../data';

function ImageGallery() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []); 

    return (
        <div className='h-full w-full p-6 rounded-lg' id='gall'>
            <div className="carousel w-full h-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src={images[index].image} className="w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;