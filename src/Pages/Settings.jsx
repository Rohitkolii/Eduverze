
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Stylez from './UserProfile.module.css'
import Styles from './Settings.module.css'


import { PiCertificateDuotone } from "react-icons/pi";
import CourseCard from '../Components/CourseCard/CourseCard';

const Settings = () => {
  return (
    <section className={Stylez.userPage}>
        <Navbar />
        <section className={Stylez.profilecon}>
            <Sidebar />
            <div className={`${Stylez.profileconinner} ${Styles.certificates}`}>
                <div className={Styles.row1}>
                    <p className={Stylez.prohead}>Update your information</p>
                    <div className={Styles.row1}>
                        
                    </div>
                </div>

                <br />

            </div>
        </section>
        {/* <Footer /> */}
    </section>
  )
}

export default Settings