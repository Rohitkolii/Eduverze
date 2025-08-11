import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import NavbarAdmin from "../../Components/Admin/NavbarAdmin/NavbarAdmin"
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar"
// import AdminCourses from "../../Components/Admin/AdminCourses/AdminCourses"
import AdminQuizes from "../../Components/Admin/AdminQuizes/AdminQuizes"

const ManageQuizes = () => {
  return (
    <>
      <section>
        <NavbarAdmin />
        <AdminSidebar>
            <AdminQuizes />
        </AdminSidebar>
      </section>
    </>
  )
}

export default ManageQuizes