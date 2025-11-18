import Styles from "./Register.module.css";

import { FaGraduationCap } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { VscMention } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup"
import { RegisterUser } from "../../Store/AuthSlice";
import { useDispatch } from "react-redux";

const Register = ({ setshowregister, setshowlogin }) => {
  const [visiblePassword, setvisiblePassword] = useState(false);
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    username : Yup.string().required().min(3),
    email : Yup.string().email().required(),
    password : Yup.string().required().min(6).max(8),
  })

  const formik = useFormik({

    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema : validationSchema,

    onSubmit : (value, {resetForm}) => {
        // console.log(value)
        dispatch(RegisterUser(value))
        resetForm()
    }

  });

  console.log(formik.errors)

  return (
    <>
      <div onClick={() => setshowregister(false)} className="layer"></div>
      <section className={Styles.logincon}>
        {/* <IoIosClose className={Styles.closebtn} /> */}
        <form onSubmit={formik.handleSubmit} className={Styles.loginconinner}>
          <div className={Styles.formlogo}>
            <FaGraduationCap />
            <p>Create an Account</p>
            <p>Please enter details to create account!</p>
          </div>
          <div className={Styles.inputcon}>
            <label htmlFor="registeruser">Username</label> <br />
            <input
              placeholder="Enter your Name"
              autoComplete="off"
              type="text"
              name="username"
              id="registeruser"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {/* <VscMention title='Enter your Name' /> */}
          </div>
            {formik.errors.username && formik.touched.username ? <p className={Styles.errtext}>{formik.errors.username}</p> : null}

          <div className={Styles.inputcon}>
            <label htmlFor="registeremail">Email</label> <br />
            <input
              placeholder="Enter your Email"
              autoComplete="off"
              type="text"
              name="email"
              id="registeremail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <VscMention title="Enter your username" />
          </div>
          {formik.errors.email && formik.touched.email ? <p className={Styles.errtext}>{formik.errors.email}</p> : null}

          <div className={Styles.inputcon}>
            <label htmlFor="registerpassword">Password</label> <br />
            <input
              placeholder="Enter your Password"
              autoComplete="off"
              type={visiblePassword ? "text" : "password"}
              name="password"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {visiblePassword ? (
              <FaRegEye
                onClick={() => setvisiblePassword(false)}
                title="Hide Password!"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setvisiblePassword(true)}
                title="Show Password!"
              />
            )}
          </div>
          {formik.errors.password && formik.touched.password ? <p className={Styles.errtext}>{formik.errors.password}</p> : null}

          <div className={Styles.regmsg}>
            <p>
              Have an account{" "}
              <span
                onClick={() => {
                  setshowregister(false), setshowlogin(true);
                }}
              >
                Login
              </span>
            </p>
          </div>

          <button type="submit">Register</button>
        </form>
      </section>
    </>
  );
};

export default Register;
