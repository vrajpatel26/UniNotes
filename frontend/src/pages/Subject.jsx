import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";


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

                <h1 className='text-[40px] font-bold font-serif'>Choose Your <span className='text-purple-500'>Semester</span></h1>
                <p className='text-[18px] text-gray-400'>Eight semesters of curated notes. Pick yours to dive into subjects and units.</p>
            </div>


            <div className='w-full flex  '>
                <div className=''>
                    <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                        {subjects.map((subject) => (
                            <div
                                className='h-[170px] w-[320px]  bg-slate-700 rounded-[16px] text-white cursor-pointer border border-gray-700 hover:border-purple-500 hover:-translate-y-2 duration-300 '
                                key={subject._id}
                                onClick={() => navigate(`/unit/${subject._id}`)}
                            >
                                <div className='flex relative'>

                                    <div className='p-5 '>
                                        <h1 className='text-[15px] text-gray-300'>SUBJECT</h1>
                                        <h1 className='text-[20px] text-purple-500 font-bold'>{subject.subjectName}</h1>
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

    )
}

export default Subject