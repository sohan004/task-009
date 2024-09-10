import React from 'react';
import logo from '../../assets/logo.png'
import { FaHeadphonesAlt } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';

const LeftSideBar = ({sideBar, setSideBar}) => {
    return (
        <>
            {sideBar && <div
                onClick={() => setSideBar(false)}
                className='z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-30'></div>}
            <div className={`w-[250px] fixed top-0  z-50 bg-white h-screen md:static duration-500  md:border-r-2 flex flex-col ${sideBar ? 'left-0' : '-left-[250px]'}`}>
                <div className='p-4'>
                    <img src={logo} className='w-20' alt="" />
                </div>
                <div className='mt-10 flex-1'>
                    <ul className='grid gap-1'>
                        <li className='px-4 border-l-4 border-[#A1045A] bg-[#a1045a1a] py-2 text-xs md:text-sm font-semibold cursor-pointer'>
                            Order Overview</li>
                        <li className='px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer'>Recent Orders</li>
                        <li className='px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer'>Menus</li>
                        <li className='px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer'>Performance</li>
                    </ul>
                    <ul className='grid gap-1 mt-10'>
                        <li className='px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer'>Setting</li>
                        <li className='px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer'>Inbox</li>
                    </ul>
                </div>
                <div className='px-4'>
                    <div className=' border-t-2 py-4'>
                        <ul className='grid '>
                            <li className='px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer flex items-center gap-3'>
                                <FaHeadphonesAlt className='text-gray-600' />
                                Help Center</li>
                            <li className='px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer flex items-center gap-3'>
                                <FaArrowLeftLong className='text-gray-600' />
                                Logout</li>
                        </ul>
                        <p className='text-xs mt-2  text-gray-700'>Platfrom vendor Id: 44446</p>
                        <p className='text-xs mt-1  text-gray-700'>Dhaka | Bangladesh</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftSideBar;