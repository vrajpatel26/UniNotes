import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'

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
        <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
            <div className='flex gap-[20px] '>
                {subjects.map((subject) => (
                    <div
                        className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'
                        key={subject._id}
                        onClick={()=>navigate(`/unit/${subject._id}`)}

                    >
                        {subject.subjectName}
                    </div>
                ))
                }
            </div>
        </div>

    )
}

export default Subject