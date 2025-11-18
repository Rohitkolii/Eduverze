import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Stylez from "./UserProfile.module.css";
import Styles from "./UserCourses.module.css";

import { PiCertificateDuotone } from "react-icons/pi";
import CourseCard from "../Components/CourseCard/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../Store/CourseSlice";
import { useEffect } from "react";

const UserCourses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  const courses = useSelector((store) => store.coursesreducer.courses);
  return (
    <section className={Stylez.userPage}>
      <Navbar />
      <section className={Stylez.profilecon}>
        <Sidebar />
        <div className={`${Stylez.profileconinner} ${Styles.usercourses}`}>
          <div className={Styles.row1}>
            <p className={Stylez.prohead}>Your Courses</p>
            <div className={Styles.btns}>
              <input type="text" placeholder="Search course" />
              <button>Search</button>
            </div>
          </div>

          <br />

          <div className={Styles.row2}>
                {
                    courses?.map((elm,index)=> <CourseCard key={index} courseData={elm}/>)
                }
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </section>
  );
};

export default UserCourses;
