import Guidance from '../Components/Guidance/Guidance';
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Stylez from './UserProfile.module.css'

const CareerGuidance = () => {

  return (
    <section className={Stylez.userPage}>
        <Navbar />
        <section className={Stylez.profilecon}>
            <Sidebar />
            <div className={Stylez.profileconinner}>
                <p className={Stylez.prohead}>Career Guidance AI</p>
                <Guidance />
            </div>
        </section>
        {/* <Footer /> */}
    </section>
  )
}

export default CareerGuidance