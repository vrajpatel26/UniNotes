import React, { useEffect, useState } from 'react'
import api from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";


const Semester = () => {

    const [semesters, setSemesters] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const fetchSemester = async () => {
            try {
                const res = await api.get("/semester")

                setSemesters(res.data)

            } catch (error) {
                console.log("fetch semester error", error)
            }
        }
        fetchSemester()
    }, [])
    return (
        // <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
        //     <div className='flex gap-[20px] '>
        //         {semesters.map((sem) => (
        //             <div
        //                 className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'
        //                 key={sem._id}
        //                 onClick={() => navigate(`/subject/${sem._id}`)}
        //             >
        //                 Semester {sem.semesterNumber}
        //             </div>
        //         ))
        //         }
        //     </div>
        // </div>
        <>
            {/* search-bar */}
            <div className='min-h-[90h] w-full bg-slate-950 flex items-center justify-center border-b border-gray-800'>
                <div className='h-[200px] w-[80%]  flex justify-center'>
                    <div className=' w-full flex flex-col'>
                        <div className='flex justify-center p-5'>
                            <h1 className='text-gray-500 text-[20px]'>All Semesters</h1>
                        </div>
                        <div>
                            <form className='flex items-center justify-center h-[50px]'>
                                <input
                                    type="text"
                                    className='h-[100%] w-[70%] bg-slate-900 border border-gray-700 rounded-[18px] hover:border-purple-800 transition-all duration-300 pl-4 outline-none text-white'
                                    placeholder='Search subjects - e.g.DBMS'

                                />
                            </form>
                        </div>
                    </div>
                </div>

            </div>



            {/* semesters */}
            <div className='w-full bg-slate-950 min-h-screen flex flex-col gap-[50px]'>
                <div className='text-white flex flex-col items-center p-5'>

                    <h1 className='text-[30px] lg:text-[40px] font-bold font-serif'>Choose Your <span className='text-purple-500'>Semester</span></h1>
                    <p className='text-[14px] lg:text-[18px] text-center text-gray-400'>Eight semesters of curated notes. Pick yours to dive into subjects and units.</p>
                </div>


                <div className='w-full flex justify-center'>
                    <div className=''>
                        <div className='flex flex-wrap justify-center gap-5 overflow-x-auto lg:overflow-x-visible pb-5'>
                            {semesters.map((sem) => (
                                <div
                                    className='h-[170px] w-[320px]  bg-slate-900 rounded-[16px] text-white cursor-pointer border border-gray-700 hover:border-purple-500 hover:-translate-y-2 duration-300 '
                                    key={sem._id}
                                    onClick={() => navigate(`/subject/${sem._id}`)}
                                >
                                    <div className='flex relative'>

                                        <div className='p-5 '>
                                            <h1 className='text-[15px] text-gray-300'>SEMESTER</h1>
                                            <h1 className='text-[30px] text-purple-500 font-bold'>0{sem.semesterNumber}</h1>
                                        </div>
                                        <FaArrowRightLong className='text-gray-300 text-[20px] absolute right-7 top-5' />

                                    </div>


                                    <div className='flex pt-5 pl-5 gap-[10px]'>
                                        <div className='flex items-center gap-[5px]'>
                                            <FiBookOpen className='h-[17px] w-[17px] text-purple-500' />
                                            <h1 className='text-gray-300' >4 subjects</h1>
                                        </div>

                                        <div className='flex items-center gap-[5px]'>
                                            <HiOutlineSquare3Stack3D className='h-[17px] w-[17px] text-purple-500' />
                                            <h1 className='text-gray-300'>10 units</h1>
                                        </div>
                                    </div>

                                </div>
                            ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Semester