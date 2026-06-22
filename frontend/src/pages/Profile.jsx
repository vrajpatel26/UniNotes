import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { FiFileText } from "react-icons/fi";

const Profile = () => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [bookmark, setBookmark] = useState([])

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get("/user/me")
                console.log(res.data)

                setUser(res.data)

            } catch (error) {
                console.log("profile fetch error", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
    }, [])


    useEffect(() => {
        const fetchBookmark = async () => {
            try {
                const res = await api.get("/bookmark")

                setBookmark(res.data)
            } catch (error) {
                console.log("fetch bookmark error", error)
            }
        }
        fetchBookmark()
    }, [])

    if (loading) {
        return (
            <div className='min-h-screen bg-slate-950 flex items-center justify-center text-white'>
                Loading profile...
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-slate-950 p-6'>
            <div className='max-w-3xl mx-auto'>

                <h1 className='text-4xl font-bold text-purple-500 mb-8 text-center'>
                    Profile
                </h1>

                <div className='bg-slate-900 border border-slate-800 rounded-2xl p-6'>

                    <div className='mb-6'>
                        <h2 className='text-gray-400 text-sm'>Name</h2>
                        <p className='text-white text-xl font-semibold'>
                            {user?.name}
                        </p>
                    </div>

                    <div className='mb-6'>
                        <h2 className='text-gray-400 text-sm'>Email</h2>
                        <p className='text-white text-xl font-semibold'>
                            {user?.email}
                        </p>
                    </div>

                    <div>
                        <h2 className='text-gray-400 text-sm'>Role</h2>
                        <p className='text-white text-xl font-semibold capitalize'>
                            {user?.role}
                        </p>
                    </div>

                </div>

                <div className='bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6'>
                    <h2 className='text-white text-2xl font-semibold mb-4'>
                        ⭐ Saved Notes
                    </h2>

                    {bookmark.length === 0 ? (
                        <p className='text-gray-400'>
                            No saved notes yet.
                        </p>
                    ) : (
                        <div className='flex flex-col gap-3'>
                            {bookmark.map((note) => (
                                <div
                                    key={note._id}
                                    className='bg-slate-900 border border-slate-700 rounded-lg p-3 flex lg:flex-row flex-col justify-between items-center hover:border-purple-800 duration-300'
                                >
                                    <h3 className='text-white font-medium'>
                                      {note.title}
                                    </h3>
                                    <button
                                        key={note._id}
                                        onClick={() => window.open(note.fileUrl, "_blank")}
                                        className="flex items-center gap-2 px-5 py-3 mt-5 lg:mt-0 rounded-2xl border border-gray-500 text-gray-300 hover:bg-slate-800 transition">
                                        <FiFileText />
                                        <span>View</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Profile