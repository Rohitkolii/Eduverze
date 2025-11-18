import { Link, useLocation, useParams } from 'react-router-dom'
import Styles from './CourseCard.module.css'

const CourseCard = ({courseData}) => {
  const param = useLocation()
  console.log(param)
  return (
    <>
    {param.pathname == "/admin/managecourses" ?
    <div className={Styles.CourseCard}>
        <div className={Styles.con1}>
            <img src={`http://localhost:3001/${courseData?.course_thumbnail}`} alt="" />
        </div>
        <div className={Styles.con2}>
            <p>{courseData?.course_name}</p>
            <p>{courseData?.course_description.length>50 ? `${courseData?.course_description?.slice(0,50)}...` : courseData?.course_description}</p>
            {/* <p>Publish by: <Link to="/">{courseData?.course_publisher}</Link></p> */}
            <p className={Styles.price}>₹{courseData?.course_price} <del> ₹{courseData?.course_price}</del></p>
        </div>
    </div>
    :
    <Link 
    to={ 
      param.pathname == "/user/courses" && `/user/courses/${courseData._id}` || 
      param.pathname == "/" && `/courses/${courseData._id}` || 
      param.pathname == "/user" && `/user/courses/${courseData._id}`||
      param.pathname == "/courses" && `/courses/${courseData._id}` 
      } className={Styles.CourseCard}>
        <div className={Styles.con1}>
            <img src={`http://localhost:3001/${courseData?.course_thumbnail}`} alt="" />
        </div>
        <div className={Styles.con2}>
            <p>{courseData?.course_name}</p>
            <p>{courseData?.course_description.length>50 ? `${courseData?.course_description?.slice(0,50)}...` : courseData?.course_description}</p>
            {/* <p>Publish by: <Link to="/">{courseData?.course_publisher}</Link></p> */}
            {param.pathname !== "/user/courses" || param.pathname == "/user" &&
            <p className={Styles.price}>₹{courseData?.course_price} <del> ₹{courseData?.course_price}</del></p>
            }
        </div>
    </Link>
      }
    </>
  )
}

export default CourseCard