
import Profilex from '../assets/img/profile.png'
import Navbar from '../components/Navbar'
const Profile = () => {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center">
                <img src={Profilex} alt="profile" className="rounded-full h-40 w-40" />
            </div>
        </>
    )
}

export default Profile