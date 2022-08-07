import React, { useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
    getUser,
    login,
    saveToken,
    saveUser,
} from "../../../service/account.service";
import { loggedAdmin } from "../../../helpers/AuthGuardAdmin";

import Swal from "sweetalert2";
import Axios from "../../../service/caller.service";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {
            email,
            password,
        };

        //verifivation des champs
        if (email === "" || password === "") {
            return Swal.fire({
                title: "Erreur",
                text: "Veuillez remplir tous les champs",
                icon: "error",
                confirmButtonText: "Ok",
                timer: 2000,
            });
        }

        login(credentials)
            .then((res) => {
                if (res.data.success == true) {
                    let user = res.data?.user;
                    let success = res.data?.success;
                    let goTo = "/";

                    if (user?.role == "admin") {
                        goTo = "/admin/dashboard";
                    }
                    saveToken(res.data.token);
                    saveUser(user);

                    navigate(goTo);
                    setTimeout(() => {
                        Swal.fire({
                            title: "Connexion reussi",
                            showClass: {
                                popup: "animate__animated animate__fadeInDown",
                            },
                            hideClass: {
                                popup: "animate__animated animate__fadeOutUp",
                            },
                            timer: 2000,
                        });
                    }, 500);
                }
                else {
                    
                }
                
            })
            .catch((err) => {
                
            });
    };

    return (
        <div className="min-h-full flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-md w-full space-y-8 border border-4 p-4">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://www.floatui.com/logo.svg"
                        alt="Workflow"
                    />
                    {/* <div className="bg-red-100 rounded-lg py-2 px-6 mt-2 text-base text-red-700 inline-flex items-center w-full" role="alert">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                        </svg>
                        Email ou mot de passe invalide!
                    </div> */}
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{" "}
                        <NavLink
                            to="/register"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Sign Up
                        </NavLink>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="col-span- sm:col-span-4 ">
                            <TextField
                                fullWidth
                                label="Email Address"
                                margin="normal"
                                name="email"
                                type="email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-4 ">
                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                name="password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <p
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </p>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
