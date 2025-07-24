
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Stylez from './UserProfile.module.css'
import Watch from '../Components/Watch/Watch'

// import Styles from './LearnCourse.module.css'


import { PiCertificateDuotone } from "react-icons/pi";
import CourseCard from '../Components/CourseCard/CourseCard';

const LearnCourse = () => {
  return (
    <section className={Stylez.userPage}>
        <Navbar />
        <section className={Stylez.profilecon}>
            <Sidebar />
            <div className={`${Stylez.profileconinner}`}>
              <p className={Stylez.parahead}>courses / courseid</p>
              <Watch />
            </div>
        </section>
        {/* <Footer /> */}
    </section>
  )
}

export default LearnCourse