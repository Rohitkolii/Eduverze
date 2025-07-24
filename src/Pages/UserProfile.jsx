import { Link } from 'react-router-dom'
import CourseCard from '../Components/CourseCard/CourseCard'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Styles from './UserProfile.module.css'

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


import { PiCertificateDuotone } from "react-icons/pi";

const UserProfile = () => {
  return (
    <section className={Styles.userPage}>
        <Navbar />
        <section className={Styles.profilecon}>
            <Sidebar />
            <div className={Styles.profileconinner}>
                {/* <p className={Styles.prohead}>Your Profile</p> */}
                <div className={Styles.row1}>
                    <div className={Styles.row1_c}>
                        <div className={Styles.col1}>
                            <img src="images/user.webp" alt="" />
                        </div>

                        <div className={Styles.col2}>
                            <h3>Rohit koli</h3>
                            <p>Aspiring Web Developer | Learning Full-Stack Dev</p>
                            
                            <div className={Styles.colextra}>
                                <p><FaLocationDot />New Delhi</p>
                                <p><FaPhoneAlt />9582207407</p>
                                <p><IoMaleFemaleSharp />Male</p>
                                <p><IoMdMail />rohitkoli@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.certificate}>
                        <PiCertificateDuotone />
                        <h1>Unlock your Certificates!</h1> <br />
                        <Link to="">Get Certificate</Link>
                    </div>
                </div>

                <div className={Styles.row2}>
                    <p className={Styles.prohead}>Your courses</p>

                    <div className={Styles.col1}>
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>

                <div className={Styles.row3}>
                    <div className={Styles.col1}>
                        <p className={Styles.prohead}>Your Activity</p>
                        <div className={Styles.actitems}>
                            <div className={Styles.actitem}>
                                <p>Purchased Course</p>
                                <p>12-06-2025</p>
                                <p>Success</p>
                            </div>
                            <div className={Styles.actitem}>
                                <p>Purchased Course</p>
                                <p>12-06-2025</p>
                                <p>Success</p>
                            </div>
                            <div className={Styles.actitem}>
                                <p>Purchased Course</p>
                                <p>12-06-2025</p>
                                <p>Success</p>
                            </div>
                            <div className={Styles.actitem}>
                                <p>Purchased Course</p>
                                <p>12-06-2025</p>
                                <p>Success</p>
                            </div>
                            <div className={Styles.actitem}>
                                <p>Purchased Course</p>
                                <p>12-06-2025</p>
                                <p>Success</p>
                            </div>
                            {/* <br /> */}
                            <Link style={{textDecoration:'none', color: "var(--main)"}} to="">More</Link>
                        </div>
                    </div>
                    
                    <div className={Styles.col2}>
                        <p className={Styles.prohead}>Latest quizes</p>
                        <div className={Styles.quizes}>
                            <Link to="/"><img src="images/3.png" alt="" /></Link>
                            <Link to="/"><img src="images/3.png" alt="" /></Link>
                            <Link to="/"><img src="images/3.png" alt="" /></Link>
                            <Link to="/"><img src="images/3.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <Footer /> */}
    </section>
  )
}

export default UserProfile