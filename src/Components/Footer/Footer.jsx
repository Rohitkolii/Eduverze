import { Link } from 'react-router-dom'
import Styles from './Footer.module.css'


//icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { FaGraduationCap } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={Styles.footer}>
        <div className={Styles.innerfooter}>
            <div className={Styles.footer1}>
                <div className={Styles.f1}>
                    <h1><FaGraduationCap />Eduverse</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere? Perferendis, eum.</p>
                    <div className={Styles.socialicon}>
                        <div><FaInstagram /></div>
                        <div><FaFacebookF /></div>
                        <div><FaLinkedinIn /></div>
                        <div><FaTwitter /></div>
                        <div><FaYoutube /></div>
                    </div>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Courses</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Career guidance</Link></li>
                        <li><Link to="/">Build Resume</Link></li>
                        </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/">Terms of Services</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Sitemap</Link></li>
                        </ul>
                </div>
            </div>

            <div className={Styles.footer2}>
                <p><FaRegCopyright /> Eduverse. All rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer