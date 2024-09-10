import React from 'react';
import logo from '../../assets/logo.png'
import { IoIosBicycle, IoMdClose, IoMdPrint } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';

const Modal = ({isPopup, setIsPopup}) => {
    return (
        <div>
            {isPopup && <div className='z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-25'>
  </div>}
      <div
        className={`fixed top-2/4 z-50 left-2/4 overflow-hidden -translate-x-2/4 -translate-y-2/4 bg-white  max-w-[550px] w-full h-full md:h-[95%] flex flex-col rounded  duration-300  ${isPopup ? 'scale-100 opacity-100 visible' : 'scale-75 opacity-0 invisible'}`}>
        <div className='overflow-y-auto flex-1 '>
          <div className='p-3 flex items-center justify-between'>
            <IoMdClose
              onClick={() => setIsPopup(false)}
              className='text-xl cursor-pointer' />
            <p className='text-sm font-semibold text-[#A1045A]'>Decline</p>
          </div>
          <div className='px-6 mt-5 flex items-center justify-between'>
            <div className='flex items-center gap-3 '>
              <img className='w-14' src={logo} alt="" />
              <p className=' font-semibold'>Test restaurant</p>
            </div>
            <IoMdPrint className='text-xl text-gray-700' />
          </div>
          <div className='border-l-4 px-6 mt-5 border-[#A1045A] flex w-full justify-between items-start gap-2'>
            <div className='flex-1'>
              <h3 className='text-xl font-extrabold'>Order #6659</h3>
              <p className='font-medium'>xxxx-1234</p>
            </div>
            <p className='font-medium text-sm'>11 mins</p>
          </div>
          <div className='px-6 mt-4 border-b pb-4'>
            <button className="btn text-[12px] px-2 py-1 bg-[#a1045a10] text-[#A1045A] uppercase rounded-sm font-bold ">Test Order</button>
          </div>
          <div className='mt-5 px-6'>
            <div className='flex items-center gap-4'>
              <FaRegUser className='text-gray-500 bg-gray-100 rounded-full w-7 h-7 p-1 text-3xl' />
              <p className='text-sm font-semibold text-[#A1045A]'>Customer</p>
            </div>
            <div className='flex items-center gap-4 mt-3'>
              <IoIosBicycle className='text-gray-500 bg-gray-100 rounded-full w-7 h-7 p-1 text-3xl' />
              <div>
                <p className='text-sm font-semibold text-[#A1045A]'>Rider</p>
                <p className='text-sm font-semibold text-gray-400 mt-1'>Rider on the way...</p>
              </div>
            </div>
          </div>
          <div className='mt-5 py-4 bg-[#F9F6FB] rounded-t-xl'>
            <div className='px-6 flex gap-5 pb-3 mb-3 border-b'>
              <h2 className='font-bold text-[#A1045A]'>1 x</h2>
              <div className='flex-1'>
                <div className='flex justify-between'>
                  <h2 className='font-bold flex'>Smookey Burger</h2>
                  <p className='font-medium text-right'>$0.00</p>
                </div>
                <p className='text-xs my-2 text-[#A1045A] font-semibold'>the tomatoes should be fresh</p>
                <div className='flex justify-between'>
                  <h2 className='font-bold flex text-sm text-gray-600'>0 x large</h2>
                  <p className='font-medium text-right'>$0.00</p>
                </div>
              </div>
            </div>
            <div className='px-6 flex gap-5'>
              <div className='flex-1'>
                <div className='flex justify-between'>
                  <h2 className='font-bold flex'>Total</h2>
                  <p className='font-medium text-right'>$0.00</p>
                </div>
                <button className="btn text-xs mt-4 w-full px-2 py-1 bg-green-100 text-green-600 uppercase rounded-sm font-bold"> Card</button>
                <button className="btn text-xs w-full mt-4 uppercase rounded-sm font-bold">cash</button>
              </div>
            </div>
          </div>
        </div>
        <div className='p-3' style={{ boxShadow: '-1px -4px 50px 1px rgba(173,166,173,1)' }}>
          <p className='text-sm font-semibold sha text-green-600 mb-2'>Pickup in approximetaly 10 mins</p>
          <div className='py-3 px-4 bg-green-500 shadow-md rounded-sm flex items-center justify-between text-white'>
            <p className='font-extrabold'>Accept</p>
            <p className='font-bold text-sm'>items: 1</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Modal;