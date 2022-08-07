import { Outlet } from "react-router-dom";
import  Nav  from "../components/header";


const AuthLayout = () => {
    return ( 
        <div>
            
               <Nav/>
            <Outlet />
            
        </div>
     );
}
 
export default AuthLayout;