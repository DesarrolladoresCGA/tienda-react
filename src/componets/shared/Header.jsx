import React from 'react'
import { CiSearch } from "react-icons/ci";
export const Header = () => {
    return (

        <header>
            {/* Titulo y buscar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                    <p className="text-gray-500">26 Diciembre 2024</p>
                </div>
                <form>
                    <div className="w-full relative">
                        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none border-bg-[#1F1D2B]" placeholder="Search" />
                    </div>
                </form>

            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start border-b md:gap-8 mb-6">
                <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] text-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] ">Hot dishes</a>
                <a href="#" className="py-2 pr-4">Cold dishes</a>
                <a href="#" className="py-2 pr-4">Soup</a>
                <a href="#" className="py-2 ">Grill</a>
            </nav>
        </header>
    );
}
