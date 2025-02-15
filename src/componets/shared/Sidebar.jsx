import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FaCreativeCommonsSampling } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoNotificationsOutline,IoExitOutline  } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";


const Sidebar=(props)=>{

    const {showMenu} = props;
    return (
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                <ul className="pl-4">
                <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
                    <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                        <a href="#" className="bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-white">
                            <RiHome2Line className="text-2xl " />
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                            <RiVerifiedBadgeLine className="text-2xl "/>
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                            <FaCreativeCommonsSampling className="text-2xl"/>
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                            <MdOutlineMailOutline className="text-2xl"/>
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                            <IoNotificationsOutline className="text-2xl"/>
                        </a>
                    </li>
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                            <IoIosSettings className="text-2xl" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
            <ul className="pl-4">
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#ec7c6a] p-4 box-content flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                            <IoExitOutline className="text-2xl" />
                            
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar