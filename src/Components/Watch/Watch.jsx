import Styles from './Watch.module.css'
import Styles2 from '../Courseinfo/Courseinfo.module.css'
import { FaStar } from 'react-icons/fa'
import { IoIosTimer } from 'react-icons/io'

import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchSingleCourse } from '../../Store/SingleCourseSlice'
import { useDispatch, useSelector } from 'react-redux'


const Watch = () => {
    const [currentChapter, setcurrentChapter ] = useState(0)
    const dispatch = useDispatch()
    const {id} = useParams()
    // console.log(id)

    useEffect(()=> {
        dispatch(fetchSingleCourse(id))
    },[])

    const SingleCourse = useSelector(state => state?.coursedetailreducer?.courseDetail?.data
)
    // console.log(SingleCourse)

    const handlechangeChapter = (index) => {
        setcurrentChapter(index)
    }

  return (
    <section className={Styles.Watchcon}> 
        <div className={Styles.Watchconinner}>
            <div className={Styles.playerarea}>
                <h3 style={{marginBottom: 10}}>{SingleCourse?.course_name}</h3>
                <div className={Styles.videocontainer}>
                    {/* <video src="https://videos.pexels.com/video-files/1716043/1716043-hd_1920_1080_30fps.mp4" autoPlay controls /> */}
                    <iframe width="560" height="315" src={SingleCourse?.courses[currentChapter]?.chapter_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Ax2t8KndS_c?si=n4d6I1ZAu92hCpfC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </div>
                <h3 style={{marginTop: 10}}>{SingleCourse?.courses?.[currentChapter]?.chapter_name}</h3>
                <p>{SingleCourse?.course_description}</p>
                {/* <div className={Styles2.exdetail}>
                    <div className={Styles2.courseby}>
                        <img src="/images/user.png" alt="" />
                        <div>
                            <p>By Rohit koli</p>
                            <div>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>

                    <div className={Styles2.duration}>
                        <IoIosTimer />
                        <p>25 Minutes</p>
                    </div>
                </div> */}
            </div>

            <div className={Styles.watchextra}>
                <div className={Styles.watchextrainner}>
                    <p>Course Chapters</p>

                    <div className={Styles.chapbtn}>
                        {
                            SingleCourse?.courses?.map((ch, i)=> <button style={currentChapter === i ? {backgroundColor: "var(--smoke"} : {opacity: 0.6}} onClick={()=> handlechangeChapter(i)}>{ch.chapter_name}</button>)
                        }
                    </div>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Watch