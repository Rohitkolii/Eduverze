import React from 'react'
import NavbarAdmin from '../../Components/Admin/NavbarAdmin/NavbarAdmin'
import AdminSidebar from '../../Components/Admin/AdminSidebar/AdminSidebar'
import AdminUsers from '../../Components/Admin/AdminUsers/AdminUsers'

const ManageUsers = () => {
  return (
    <section>
        <NavbarAdmin />
        <AdminSidebar>
            <AdminUsers />
        </AdminSidebar>
      </section>
  )
}

export default ManageUsers