import { useEffect, useState } from "react";
import Styles from "./AdminUsers.module.css";
import { Userlist } from "../../../Store/AuthSlice";
import { useDispatch } from "react-redux";
import Stylez from "../../../Pages/UserCourses.module.css"
const AdminUsers = () => {
  const [userlist, setuserlist] = useState([]);
  const dispatch = useDispatch();

  const getusers = async () => {
    const data = await dispatch(Userlist());
    setuserlist(data);
  };
  useEffect(() => {
    getusers();
  }, []);

  console.log(userlist);
  return (
    <section className={Styles.AdminUsers}>
      <p className="head">Admin / Users list</p>
      <div className={Styles.filtercon}>
        <div className={Styles.row1}>
          <p className={Stylez.prohead}>Your Courses</p>
          <div className={Styles.btns}>
            <input type="text" placeholder="Search course" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className={Styles.table}>
        <div style={{ fontWeight: 500 }} className={Styles.tablerow}>
          <div style={{ textAlign: "left" }}>User</div>
          <div>Class</div>
          <div>Contact</div>
          <div>City</div>
          <div>Action</div>
        </div>

        {userlist.data &&
          userlist?.data.map((user) => {
            return (
              <div key={user._id} className={Styles.tablerow}>
                <div
                  style={{ textAlign: "left" }}
                  className={Styles.userprofile}
                >
                  <img src="/images/user.png" alt="" />
                  <div>
                    <p>{user?.username}</p>
                    <p>{user?.email}</p>
                  </div>
                </div>
                <div>{user?.class || "N/A"}</div>
                <div>{user?.contact || "N/A"}</div>
                <div>{user?.location || "N/A"}</div>
                <div className={Styles.userbtn}>
                  <button>Delete</button>
                  <button>Block</button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AdminUsers;
