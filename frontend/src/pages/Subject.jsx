import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import mathamatics from "../assets/mathamatics.avif"

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


        <div className='w-full bg-slate-950 min-h-screen flex flex-col gap-[50px]'>
            <div className='text-white flex flex-col items-center p-5'>

                <h1 className='text-[40px] font-bold font-serif'>Pick a <span className='text-purple-500'>subject</span></h1>
                <p className='text-[18px] text-gray-400'>4 subjects available this semester. Tap any course to open its units.</p>
            </div>


            <div className='w-full flex justify-center'>
                <div className=''>
                    <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                        {subjects.map((subject) => (
                            <div
                                className='h-[480px] w-[380px]  bg-slate-700 rounded-[16px] text-white cursor-pointer border border-gray-700 hover:border-purple-500 hover:-translate-y-2 duration-300
                                pt-5 flex flex-col gap-[15px]'
                                key={subject._id}
                                onClick={() => navigate(`/unit/${subject._id}`)}
                            >
                                <div className='flex justify-center items-center'>
                                    <div className='h-[180px] w-[90%] border border-purple-500 rounded-xl '>
                                        <img src={mathamatics} alt="" className='h-[100%] w-[100%] rounded-xl' />
                                    </div>
                                </div>

                                <div className='flex flex-col items-start pl-5 justify-center'>
                                    <h1 className='text-[20px] font-semibold'>{subject.subjectName}</h1>
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

    )
}

export default Subject