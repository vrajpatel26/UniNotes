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
import { FaArrowDown } from "react-icons/fa";





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
      <div id='home' className="min-h-[100vh] bg-slate-950 flex flex-col justify-center items-center text-center pb-[30px]">

        <div className="mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-300 text-[12px] flex gap-[5px] items-center">
          <HiOutlineSparkles className='text-purple-400 h-[17px] w-[20px]' />
          The new way to organize college study material
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white px-4">
          Study Smarter with
          <span className="text-purple-400"> UniNotes</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl px-4 mt-6">
          Access semester-wise study materials organized by
          subjects, units, and notes. Learn faster and stay
          organized throughout your academic journey.
        </p>

        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={() => navigate("/semester")}
            className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center gap-[10px]"
          >
            Browse Notes <span className='h-[15px] w-[20px]'><FaArrowRightLong /></span>
          </button>

        </div>

      </div>



      {/* feature section */}
      <div
        className='py-5 lg:py-0 min-h-[80vh] bg-slate-950 flex flex-col gap-[50px] items-center justify-center text-center px-4'
      >
        <div>
          <h2 className="text-[20px] font-semibold text-purple-500 text-center">
            FEATURES
          </h2>
          <div>
            <h2 className="mt-4 flex flex-col text-3xl md:text-5xl text-white font-bold">
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

        <div className='flex flex-wrap justify-center gap-6' >
          <div className='h-[200px] w-full max-w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <RiBookShelfLine className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128218; </span>Semester-wise Organization</p>
            <p className='text-[13px] text-start text-gray-400'>Navigate through semesters easily with a clean, structured layout.</p>
          </div>

          <div className='h-[200px] w-full max-w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col  hover:border-purple-500 hover:-translate-y-2 duration-300
          '>
            <FiBookOpen className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128214; </span>Subject Management</p>
            <p className='text-[13px] text-start text-gray-400'>Well-organized subjects keep everything exactly where you expect it.</p>
          </div>

          <div className='h-[200px] w-full max-w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <HiOutlineSquare3Stack3D className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128209; </span>Unit-based Learning</p>
            <p className='text-[13px] text-start text-gray-400'>Study content divided into focused, manageable units.</p>
          </div>

          <div className='h-[200px] w-full max-w-[250px] rounded-xl border border-gray-700 text-gray-300 px-[20px] py-[20px] flex gap-[10px] items-start flex-col hover:border-purple-500 hover:-translate-y-2 duration-300'>
            <CgNotes lfLine className='h-[40px] w-[40px] text-purple-400 border border-purple-500 rounded-md p-[5px]' />
            <p className='text-[18px] font-semibold text-start text-gray-300'><span>&#128221; </span>PDF Notes</p>
            <p className='text-[13px] text-start text-gray-400'>Access and download high-quality study materials anytime.</p>
          </div>

        </div>
      </div>



      {/* how it works */}
      <div
        className='py-5 lg:py-0 min-h-[80vh] bg-slate-950 flex flex-col gap-[50px] items-center justify-center text-center px-4'
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



      {/* ready to stydy smarter box */}
      <div className='min-h-[80vh] bg-slate-950 flex flex-col gap-[50px] items-center text-center justify-center '>

        <div className=' flex flex-col gap-[30px] justify-center item-center w-[90%] md:w-[80%] lg:w-[70%] min-h-[350px] p-8 bg-gray-900 border-purple-700 rounded-[30px]'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white font-semibold text-3xl md:text-5xl'>Ready to <span className='text-purple-500'>study smarter<span className='text-white font-semibold text-3xl md:text-5xl'>?</span></span></h1>
            <p className='text-gray-400 text-[17px]'>Focus on the exact topics that will appear in your exams using UniNotes.</p>
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <button
              onClick={() => navigate("/semester")}
              className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center gap-[15px]"
            >
              Browse Notes <span className='h-[15px] w-[20px]'><FaArrowRightLong /></span>
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-slate-950 hover:border-purple-800 border border-slate-950 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300"
            >Create Account</button>
          </div>
        </div>

      </div>

    </>
  )
}


export default Home