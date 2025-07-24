import { Link } from "react-router-dom"
import Styles from "./Header.module.css"

import { GiTeacher } from "react-icons/gi";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdLibraryBooks } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";


const Header = () => {
  return (
    <>
        <section className={Styles.head}>
            <div className={Styles.headinner}>
                <div>
                    <h1>Where <span>Global Learner </span><br />Come to Excel</h1>
                    {/* <p>A global platform where learners grow, gain skills, and excel through expert guidance and support.</p> */}
                    <ul>
                        <li><AiOutlineGlobal />Global Community</li>
                        <li><LuBookOpenCheck />Excellence-Driven Learning</li>
                        <li><MdLibraryBooks />Expert Resources</li>
                        <li><PiBagSimpleFill />Career-Focused Outcomes</li>
                    </ul>
                    <div className={Styles.btncon}>
                        <Link to="/courses">Explore Courses</Link>
                        <Link to="/register">Start Free Trial</Link>
                    </div>
                </div>

                <div className={Styles.imghead}>
                    <img src="images/banner.png" alt="" />
                    <div className={Styles.floatcard}>
                        <PiCertificateDuotone />
                        <p>2k+ Experienced <br />Teacher</p>
                    </div>

                    <div className={Styles.floatcard2}>
                        <div className={Styles.profilerate}>
                            <div className={Styles.profiles}>
                                <img src="images/user.png" alt="" />
                                <img src="images/banner.png" alt="" />
                                <img src="images/user.png" alt="" />
                                <div className={Styles.img}>+</div>
                            </div>
                            <div className={Styles.rates}>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p>4.5/5 (80k Reviews)</p>
                            </div>
                        </div>
                        <p className={Styles.txt}>Over <span>50,000+</span> learners engaged <br />globally with us</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header