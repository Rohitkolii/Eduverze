import Styles from "./NavbarAdmin.module.css"

import { FaGraduationCap } from "react-icons/fa";

const NavbarAdmin = () => {
  return (
    <nav className={Styles.NavbarAdmin}>
      <div>
        <h1>Eduverze.</h1>
      </div>
      
      <div className={Styles.userprofile}>
        <img src="/images/user.png" alt="" />
        <div>
          <p>Rohit koli</p>
          <p>Rohitkoli@gmail.com</p>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAdmin