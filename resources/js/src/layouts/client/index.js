import React from 'react';
import Header from '../components/header';
import {Outlet} from 'react-router-dom';

const ClientLayout = () => {
    return (
       <div>
              <Header/>
                <Outlet />
        </div>
    );
};

export default ClientLayout;