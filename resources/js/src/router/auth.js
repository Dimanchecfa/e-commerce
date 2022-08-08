import Login from "../pages/auth/login/index";
import Register from "../pages/auth/register/index";
import ForgotPassword from "../pages/auth/forgot-password/index";
import NotFound from "../pages/other/Not-Found";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/auth/index";
import Home  from "../pages/auth/home/index";

const AuthRoute = () => {
    return (
        <Routes>
            <Route element={< AuthLayout/>} >
                <Route index element={<Login />} />
                <Route path="home" element={<Home/>} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
        </Routes>
    );
};

export default AuthRoute;
