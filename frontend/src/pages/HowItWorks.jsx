import React from 'react'
import { useNavigate } from "react-router-dom"
import { HiOutlineSparkles } from "react-icons/hi";
import { RiBookShelfLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <>
      <div
        className='py-5 lg:py-0 min-h-[90vh] bg-slate-950 flex flex-col gap-[50px] items-center justify-center text-center px-4'
      >
        <div className='flex flex-col gap-[10px]'>
          <h2 className="text-[20px] font-semibold text-purple-500 text-center">
            HOW IT WORKS
          </h2>
          <div>
            <h2 className="mt-4 text-5xl text-white font-bold">
              From Semester to <span className=" text-purple-500">your screen</span>
            </h2>

          </div>
          <p className="text-gray-400 text-center mt-[5px]">
            A simple hierarchy. Zero clutter.
          </p>
        </div>

        <div className='flex flex-col xl:flex-row gap-5 items-center' >

          <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <LuGraduationCap className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Semester</p>
            <p className='text-[13px] text-center text-gray-400'>Pick your term
            </p>
          </div>

          <FaArrowRightLong className='hidden lg:block text-purple-400 text-[30px]' />
          <FaArrowDown className='lg:hidden text-purple-400 text-[30px]' />

          <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <FiBookOpen className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Subject</p>
            <p className='text-[13px] text-center text-gray-400'>Choose a course
            </p>
          </div>

          <FaArrowRightLong className='hidden lg:block text-purple-400 text-[30px]' />
          <FaArrowDown className='lg:hidden text-purple-400 text-[30px]' />



          <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <HiOutlineSquare3Stack3D className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Unit</p>
            <p className='text-[13px] text-center text-gray-400'>Focus an unit
            </p>
          </div>

          <FaArrowRightLong className='hidden lg:block text-purple-400 text-[30px]' />
          <FaArrowDown className='lg:hidden text-purple-400 text-[30px]' />


          <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <CgNotes className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Notes</p>
            <p className='text-[13px] text-center text-gray-400'>Open the material
            </p>
          </div>

          <FaArrowRightLong className='hidden lg:block text-purple-400 text-[30px]' />
          <FaArrowDown className='lg:hidden text-purple-400 text-[30px]' />



          <div className='h-[150px] w-full max-w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <AiOutlineFilePdf className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>PDF</p>
            <p className='text-[13px] text-center text-gray-400'>Download & Study</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default HowItWorks