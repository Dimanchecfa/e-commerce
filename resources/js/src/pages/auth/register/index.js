import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { register } from '../../../service/account.service';



const Register = () => {
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

       const onSubmit = (e) => {
        e.preventDefault();
        //verification de correspondance des mots de passes en direct
        

        
        //verification des champs
        if (firstname !== '' && lastname !== '' && email !== '' && password !== '' && confirmPassword !== '') {

            if (password === confirmPassword) {
                const credentials = {
                    firstname,
                    lastname,
                    email,
                    password,
                    confirmPassword
                };
                axios.post('http://127.0.0.1:8000/api/register', credentials)
                    .then((res) => {
                        
                            let user = res.data?.user;
                            
                            let goTo = "/auth/login";
                            console.log(user);
    
                            
    
                            navigate(goTo);
                            setTimeout(() => {
                                Swal.fire({

                                    title: "Inscription reussi",
                                    showClass: {
                                        popup: "animate__animated animate__fadeInDown",
                                    },
                                    hideClass: {
                                        popup: "animate__animated animate__fadeOutUp",
                                    },
                                });
                            })

                        
                    })
                    .catch((err) => {
                        Swal.fire({
                            title: "Erreur",
                            text: "res.data.error",
                            icon: "error",
                            confirmButtonText: "Ok",
                            timer: 2000,
                        });
                    });
            }
            else {
                Swal.fire({
                    title: "Erreur",
                    text: "Les mots de passes ne correspondent pas",
                    icon: "error",
                    confirmButtonText: "Ok",
                    timer: 2000,
                });
            }
        }
        else {
            Swal.fire({
                title: "Erreur",
                text: "Veuillez remplir tous les champs",
                icon: "error",
                confirmButtonText: "Ok",
                timer: 2000,
            });
        }
    }


    return (
        <div className="min-h-full flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-md w-full space-y-8 border border-2 p-2">
                <div>
                    <img
                        className="mx-auto h-12 w-auto border border-2 rounded-full p-2"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    {/* <div className="bg-red-100 rounded-lg py-2 px-6 mt-2 text-base text-red-700 inline-flex items-center w-full" role="alert">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                        </svg>
                        Veuillez remplir tous les champs!
                    </div> */}
                    <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <NavLink to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in to your account
                        </NavLink>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                            <TextField
                                
                                label="firstName"
                                margin="normal"
                                name="firstname"
                                type="firstname"
                                variant="outlined"
                                size='small'
                                value={firstname} 
                                onChange={(e) => setFirstname(e.target.value)}  
                            />
    
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <TextField
                                
                                label="lastName"
                                margin="normal"
                                name="flastname"
                                type="lastname"
                                variant="outlined"
                                size='small' 
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}                              />      
                                                         
    
                            </div>
                        </div>
                        
                            <div className="col-span-6 sm:col-span-3">
                            <TextField
                                
                                label="Email Address"
                                margin="normal"
                                name="email"
                                type="email"
                                variant="outlined"
                                size='small' 
                                fullWidth    
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}                              />

                                                        
                            </div>

                            
                       
                        
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                
                                <TextField
                                
                                label="password"
                                margin="normal"
                                name="password"
                                type="password"
                                variant="outlined"
                                size='small'
                                value={password}   
                                onChange={(e) => setPassword(e.target.value)}                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <TextField
                                
                                label="Confirm Password"
                                margin="normal"
                                name="password"
                                type="password"
                                variant="outlined"
                                size='small' 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}                           
                                                            />
    
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                        <div className="flex items-center mt-2">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"

                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                I accept the terms of use
                            </label>
                        </div>

                        
                    </div>

                    </div>



                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                           
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Register;