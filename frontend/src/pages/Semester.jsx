import React, { useEffect, useState } from 'react'
import api from '../services/api.js'
import { useNavigate } from 'react-router-dom'

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
        <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
            <div className='flex gap-[20px] '>
                {semesters.map((sem) => (
                    <div
                        className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'
                        key={sem._id}
                        onClick={() => navigate(`/subject/${sem._id}`)}
                    >
                        Semester {sem.semesterNumber}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Semester