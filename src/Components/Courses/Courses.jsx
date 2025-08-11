import Styles from "./Courses.module.css"
import CourseCard from '../CourseCard/CourseCard'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCourses } from "../../Store/CourseSlice"

const Courses = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCourses())
  },[])
  const courses = useSelector(store=> store.coursesreducer.courses)
  console.log(courses);
  
  return (
    <>
    <section className={Styles.coursescon}>
      <div className="heading">
        {/* <span className="badge">Courses</span> */}
        <h1>Explore our courses <span>Learn from the best</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae accusantium consequatur, vel quod dolorum ex?</p>
      </div>
      <div className={Styles.coursesinner}>
        {courses?.slice(0,8).map((elm, index)=> <CourseCard key={index} courseData={elm} />)}
      </div>
      <button>Explore more</button>
    </section>
    </>
  )
}

export default Courses