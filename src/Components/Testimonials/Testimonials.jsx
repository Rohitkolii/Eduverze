import Styles from './Testimonials.module.css'

// icons 
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className={Styles.Testimonials}>
        <div className={Styles.Testimonialsinner}>
            <div className='heading'>
                <h1>Student success <span>Stories</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex libero dolorem!</p>
            </div>
            <div className={Styles.Testimonialsgrid}>
                <div className={Styles.TestimonialsCard}>
                    <div className={Styles.Testimonialsprofile}>
                        <img src="images/user.png" alt="" />
                        <div>
                            <p>Sachin kushwaha</p>
                            <p>Data Science Bootcamp</p>
                        </div>
                    </div>
                    <p className={Styles.review}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto sint. Nobis saepe sed velit ipsam voluptate eligendi sunt quasi magnam aperiam quaerat enim, odit laborum assumenda tempore quibusdam perspiciatis, et perferendis non. Debitis, nam.</p>
                    <div className={Styles.rating}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <div className={Styles.TestimonialsCard}>
                    <div className={Styles.Testimonialsprofile}>
                        <img src="images/user.png" alt="" />
                        <div>
                            <p>Sachin kushwaha</p>
                            <p>Data Science Bootcamp</p>
                        </div>
                    </div>
                    <p className={Styles.review}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto sint. Nobis saepe sed velit ipsam voluptate eligendi sunt quasi magnam aperiam quaerat enim, odit laborum assumenda tempore quibusdam perspiciatis, et perferendis non. Debitis, nam.</p>
                    <div className={Styles.rating}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <div className={Styles.TestimonialsCard}>
                    <div className={Styles.Testimonialsprofile}>
                        <img src="images/user.png" alt="" />
                        <div>
                            <p>Sachin kushwaha</p>
                            <p>Data Science Bootcamp</p>
                        </div>
                    </div>
                    <p className={Styles.review}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto sint. Nobis saepe sed velit ipsam voluptate eligendi sunt quasi magnam aperiam quaerat enim, odit laborum assumenda tempore quibusdam perspiciatis, et perferendis non. Debitis, nam.</p>
                    <div className={Styles.rating}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Testimonials