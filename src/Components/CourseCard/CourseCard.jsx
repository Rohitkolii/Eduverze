import { Link } from 'react-router-dom'
import Styles from './CourseCard.module.css'

const CourseCard = () => {
  return (
    <div className={Styles.CourseCard}>
        <div className={Styles.con1}>
            <img src="/images/2.png"  alt="" />
        </div>
        <div className={Styles.con2}>
            <p>Html full course</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Publish by: <Link to="/">Rohit koli</Link></p>
            <p className={Styles.price}>₹220 <del> ₹512</del></p>
        </div>
    </div>
  )
}

export default CourseCard