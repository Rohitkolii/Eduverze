import { Link } from "react-router-dom"
import Styles from "./Navbar.module.css"

// icons 
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

import Login from "../Login/Login";
import Register from "../Register/Register";
import { useEffect } from "react";

const Navbar = () => {

    const [showlogin, setshowlogin] = useState(false);
    const [showregister, setshowregister] = useState(false);
    const [showMenu, setshowMenu] = useState("");
    
    const [width, setwidth] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setwidth(window.innerWidth);
  };

  // Set initial width
  handleResize();

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.alertnote}>
                <p>New live bootcamp starting july 12!</p>
                <Link to="/">Join Now</Link>
            </div>
            <div className={Styles.innernav}>
                <div className={Styles.logo}>
                    <h1><FaGraduationCap /><Link to="/">Eduverse</Link></h1>
                </div>
                <div className={(showMenu && width < 1000) ? Styles.mobnavlist : Styles.navlist}>
                    <ul>
                        <li><Link to='/courses'>All courses</Link></li>
                        <li><Link to='/careerguidance'>Ai Career guidance</Link></li>
                        <li><Link to='/'>Popular courses</Link></li>
                        <li><button onClick={()=> setshowlogin(true)} className={Styles.btn1}>Log in</button></li>
                        <li><button onClick={()=> setshowregister(true)} className={Styles.btn2}>Register</button></li>
                    </ul>
                </div>
                {/* <div className={Styles.navuserarea}>
                </div> */}
                <div className={Styles.hammenu}>
                    <IoIosMenu onClick={()=> setshowMenu(!showMenu)} />
                </div>
            </div>
        </nav>

        {
            showlogin ?
            <Login setshowregister={setshowregister} setshowlogin={setshowlogin}/>
            :
            ""
        }
        {
            showregister ?
            <Register setshowregister={setshowregister} setshowlogin={setshowlogin}/>
            :
            ""
        }
    </>
  )
}

export default Navbar