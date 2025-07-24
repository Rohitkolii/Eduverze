import Styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

import { MdDashboard } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className={Styles.sidebar}>
        <div className={Styles.sidebarinner}>
            <Link to="/user"> <MdDashboard /> <span>Dashboard</span></Link>
            <Link to="/user/courses"> <MdMenuBook /> <span>Courses</span></Link>
            <Link to="/user/quizes"> <MdQuiz /> <span>Quizes</span></Link>
            <Link to="/user/certificates"> <PiCertificateDuotone /> <span>Certificates</span></Link>
            <Link to="/user/edit"> <IoSettings /> <span>Settings</span></Link>
        </div>
    </aside>
  )
}

export default Sidebar