import Styles from "./AdminUsers.module.css"
const AdminUsers = () => {
  return (
    <section className={Styles.AdminUsers}>
        <p className="head">Admin / Users list</p>
        <div className={Styles.table}>
            <div style={{fontWeight: 500}} className={Styles.tablerow}>
                <div style={{textAlign:'left'}}>User</div>
                <div>Class</div>
                <div>Contact</div>
                <div>City</div>
                <div>Action</div>
            </div>

            <div className={Styles.tablerow}>
                <div style={{textAlign:'left'}} className={Styles.userprofile}>
                    <img src="/images/user.png" alt="" />
                    <div>
                        <p>Rohit koli</p>
                        <p>rohitkolisd@gmail.com</p>
                    </div>
                </div>
                <div>12th</div>
                <div>9999888877</div>
                <div>Merut</div>
                <div className={Styles.userbtn}>
                    <button>Delete</button>
                    <button>Block</button>
                </div>
            </div>
            <div className={Styles.tablerow}>
                <div style={{textAlign:'left'}} className={Styles.userprofile}>
                    <img src="/images/user.png" alt="" />
                    <div>
                        <p>Rohit koli</p>
                        <p>rohitkolisd@gmail.com</p>
                    </div>
                </div>
                <div>12th</div>
                <div>9999888877</div>
                <div>Merut</div>
                <div className={Styles.userbtn}>
                    <button>Delete</button>
                    <button>Block</button>
                </div>
            </div>
            <div className={Styles.tablerow}>
                <div style={{textAlign:'left'}} className={Styles.userprofile}>
                    <img src="/images/user.png" alt="" />
                    <div>
                        <p>Rohit koli</p>
                        <p>rohitkolisd@gmail.com</p>
                    </div>
                </div>
                <div>12th</div>
                <div>9999888877</div>
                <div>Merut</div>
                <div className={Styles.userbtn}>
                    <button>Delete</button>
                    <button>Block</button>
                </div>
            </div>
            <div className={Styles.tablerow}>
                <div style={{textAlign:'left'}} className={Styles.userprofile}>
                    <img src="/images/user.png" alt="" />
                    <div>
                        <p>Rohit koli</p>
                        <p>rohitkolisd@gmail.com</p>
                    </div>
                </div>
                <div>12th</div>
                <div>9999888877</div>
                <div>Merut</div>
                <div className={Styles.userbtn}>
                    <button>Delete</button>
                    <button>Block</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default AdminUsers