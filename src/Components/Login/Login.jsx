import Styles from './Login.module.css'

import { FaGraduationCap } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { VscMention } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import {useFormik} from "formik"
import {authSchema} from "../../Schemas/authSchema"

import { useDispatch } from "react-redux"
import { loginAuth } from '../../Store/AuthSlice';

const Login = ({setshowlogin, setshowregister}) => {

    const dispatch = useDispatch()

    let initialValues = {
        email : "",
        password: ""
    }

    const [visiblePassword, setvisiblePassword] = useState(false)

    const {values, touched, handleSubmit, handleChange, handleBlur, errors} = useFormik({
    initialValues:initialValues,
    validationSchema: authSchema,
    onSubmit : (value) => {
        // console.log(value);
        dispatch(loginAuth(value))
    },
    })
    
    // console.log(errors);
    

  return (
    <>
    <div onClick={()=> setshowlogin(false)} className="layer"></div>
    <section className={Styles.logincon}>
        {/* <IoIosClose className={Styles.closebtn} /> */}
        <form onSubmit={handleSubmit} className={Styles.loginconinner}>
            <div  className={Styles.formlogo} >
                <FaGraduationCap/>
                <p>Welcome Back</p>
                <p>Please enter your account details!</p>
            </div>
            <div className={Styles.inputcon}>
                <label htmlFor="email">Email</label> <br />
                <input placeholder='Enter your Email' autoComplete="off" type="text" name="email" id="email" onBlur={handleBlur} onChange={handleChange} value={values.name} />
                <VscMention title='Enter your username' />
            </div>

            {errors.email && touched.email ? <p className={Styles.errtext}>{errors.email}</p> : null}

            <div className={Styles.inputcon}>
                <label htmlFor="password">Password</label> <br />
                <input placeholder='Enter your Password' autoComplete="off" type={visiblePassword ? "text" : "password"} name="password" id='password' onBlur={handleBlur} onChange={handleChange} value={values.password} />
                {
                    visiblePassword ?
                    <FaRegEye onClick={()=> setvisiblePassword(false)} title='Hide Password!' />
                    :
                    <FaRegEyeSlash onClick={()=> setvisiblePassword(true)} title='Show Password!' />
                }
            </div>
            {errors.password && touched.password ? <p className={Styles.errtext}>{errors.password}</p> : null}
            <div className={Styles.regmsg}>
                <p>Don't have account <span onClick={()=> {setshowregister(true) , setshowlogin(false)}}>Register</span></p>
            </div>

            <button type='submit'>Login</button>
        </form>
    </section>
    </>
  )
}

export default Login