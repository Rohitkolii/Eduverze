import Styles from "./Courseinfo.module.css"
import { FaStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

const Courseinfo = () => {
  return (
    <section className={Styles.Courseinfo}>
        <div className={Styles.Courseinfoinner}>
            <div className={Styles.Courseinfocol1}>
                <h1>Advanced Python Programming</h1>
                <p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topic</p>
                <div className={Styles.exdetail}>
                    <div className={Styles.courseby}>
                        <img src="images/user.png" alt="" />
                        <div>
                            <p>By Rohit koli</p>
                            <div>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>

                    <div className={Styles.duration}>
                        <IoIosTimer />
                        <p>25 Minutes</p>
                    </div>
                </div>

                <img className={Styles.thumbimg} src="images/7.png" alt="" />

                <div className={Styles.coursedesc}>
                    <h3>Course Description</h3>
                    <p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p>
                    <p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p>
                    <ul>
                        <li>Master advanced data structures</li>
                        <li>Implement object-oriented programming concepts</li>
                        <li>Work with libraries and frameworks</li>
                    </ul>
                </div>
            </div>

            <div className={Styles.couseinfoCard}>
                <div>
                    <h3>What's in the course?</h3>
                    <ul>
                        <li>Lifetime access with free updates.</li>
                        <li>Step-by-step, hands-on project guidance.</li>
                        <li>Downloadable resources and source code.</li>
                        <li>Quizzes to test your knowledge.</li>
                        <li>Certificate of completion.</li>
                    </ul>
                    <p className={Styles.price}>₹67.99 <del> ₹79.99</del></p>
                    <button>Enroll Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Courseinfo