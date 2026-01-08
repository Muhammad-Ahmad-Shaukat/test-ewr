import React from "react";

export function ScrollStackItem({ children, className = "" }) {
    return (
        <div className={`sticky top-20 min-h-[50vh] flex flex-col items-center text-center justify-center bg-[#111111] border border-white/10 rounded-[20px] p-10 md:p-14 mb-10 last:mb-0 transition-all duration-500 shadow-xl ${className}`}>
            {children}
        </div>
    );
}

export default function ScrollStack({ children, className = "" }) {
    return (
        <div className={`w-full relative px-5 py-20 ${className}`}>
            {children}
        </div>
    );
}
