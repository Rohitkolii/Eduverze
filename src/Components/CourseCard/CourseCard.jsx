import { Link } from 'react-router-dom'
import Styles from './CourseCard.module.css'

const CourseCard = ({courseData}) => {
  return (
    <Link to={`/courses/${courseData?._id}`} className={Styles.CourseCard}>
        <div className={Styles.con1}>
            <img src={`http://localhost:3001/${courseData?.course_thumbnail}`} alt="" />
        </div>
        <div className={Styles.con2}>
            <p>{courseData?.course_name}</p>
            <p>{courseData?.course_description.length>70 ? `${courseData?.course_description?.slice(0,70)}...` : courseData?.course_description}</p>
            {/* <p>Publish by: <Link to="/">{courseData?.course_publisher}</Link></p> */}
            <p className={Styles.price}>{courseData?.course_price} <del> {courseData?.course_price}</del></p>
        </div>
    </Link>
  )
}

export default CourseCard