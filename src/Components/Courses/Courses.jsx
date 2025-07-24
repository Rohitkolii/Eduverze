import Styles from "./Courses.module.css"
import CourseCard from '../CourseCard/CourseCard'

const Courses = () => {
  return (
    <>
    <section className={Styles.coursescon}>
      <div className="heading">
        {/* <span className="badge">Courses</span> */}
        <h1>Explore our courses <span>Learn from the best</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae accusantium consequatur, vel quod dolorum ex?</p>
      </div>
      <div className={Styles.coursesinner}>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      </div>
      <button>Explore more</button>
    </section>
    </>
  )
}

export default Courses