import Styles from './Watch.module.css'
import Styles2 from '../Courseinfo/Courseinfo.module.css'
import { FaStar } from 'react-icons/fa'
import { IoIosTimer } from 'react-icons/io'

import ReactPlayer from 'react-player'


const Watch = () => {
  return (
    <section className={Styles.Watchcon}>
        <div className={Styles.Watchconinner}>
            <div className={Styles.playerarea}>
                <div className={Styles.videocontainer}>
                    {/* <video src="https://videos.pexels.com/video-files/1716043/1716043-hd_1920_1080_30fps.mp4" autoPlay controls /> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ax2t8KndS_c?si=n4d6I1ZAu92hCpfC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Ax2t8KndS_c?si=n4d6I1ZAu92hCpfC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </div>
                <h3>Advanced Python Programming</h3>
                <p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p>
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
                        <button>Chapter 1 .................asjdhgbsajdbbshg  qwhgdbjqh ajshgd  ahgjads  sjhgdjha sdjhgb </button>
                        <button>Chapter 2</button>
                        <button>Chapter 3</button>
                        <button>Chapter 4</button>
                        <button>Chapter 5</button>
                        <button>Chapter 6</button>
                        <button>Chapter 7</button>
                        <button>Chapter 8</button>
                        <button>Chapter 9</button>
                    </div>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Watch