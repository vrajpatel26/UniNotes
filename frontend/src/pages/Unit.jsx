import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'
import { useEffect } from 'react'

const Unit = () => {
    const [units, setUnits] = useState([])

    const { subjectId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchUnit = async () => {
            try {
                const res = await api.get(`/unit/${subjectId}`)

                setUnits(res.data)
            } catch (error) {
                console.log("fetch unit error", error)
            }
        }
        fetchUnit()
    }, [subjectId])

    return (
        <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
            <div className='flex gap-[20px] '>
                {units.map((unit) => (
                    <div
                        className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'
                        key={unit._id}
                        onClick={() => navigate(`/note/${unit._id}`)}

                    >
                        Unit {unit.unitNumber} : {unit.unitName}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Unit