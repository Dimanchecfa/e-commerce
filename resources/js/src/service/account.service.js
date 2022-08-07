import axios from "axios";
import Axios from "./caller.service";

let saveToken = (token) => {
    localStorage.setItem('token', token);
}

let logout = () => {
    localStorage.removeItem('token');
}
let getToken = () => {
    return localStorage.getItem('token');
}

let isLogged = () => {
   let token = localStorage.getItem('token') ;
    return !!token;
}
let saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

let getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}


let login = (credentials) => {
     return    Axios.post('/login', credentials)
           
    }
    

        

let register = (credentials) => {
    Axios.post('/register', credentials)
}
    


export { saveToken, logout, isLogged , getToken, login , register , saveUser, getUser } ;