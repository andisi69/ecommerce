import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Carousel = ({ images, interval = 5000 }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressStep = 100 / (interval / 100); 

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + progressStep; 
                } else {
                    return 100;
                }
            });
        }, 100); 

        if (progress >= 100) {
             
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
            setProgress(0);  
        }

        return () => clearInterval(progressInterval);
    }, [progress, interval, images.length]);

    
    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        setProgress(0); 
    };

    return (
        <div className="bg-slate-100 relative w-full h-48 sm:h-56 md:h-64 lg:h-[360px] overflow-hidden">
            <TransitionGroup className="flex transition-transform duration-500 ease-in-out">
                <CSSTransition
                    key={currentIndex}
                    classNames="slide"
                    timeout={500} // Koha e animacionit
                >
                    <div className="min-w-full">
                        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-[180px] sm:h-[250px] md:h-[360px] object-cover" />
                    </div>
                </CSSTransition>
            </TransitionGroup>

            <div 
                className="
                    absolute 
                    left-0 
                    right-0 
                    flex 
                    justify-center 
                    space-x-2 
                    z-10  
                    bottom-5  
                    sm:bottom-6 
                    md:bottom-4 
                    lg:bottom-2
                "
            >
                {images.map((_, index) => (
                    <div 
                        key={index} 
                        className="w-16 h-2 rounded bg-gray-300 relative cursor-pointer" 
                        onClick={() => handleIndicatorClick(index)} 
                    >
                        <div
                            className={`h-full bg-black transition-all ease-in-out duration-500 absolute bottom-0`}
                            style={{
                                width: index === currentIndex ? `${progress}%` : '0%',
                            }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

