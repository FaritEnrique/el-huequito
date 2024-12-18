import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const CarruselMarcas = () => {
    const slides = [
        { url: 'https://i.ibb.co/313t9Zh/Carrusel1-sin-fondo.png' },
        { url: 'https://i.ibb.co/0YLtLWN/Carrusel2-sin-fondo.png' },
        { url: 'https://i.ibb.co/9cKY44s/Carrusel3-sin-fondo.png' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="p-8 justify-items-center rounded-xl rounded-br-xl">
            <div className="relative group max-w-[768px] mx-auto rounded-xl rounded-br-xl bg-white">
                {/* Imagen del carrusel */}
                <img 
                    className="w-full h-auto max-w-[920px] rounded-xl duration-500 transition-all transform scale-105" 
                    src={slides[currentIndex].url} 
                    alt={`Imagen ${currentIndex + 1}`} 
                />
                
                {/* Botón izquierdo */}
                <div 
                    className="absolute top-[80%] left-0 text-2xl transform -translate-y-1/2 p-1 md:p-2 bg-black/20 text-white cursor-pointer rounded-full"
                    onClick={prevSlide}
                >
                    <BsChevronCompactLeft size={25} />
                </div>
                
                {/* Botón derecho */}
                <div 
                    className="absolute top-[80%] right-0 text-2xl transform -translate-y-1/2 p-1 md:p-2 bg-black/20 text-white cursor-pointer rounded-full"
                    onClick={nextSlide}
                >
                    <BsChevronCompactRight size={25} />
                </div>
                
                {/* Indicadores de puntos fuera de la imagen */}
                <div className="absolute bottom-[-40px] w-full flex justify-center p-2">
                    {slides.map((slide, slideIndex) => (
                        <div 
                            key={slideIndex} 
                            onClick={() => goToSlide(slideIndex)} 
                            className="text-2xl cursor-pointer mx-1"
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarruselMarcas