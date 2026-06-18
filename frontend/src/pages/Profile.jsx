import React, { useEffect, useState } from 'react'
import api from '../services/api'

const Profile = () => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get("/user/me")
                console.log(res.sata)

                setUser(res.data)

            } catch (error) {
                console.log("profile fetch error", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
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

                    <p className='text-gray-400'>
                        No saved notes yet.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Profile