import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import mathamatics from "../assets/mathamatics.avif"
import { FaArrowLeftLong } from "react-icons/fa6";
const Subject = () => {
    const { semesterId } = useParams()

    const [subjects, setSubjects] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const res = await api.get(`/subject/${semesterId}`)

                setSubjects(res.data)
            } catch (error) {
                console.log("fetch subject error", error)
            }
        }
        fetchSubject()
    }, [semesterId])
    return (
        // <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
        //     <div className='flex gap-[20px] '>
        //         {subjects.map((subject) => (
        //             <div
        //                 className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'
        //                 key={subject._id}
        //                 onClick={()=>navigate(`/unit/${subject._id}`)}

        //             >
        //                 {subject.subjectName}
        //             </div>
        //         ))
        //         }
        //     </div>
        // </div>


        <div className='w-full bg-slate-950 min-h-screen flex flex-col gap-[50px] pb-6'>
            <div className='text-white flex flex-col items-center p-5'>

                <h1 className='text-[40px] font-bold font-serif'>Pick a <span className='text-purple-500'>subject</span></h1>
                <p className='text-[15px] text-center lg:text-[18px] text-gray-400'>Explore the available courses for this semester. Tap any course to open its units.</p>

            </div>
            <div
                onClick={() => navigate("/semester")}
                className='flex justify-center items-center gap-[10px] border border-gray-800 w-[200px] rounded-[20px] ml-[50px] lg:ml-[180px] p-2 cursor-pointer hover:border-gray-500'>
                <FaArrowLeftLong className='text-gray-400  ' />
                <h1 className='text-[15px] text-gray-400 font-semibold' >Back to Semester</h1>
            </div>


            <div className='w-full flex justify-center'>
                <div className=''>
                    <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                        {subjects.map((subject) => (
                            <div
                                className='h-[430px] w-[300px] lg:w-[380px]  bg-slate-900 rounded-[16px] text-white  border border-gray-700 hover:border-purple-500 hover:-translate-y-2 duration-300
                                pt-5 flex flex-col gap-[15px] relative  '
                                key={subject._id}
                            >
                                <div className='flex justify-center items-center'>
                                    <div className='h-[180px] w-[90%] rounded-xl  overflow-hidden  '>
                                        <img src={mathamatics} alt="" className='h-[100%] w-[100%] rounded-xl hover:scale-110 duration-300' />
                                    </div>
                                </div>

                                <div className='flex flex-col items-start pl-5 pr-5 justify-start h-[60px]  border-gray-400'>
                                    <h1 className='text-[20px] font-semibold'>{subject.subjectName}</h1>
                                </div>


                                <div className='flex flex-col ml-5  border border-gray-700 w-[100px] text-center rounded-[20px] '>
                                    <h1 className='text-[15px] font-semibold' >{subject.subjectCode}</h1>
                                </div>

                                <div className='flex items-center justify-center pt-4 cursor-pointer'>
                                    <button
                                        type='submit'
                                        onClick={() => navigate(`/unit/${subject._id}`)}
                                        className='bg-purple-800 h-[40px] w-[90%] rounded text-gray-300 hover:bg-purple-600 transition-all duration-300 font-semibold'
                                    >
                                        Explore Course

                                    </button>
                                    <FaArrowRightLong className='text-gray-300 text-[20px] absolute bottom-[52px] right-[60px] lg:right-[100px]   ' />
                                </div>
                            </div>
                        ))
                        }
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Subject