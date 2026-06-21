import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom"
import api from "../services/api"

const ProtectedRoute = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {

        const checkAdmin = async () => {
            try {

                const res = await api.get("/user/me")

                if (res.data.role === "admin") {
                    setIsAdmin(true)
                }

            } catch (error) {
                console.log("admin check error", error)
            } finally {
                setLoading(false)
            }
        }

        checkAdmin()

    }, [])

    if (loading) {
        return (
            <div className='min-h-screen bg-slate-950 flex items-center justify-center text-white'>
                Loading...
            </div>
        )
    }

    if (!isAdmin) {
        return <Navigate to="/" />
    }

    return children
}

export default ProtectedRoute