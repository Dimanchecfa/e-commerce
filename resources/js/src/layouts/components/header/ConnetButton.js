import React from 'react';
import { NavLink } from 'react-router-dom';

const ConnectButton = () => {
    return (
        <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                <li className="mt-4 lg:mt-0">
                    <NavLink
                        to={"/addAnnonce"}
                        className="py-3 px-4 text-center text-black bg-white hover:bg-indigo-700 hover:text-white rounded-md shadow block lg:inline"
                    >
                        My Annonces
                    </NavLink>
                </li>
                <li className="mt-8 lg:mt-0">
                    <NavLink
                        to={"/auth/register"}
                        className="py-3 px-4 text-center text-black bg-white hover:bg-indigo-700 hover:text-white rounded-md shadow block lg:inline"
                    >
                       All Annonces 
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default ConnectButton;