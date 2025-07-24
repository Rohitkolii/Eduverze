
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Stylez from './UserProfile.module.css'
import Styles from './Quizes.module.css'


import { PiCertificateDuotone } from "react-icons/pi";
import CourseCard from '../Components/CourseCard/CourseCard';

const Quizes = () => {
  return (
    <section className={Stylez.userPage}>
        <Navbar />
        <section className={Stylez.profilecon}>
            <Sidebar />
            <div className={`${Stylez.profileconinner} ${Styles.quizes}`}>
                <div className={Styles.row1}>
                    <p className={Stylez.prohead}>Latest Quizes</p>
                    <div className={Styles.btns}>
                        <input type="text" placeholder='Search course' />
                        <button>Search</button>
                    </div>
                </div>

                <br />

            </div>
        </section>
        {/* <Footer /> */}
    </section>
  )
}

export default Quizes