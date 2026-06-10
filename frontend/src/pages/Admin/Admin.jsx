import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const navigate = useNavigate()

    return (
        <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
            <div className='flex gap-[20px]  justify-center '>
                <div
                    onClick={() => navigate("/admin/semester")}
                    className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Semester
                </div>

                <div
                    onClick={() => navigate("/admin/subject")}
                    className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Subject
                </div>

                <div
                    onClick={() => navigate("/admin/unit")}
                    className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Unit
                </div>

                <div
                    onClick={() => navigate("/admin/note")}
                    className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'> Create Note
                </div>
            </div>
        </div>
    )
}

export default Admin    