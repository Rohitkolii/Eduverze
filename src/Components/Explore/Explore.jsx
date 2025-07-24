import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Explore.module.css'

const Explore = () => {
  return (
    <section className={Styles.explore}>
        <div className={Styles.exploreinner}>
            <div className={Styles.explorecon}>
                <h1>Transform your future <br />Expert Learning</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolores nulla eos praesentium laborum laudantium?</p>
                <br />
                <Link to="/">Join for Free</Link>
            </div>
            <div className={Styles.exploreimg}>
                <img src="images/teach.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Explore