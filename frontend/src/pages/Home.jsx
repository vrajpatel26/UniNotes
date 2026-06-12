import React from 'react'
import api from '../services/api'
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





const Home = () => {
  const navigate = useNavigate()

  const getMe = async () => {
    try {
      const response = await api.get("/user/me")

      console.log(response.data);

    } catch (error) {
      console.log(error.response?.data);
    }

  }

  const handleLogout = async () => {
    try {
      const response = await api.get("/auth/logout")
      console.log("logout successfully");

      localStorage.clear()
      navigate("/login")

    }
    catch (error) {
      console.log(error.response?.data);

    }
  }
  return (
    <>
      {/* hero section */}
      <div className="min-h-[100vh] bg-slate-950 flex flex-col justify-center items-center text-center pb-[30px]">

        <div className="mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-300 text-[12px] flex gap-[5px] items-center">
          <HiOutlineSparkles className='text-purple-400 h-[17px] w-[20px]' />
          The new way to organize college study material
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Study Smarter with
          <span className="text-purple-400"> UniNotes</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mt-6">
          Access semester-wise study materials organized by
          subjects, units, and notes. Learn faster and stay
          organized throughout your academic journey.
        </p>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate("/semester")}
            className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300"
          >
            Browse Notes
          </button>

        </div>

      </div>


      {/* feature section */}
      <div className='min-h-[80vh] bg-slate-950 flex flex-col gap-[50px] items-center text-center '>
        <div>
          <h2 className="text-[20px] font-semibold text-purple-500 text-center">
            FEATURES
          </h2>
          <div>
            <h2 className="mt-4 flex flex-col text-5xl text-white font-bold">
              Everything you need, <span className=" text-purple-500">nothing you don't</span>
            </h2>
            <p className="">
              A focused toolkit that respects how students actually study.
            </p>
          </div>
          <p className="text-gray-400 text-center mt-[5px]">
            Everything you need to organize and access study materials.
          </p>
        </div>

        <div className='flex gap-[50px]' >
          <div className='h-[200px] w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <RiBookShelfLine className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128218; </span>Semester-wise Organization</p>
            <p className='text-[13px] text-start text-gray-400'>Navigate through semesters easily with a clean, structured layout.</p>
          </div>

          <div className='h-[200px] w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col  hover:border-purple-500 hover:-translate-y-2 duration-300
          '>
            <FiBookOpen  className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128214; </span>Subject Management</p>
            <p className='text-[13px] text-start text-gray-400'>Well-organized subjects keep everything exactly where you expect it.</p>
          </div>

          <div className='h-[200px] w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <HiOutlineSquare3Stack3D className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128209; </span>Unit-based Learning</p>
            <p className='text-[13px] text-start text-gray-400'>Study content divided into focused, manageable units.</p>
          </div>

          <div className='h-[200px] w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <CgNotes  lfLine className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128221; </span>PDF Notes</p>
            <p className='text-[13px] text-start text-gray-400'>Access and download high-quality study materials anytime.</p>
          </div>

        </div>
      </div>


      {/* how it works */}
      <div className='min-h-[80vh] bg-slate-950 flex flex-col gap-[50px] items-center text-center '>
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

        <div className='flex gap-[20px] items-center ' >
          <div className='h-[150px] w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <LuGraduationCap  className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Semester</p>
            <p className='text-[13px] text-center text-gray-400'>Pick your term
</p>
          </div>

          <FaArrowRightLong className='text-purple-400 text-[30px]' />

          <div className='h-[150px] w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <FiBookOpen className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Subject</p>
            <p className='text-[13px] text-center text-gray-400'>Choose a course
</p>
          </div>

          <FaArrowRightLong className='text-purple-400 text-[30px]' />


          <div className='h-[150px] w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <HiOutlineSquare3Stack3D className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Unit</p>
            <p className='text-[13px] text-center text-gray-400'>Focus an unit
</p>
          </div>

          <FaArrowRightLong className='text-purple-400 text-[30px]' />


          <div className='h-[150px] w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <CgNotes className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>Notes</p>
            <p className='text-[13px] text-center text-gray-400'>Open the material
</p>
          </div>

          <FaArrowRightLong className='text-purple-400 text-[30px]' />


          <div className='h-[150px] w-[200px] rounded-xl border border-gray-700 text-gray-300 px-[10px] py-[10px] flex gap-[10px] items-center justify-center flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <AiOutlineFilePdf  className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-center text-gray-300'>PDF</p>
            <p className='text-[13px] text-center text-gray-400'>Download & Study</p>
          </div>

        </div>
      </div>




    </>
  )
}

export default Home