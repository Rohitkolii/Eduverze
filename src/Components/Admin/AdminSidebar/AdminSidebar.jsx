import { Link } from 'react-router-dom'
import Styles from './AdminSidebar.module.css'


import { MdDashboard } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";


const AdminSidebar = ({children}) => {
  return (
    <>
        <section className={Styles.adminarea}>
            <div className={Styles.sidebar}>
                <div className={Styles.innersidebar}>
                    <Link to="/admin"><MdDashboard />Dashboard</Link>
                    <Link to="/admin/managecourses"><MdMenuBook />Manage Courses</Link>
                    <Link to="/admin/manageusers"><FaUserFriends />Manage Users</Link>
                    <Link to="/"><MdQuiz />Manage Quizes</Link>
                    <Link to="/"><PiCertificateDuotone />Certificates</Link>
                    <Link to="/"><IoSettings />Settings</Link>
                </div>
            </div>
            <div className={Styles.admincontent}>{children}</div>
        </section>
    </>
  )
}

export default AdminSidebar