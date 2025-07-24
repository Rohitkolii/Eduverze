import React, { useState } from 'react'
import CourseCard from '../../CourseCard/CourseCard'
import Styles from "./AdminCourses.module.css"
import {useFormik} from "formik"
import {courseSchema} from "../../../Schemas/courseSchema"
import { FaImage } from "react-icons/fa";

let initialValues = {
    course_name: "",
        course_description: "",
        course_thumbnail: "",
        course_category: "",
        course_price: "",
        course_publisher: "", 
        course_duration: "",
        course_discount: ""
}

const AdminCourses = () => {
    const [formVisible, setFormVisible] = useState(false)
    const {values, errors, touched,handleSubmit, handleChange, handleBlur, setFieldValue} = useFormik({
        initialValues: initialValues,
        validationSchema: courseSchema,
        onSubmit: (value)=> {
            console.log(value);
        }
    })
    // console.log(values);
    console.log(errors);
    
  return (
    <section className={Styles.admincourses}>
        <div className={Styles.addMorebtn}>
            <p>Courses</p>
            {formVisible?
            <button onClick={()=> setFormVisible(false)}>Hide Form</button>
            :
            <button onClick={()=> setFormVisible(true)}>Add Course</button>
            }
        </div>
        {formVisible &&
        <form onSubmit={handleSubmit}>
            {/* <p>Add new course</p> */}
            <div className={Styles.rowin}>
                <div className={Styles.colin}>
                    <label htmlFor="course_name">Course Name</label>
                    <input placeholder='Enter course name' type="text" name="course_name" id="course_name" value={values.course_name} onChange={handleChange} onBlur={handleBlur} />
                    {touched.course_name && errors.course_name ? <p className={Styles.errtext}>{errors.course_name}</p> : null}
                </div>
                <div className={Styles.colin}>
                    <label htmlFor="course_category">Course Categorie</label>
                    <input placeholder='Enter course category' type="text" name="course_category" id="course_category" value={values.course_category} onChange={handleChange} onBlur={handleBlur} />
                    {touched.course_category && errors.course_category ? <p className={Styles.errtext}>{errors.course_category}</p> : null}
                </div>
                <div className={Styles.colin}>
                    <label htmlFor="course_duration">Duration</label>
                    <input placeholder='Enter course duration' type="text" name="course_duration" id="course_duration" value={values.course_duration} onChange={handleChange} onBlur={handleBlur}/>
                    {touched.course_duration && errors.course_duration ? <p className={Styles.errtext}>{errors.course_duration}</p> : null}
                </div>
                <div className={Styles.colin}>
                    <label htmlFor="course_price">Price</label>
                    <input placeholder='Enter course price in Rs' type="text" name="course_price" id="course_price" value={values.course_price} onChange={handleChange} onBlur={handleBlur}/>
                    {touched.course_price && errors.course_price ? <p className={Styles.errtext}>{errors.course_price}</p> : null}
                </div>
                <div className={Styles.colin}>
                    <label htmlFor="course_discount">Discount</label>
                    <input placeholder='Enter Discount in %' type="text" name="course_discount" id="course_discount" value={values.course_discount} onChange={handleChange} onBlur={handleBlur}/>
                    {touched.course_discount && errors.course_discount ? <p className={Styles.errtext}>{errors.course_discount}</p> : null}
                </div>
                <div className={Styles.colin}>
                    <label htmlFor="course_publisher">Course by</label>
                    <input placeholder='Enter publisher name' type="text" name="course_publisher" id="course_publisher" value={values.course_publisher} onChange={handleChange} onBlur={handleBlur}/>
                    {touched.course_publisher && errors.course_publisher ? <p className={Styles.errtext}>{errors.course_publisher}</p> : null}
                </div>
            </div>
                <div className={Styles.colin}>
                    <label htmlFor="course_url">Course url</label>
                    <input placeholder='Enter course link' type="text" name="course_url" id="course_url" value={values.course_url} onChange={handleChange} onBlur={handleBlur}/>
                    {touched.course_url && errors.course_url ? <p className={Styles.errtext}>{errors.course_url}</p> : null}
                </div>

                <div className={Styles.colin}>
                    <label htmlFor="course_description">Description</label>
                    <textarea placeholder='Enter course Description' name="course_description" id="course_description" value={values.course_description} onChange={handleChange} onBlur={handleBlur}></textarea>
                    {touched.course_description && errors.course_description ? <p className={Styles.errtext}>{errors.course_description}</p> : null}
                </div>
                <div className={Styles.file}>
                    <label htmlFor="course_thumbnail"><FaImage /> Course Thumbnail</label>
                    <input type="file" name="course_thumbnail" id="course_thumbnail" onChange={(e)=>setFieldValue("course_thumbnail", e.currentTarget.files[0])} />
                    {/* {touched.course_thumbnail && errors.course_thumbnail ? <p className={Styles.errtext}>{errors.course_thumbnail}</p> : null} */}
                </div>
                <div className={Styles.colin}>
                    <button type='submit'>Add +</button>
                </div>
        </form>
        }
        <div className={Styles.courses}>
            <div className={Styles.coursegrid}>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    </section>
  )
}

export default AdminCourses