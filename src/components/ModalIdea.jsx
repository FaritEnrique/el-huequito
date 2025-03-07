// components/ModalIdea.jsx
import React from 'react';

const ModalIdea = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl"
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalIdea;