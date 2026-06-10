import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

const Note = () => {

    const [notes, setNotes] = useState([])

    const { unitId } = useParams()

    useEffect(() => {

        const fetchNote = async () => {
            try {
                const res = await api.get(`/note/${unitId}`)

                setNotes(res.data)
            } catch (error) {
                console.log("fetch note error", error)
            }
        }
        fetchNote()
    }, [unitId])

    return (
        <div className='min-h-screen w-full py-[30px] bg-slate-800 text-white'>
            <div className='flex gap-[20px] '>
                {notes.map((note) => (
                    <div
                        className='h-[100px] flex justify-center items-center w-[300px] bg-slate-700 rounded-[16px] text-white cursor-pointer'
                        key={note._id}
                        onClick={() => window.open(note.fileUrl, "_blank")}
                    >
                        title : {note.title}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Note