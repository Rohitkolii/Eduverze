import { useEffect } from "react";
import Styles from "./Courseinfo.module.css"
import { FaStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCourse } from "../../Store/SingleCourseSlice";
import { useParams } from "react-router-dom";

const Courseinfo = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const CurrentCourseData = useSelector(store=> store.coursedetailreducer.courseDetail.data)
    console.log(CurrentCourseData);
    
    // console.log(id);

    const PurchaseCourse = async (id) => {
        // console.log(id);
        try {
            const response = await fetch(`http://localhost:3001/api/orders/addneworder/${id}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_toekn")}`
            },
            // data: JSON.stringify("Hello")
        })
        console.log(response);
        
        } catch (error) {
            console.log(error);
            
        }
    }
    
    useEffect(()=> {
        dispatch(fetchSingleCourse(id))
    },[])
  return (
    <section className={Styles.Courseinfo}>
        <div className={Styles.Courseinfoinner}>
            <div className={Styles.Courseinfocol1}>
                <h1>{CurrentCourseData?.course_name || ""}</h1>
                <p></p>
                <div className={Styles.exdetail}>
                    <div className={Styles.courseby}>
                        <img src="/images/user.png" alt="" />
                        <div>
                            <p>By {CurrentCourseData?.course_publisher}</p>
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
                        <p>{CurrentCourseData?.course_duration}</p>
                    </div>
                </div>

                <img className={Styles.thumbimg} src={`http://localhost:3001/${CurrentCourseData?.course_thumbnail}` || ""} alt="" />

                <div className={Styles.coursedesc}>
                    <h3>Course Description</h3>
                    <p>{CurrentCourseData?.course_description || ""}</p>
                </div>
            </div>

            <div className={Styles.couseinfoCard}>
                <div>
                    <h3>What's in the course?</h3>
                    {CurrentCourseData?.course_points ?
                    <ul>
                        {CurrentCourseData?.course_points?.map((point,i)=> <li key={i}>{point}</li>)}
                    </ul>:""
                    }

                    {
                        CurrentCourseData?.course_points.length === 0 ?
                        <ul>
                            <li>Lifetime access with free updates.</li>
                        <li>Step-by-step, hands-on project guidance.</li>
                        <li>Downloadable resources and source code.</li>
                        <li>Quizzes to test your knowledge.</li>
                        <li>Certificate of completion.</li>
                        </ul>
                        :""
                    }



                    
                    <p className={Styles.price}>{CurrentCourseData?.course_price || ""} <del> ₹79.99</del></p>
                    <button onClick={()=> PurchaseCourse(CurrentCourseData._id)}>Enroll Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Courseinfo