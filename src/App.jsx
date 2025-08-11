import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Course from './Pages/Course'
import CourseDetails from './Pages/CourseDetails'
import LearnCourse from './Pages/LearnCourse'
import UserProfile from './Pages/UserProfile'
import UserCourses from './Pages/UserCourses'
import Quizes from './Pages/Quizes'
import Certificates from './Pages/Certificates'
import Settings from './Pages/Settings'
import CareerGuidance from './Pages/CareerGuidance'
import AdminDashboard from './Pages/admin/AdminDashboard'
import Managecourses from './Pages/admin/Managecourses'
import ManageUsers from './Pages/admin/ManageUsers'
import ManageQuizes from './Pages/admin/ManageQuizes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/courses" element={<Course />}/>
          <Route path="/courses/:id" element={<CourseDetails />}/>

          <Route path="/user/courses/learn" element={<LearnCourse />}/>
          <Route path="/user" element={<UserProfile />}/>
          <Route path="/user/courses" element={<UserCourses />}/>
          <Route path="/user/quizes" element={<Quizes />}/>
          <Route path="/user/certificates" element={<Certificates />}/>
          <Route path="/user/edit" element={<Settings />}/>
          <Route path="/careerguidance" element={<CareerGuidance />}/>
        
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="/admin/managecourses" element={<Managecourses />}/>
          <Route path="/admin/manageusers" element={<ManageUsers />}/>
          <Route path="/admin/managequizes" element={<ManageQuizes />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
