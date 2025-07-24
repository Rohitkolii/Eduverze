import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import NavbarAdmin from "../../Components/Admin/NavbarAdmin/NavbarAdmin"
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar"
import AdminCourses from "../../Components/Admin/AdminCourses/AdminCourses"

const Managecourses = () => {
  return (
    <>
      <section>
        <NavbarAdmin />
        <AdminSidebar>
            <AdminCourses />
        </AdminSidebar>
      </section>
    </>
  )
}

export default Managecourses