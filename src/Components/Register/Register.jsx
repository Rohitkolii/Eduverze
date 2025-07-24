import Styles from './Register.module.css'

import { FaGraduationCap } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { VscMention } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';


const Register = ({setshowregister}) => {

    const [visiblePassword, setvisiblePassword] = useState(false)
  return (
    <>
    <div onClick={()=> setshowregister(false)} className="layer"></div>
    <section className={Styles.logincon}>
        {/* <IoIosClose className={Styles.closebtn} /> */}
        <form className={Styles.loginconinner}>
            <div  className={Styles.formlogo} >
                <FaGraduationCap/>
                <p>Create an Account</p>
                <p>Please enter details to create account!</p>
            </div>
            <div className={Styles.inputcon}>
                <label htmlFor="registeruser">Username</label> <br />
                <input placeholder='Enter your Name' autoComplete="off" type="text" name="email" id="registeruser" />
                {/* <VscMention title='Enter your Name' /> */}
            </div>

            <div className={Styles.inputcon}>
                <label htmlFor="registeremail">Email</label> <br />
                <input placeholder='Enter your Email' autoComplete="off" type="text" name="email" id="registeremail" />
                <VscMention title='Enter your username' />
            </div>

            <div className={Styles.inputcon}>
                <label htmlFor="registerpassword">Password</label> <br />
                <input placeholder='Enter your Password' autoComplete="off" type={visiblePassword ? "text" : "password"} name="registerpassword" id="email" />
                {
                    visiblePassword ?
                    <FaRegEye onClick={()=> setvisiblePassword(false)} title='Hide Password!' />
                    :
                    <FaRegEyeSlash onClick={()=> setvisiblePassword(true)} title='Show Password!' />
                }
            </div>

            <div className={Styles.regmsg}>
                <p>Have an account <Link to="/">Login</Link></p>
            </div>

            <button>Login</button>
        </form>
    </section>
    </>
  )
}

export default Register