import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isLogged, getToken, logout } from "./account.service";

const Axios = axios.create({
    baseURL: "http://localhost:8000/api",
});

//interceptors request
Axios.interceptors.request.use((config) => {
    const token = isLogged();
    if (token) {
        config.headers.Authorization = "Bearer " + getToken();
    }
    return config;
});

//interceptors response

Axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        const token = getToken();
        let navigate = useNavigate();
        if (response.status === 401) {
            if (token) {
                logout();
                navigate("/auth/login");
            }
            
            navigate("/auth/login");
            
        }
        return Promise.reject(error);
    }
);

export default Axios;
