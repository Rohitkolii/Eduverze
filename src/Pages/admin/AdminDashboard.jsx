import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import NavbarAdmin from "../../Components/Admin/NavbarAdmin/NavbarAdmin"
import AdminSidebar from "../../Components/Admin/AdminSidebar/AdminSidebar"

const AdminDashboard = () => {
  return (
    <>
      <section>
        <NavbarAdmin />
        <AdminSidebar>Hello</AdminSidebar>
      </section>
    </>
  )
}

export default AdminDashboard