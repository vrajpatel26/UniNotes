import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes, Route } from "react-router-dom"
import Semester from './pages/Semester'
import Subject from './pages/Subject'
import Unit from './pages/Unit'
import Note from './pages/Note'
import Admin from './pages/Admin/Admin'
import AdminSemester from './pages/Admin/AdminSemester'
import AdminSubject from './pages/Admin/AdminSubject'
import AdminUnit from './pages/Admin/AdminUnit'
import AdminNote from './pages/Admin/AdminNote'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import ManageSubject from './pages/Admin/ManageSubject'
import ManageUnit from './pages/Admin/ManageUnit'
import ManageNote from './pages/Admin/ManageNote'

const App = () => {
   return (
      <>
         <Routes>

            <Route element={<MainLayout />}>
               <Route path="/" element={<Home />} />
               <Route path="/semester" element={<Semester />} />
               <Route path="/subject/:semesterId" element={<Subject />} />
               <Route path="/unit/:subjectId" element={<Unit />} />
               <Route path="/note/:unitId" element={<Note />} />
               <Route path='/about' element={<About />} />
               <Route path='/howitworks' element={<HowItWorks />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path='/admin'
               element={<ProtectedRoute>
                  <Admin />
               </ProtectedRoute>} />

            <Route path='/admin/semester'
               element={<ProtectedRoute>
                  <AdminSemester />
               </ProtectedRoute>} />

            <Route path='/admin/subject'
               element={<ProtectedRoute>
                  <AdminSubject />
               </ProtectedRoute>} />

            <Route path='/admin/manage-subject'
               element={<ProtectedRoute>
                  <ManageSubject />
               </ProtectedRoute>}
            />

            <Route path='/admin/unit'
               element={<ProtectedRoute>
                  <AdminUnit />
               </ProtectedRoute>} />

            <Route path='/admin/manage-unit'
               element={<ProtectedRoute>
                  <ManageUnit />
               </ProtectedRoute>}
            />

            <Route path='/admin/note'
               element={<ProtectedRoute>
                  <AdminNote />
               </ProtectedRoute>} />

                <Route path='/admin/manage-note'
               element={<ProtectedRoute>
                  <ManageNote />
               </ProtectedRoute>}
            />
         </Routes>
      </>
   )
}

export default App