import React from 'react';

const Slider = () => {
    return (
        <div className='w-1/2 overflow-x-scroll mx-auto'>
            <div className="flex flex-row overflow-x-scroll">
                <div className="w-[100vw] h-screen bg-slate-200"></div>
                <div className="w-[100vw] h-screen bg-slate-300"></div>
                <div className="w-[100vw] h-screen bg-slate-400"></div>
                <div className="w-[100vw] h-screen bg-slate-500"></div>
                <div className="w-[100vw] h-screen bg-slate-600"></div>
                <div className="w-[100vw] h-screen bg-slate-700"></div>
            </div>
        </div>
    );
};

export default Slider;