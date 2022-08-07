import { Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../../service/account.service";

const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const userInfo = getUser();
    const profileRef = useRef();
    let navigate = useNavigate();

    const Logout = () => {
        logout();
        navigate("/auth/login");
    }
        
    
    useEffect(() => {
        const userInfo = getUser();
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
        console.log(userInfo.first_name)
    }, [])

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
               
                <Tooltip title={userInfo.first_name }  arrow placement="top">
                <button
                    ref={profileRef}
                    className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
                </Tooltip>
                <div className="lg:hidden">
                    <span className="block">{userInfo.first_name}</span>
                    <span className="block text-sm text-gray-500">
                        {userInfo.email}
                    </span>
                </div>
            </div>
            <ul
                className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
                    state ? "" : "lg:hidden"
                }`}
            >
                <li>
                    <NavLink
                        to={"/profile-account"}
                        className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                    >
                        Profil
                    </NavLink>
                </li>
                <li>
                    <button onClick={Logout}  className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5">
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default ProfileDropDown;