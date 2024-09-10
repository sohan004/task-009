import { IoIosBicycle, IoIosSettings, IoMdClose, IoMdPrint } from 'react-icons/io';
import logo from '../src/assets/logo.png'
import { FaHeadphonesAlt, FaRegUser } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { BsShop } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import { RiMenuFold2Fill } from 'react-icons/ri';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';

const App = () => {
  //#A1045A
  const [isPopup, setIsPopup] = useState(false)
  const [sideBar, setSideBar] = useState(false)
  return (
    <div className="h-screen overflow-y-auto flex">

<LeftSideBar sideBar={sideBar} setSideBar={setSideBar} />

      <div className="flex-1 p-4 flex flex-col overflow-y-auto">
        <div className='flex items-center  justify-between md:justify-end'>
          <RiMenuFold2Fill
            onClick={() => setSideBar(!sideBar)}
            className='text-xl cursor-pointer md:hidden' />
          <div className='flex justify-end gap-4 items-center'>
            <BsShop className='text-xl' />
            <TfiReload className='w-20 py-2 bg-white shadow-md rounded-sm text-[#A1045A] text-3xl shadow-gray-300' />
          </div>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2 mt-10 flex-1'>
          <div className='md:pr-5 md:border-r border-b pb-5 mb-5 md:border-b-0 md:pb-0 md:mb-0'>
            <h2 className='text-2xl font-bold '>New <sub className='font-medium text-[#A1045A]'>2</sub></h2>
            <div className='mt-5 grid gap-5'>
              <div
                onClick={() => setIsPopup(true)}
                className='px-3 py-2 flex items-center cursor-pointer justify-between bg-[#A1045A] rounded-sm shadow-gray-400 shadow-lg'>
                <div
                >
                  <h3 className='text-white text-sm font-bold'>Order #34567</h3>
                  <p className='text-white text-xs mt-1'>2 items</p>
                </div>
                <p className='text-white text-xs mt-1'>10 mins</p>
              </div>
              <div
                onClick={() => setIsPopup(true)}
                className='px-3 py-2 flex items-center cursor-pointer justify-between bg-[#A1045A] rounded-sm shadow-gray-400 shadow-lg'>
                <div
                >
                  <h3 className='text-white text-sm font-bold'>Order #34567</h3>
                  <p className='text-white text-xs mt-1'>3 items</p>
                </div>
                <p className='text-white text-xs mt-1'>15 mins</p>
              </div>
            </div>
          </div>

          <div className='md:pl-5'>
            <h2 className='text-2xl font-bold '>Accepted <sub className='font-medium text-[#A1045A]'>3</sub></h2>
            <div className='mt-5 grid gap-5'>
              <div className='px-3 border border-gray-100  rounded-sm shadow-gray-200 shadow-lg w-full'>
                <div className='py-2 w-full border-b'>
                  <div className='border-l-2 pl-2 border-[#A1045A] flex w-full justify-between gap-2'>
                    <div className='flex-1'>
                      <h3 className=' font-bold'>Order #6659</h3>
                      <div>
                        <p className='text-sm mt-2 flex items-center gap-1 md:gap-2 flex-wrap'>xxxx-1234 <span className='text-2xl'>·</span> 1 item</p>
                      </div>
                    </div>
                    <div className=''>
                      <div className='flex gap-2'>
                        <button className="btn text-[10px] px-2 py-1 bg-green-50 text-green-600 uppercase rounded-sm font-bold">Credit Card</button>
                        <button className="btn text-[10px] px-2 py-1 bg-[#a1045a10] text-[#A1045A] uppercase rounded-sm font-bold">Test Order</button>
                      </div>
                      <button className="btn shadow text-sm w-full px-2 py-1 bg-blue-400 text-white capitalize rounded-sm font-bold">Ready For Delivery</button>
                    </div>
                  </div>
                </div>
                <div className='py-2 flex items-center justify-between'>
                  <div className='flex gap-3 items-center'>
                    <IoIosBicycle className='text-lg text-gray-700' />
                    <p className='text-sm font-medium'>Test is <span className='text-[#A1045A]'>one the way</span></p>
                  </div>
                  <p className='text-sm'>11 mins</p>
                </div>
              </div>
              <div className='px-3 border border-gray-100  rounded-sm shadow-gray-200 shadow-lg w-full'>
                <div className='py-2 w-full border-b'>
                  <div className='border-l-2 pl-2 border-[#A1045A] flex w-full justify-between gap-2'>
                    <div className='flex-1'>
                      <h3 className=' font-bold'>Order #6659</h3>
                      <div>
                        <p className='text-sm mt-2 flex items-center gap-1 md:gap-2 flex-wrap'>xxxx-1234 <span className='text-2xl'>·</span> 1 item</p>
                      </div>
                    </div>
                    <div className=''>
                      <div className='flex gap-2'>
                        <button className="btn text-[10px] px-2 py-1 bg-green-50 text-green-600 uppercase rounded-sm font-bold">Credit Card</button>
                        <button className="btn text-[10px] px-2 py-1 bg-[#a1045a10] text-[#A1045A] uppercase rounded-sm font-bold">Test Order</button>
                      </div>
                      <button className="btn shadow text-sm w-full px-2 py-1 bg-blue-400 text-white capitalize rounded-sm font-bold">Ready For Delivery</button>
                    </div>
                  </div>
                </div>
                <div className='py-2 flex items-center justify-between'>
                  <div className='flex gap-3 items-center'>
                    <IoIosBicycle className='text-lg text-gray-700' />
                    <p className='text-sm font-medium'>Test is <span className='text-[#A1045A]'>one the way</span></p>
                  </div>
                  <p className='text-sm'>11 mins</p>
                </div>
              </div>
              <div className='px-3 border border-gray-100  rounded-sm shadow-gray-200 shadow-lg w-full'>
                <div className='py-2 w-full border-b'>
                  <div className='border-l-2 pl-2 border-[#A1045A] flex w-full justify-between gap-2'>
                    <div className='flex-1'>
                      <h3 className=' font-bold'>Order #6659</h3>
                      <div>
                        <p className='text-sm mt-2 flex items-center gap-1 md:gap-2 flex-wrap'>xxxx-1234 <span className='text-2xl'>·</span> 1 item</p>
                      </div>
                    </div>
                    <div className=''>
                      <div className='flex gap-2'>
                        <button className="btn text-[10px] px-2 py-1 bg-green-50 text-green-600 uppercase rounded-sm font-bold">Credit Card</button>
                        <button className="btn text-[10px] px-2 py-1 bg-[#a1045a10] text-[#A1045A] uppercase rounded-sm font-bold">Test Order</button>
                      </div>
                      <button className="btn shadow text-sm w-full px-2 py-1 bg-blue-400 text-white capitalize rounded-sm font-bold">Ready For Delivery</button>
                    </div>
                  </div>
                </div>
                <div className='py-2 flex items-center justify-between'>
                  <div className='flex gap-3 items-center'>
                    <IoIosBicycle className='text-lg text-gray-700' />
                    <p className='text-sm font-medium'>Test is <span className='text-[#A1045A]'>one the way</span></p>
                  </div>
                  <p className='text-sm'>11 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Modal isPopup={isPopup} setIsPopup={setIsPopup} />
    </div>
  );
};

export default App;