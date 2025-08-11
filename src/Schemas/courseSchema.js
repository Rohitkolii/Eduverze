import * as yup from "yup"

export const courseSchema = yup.object({
    course_name: yup.string().required("Please enter name").min(5).max(100),
    course_description: yup.string().required("Please enter description").max(500),
    // course_thumbnail: yup.required("Please Add thumbnail"),
    course_url: yup.string().required("Please enter url").url(),
    course_category: yup.string().required("Please enter Category"),
    course_price: yup.number("Please enter Price in number").required("Please enter Price"),
    course_publisher: yup.string().required("Please enter publisher name").max(50),
    course_duration: yup.string().required("Please enter duration"),
    course_discount: yup.number("Please enter discount in %").required("Please enter Discount"),
})