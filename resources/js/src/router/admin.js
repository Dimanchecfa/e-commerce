import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/index"
import AdminLayout from "../layouts/admin/index"
import Account from "../pages/client/profil";
import NotFound from "../pages/other/Not-Found";

const AdminRoute = () => {
    return ( 
        <>
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/dashboard" element={< Dashboard />} />
                <Route path="/profile-account" element={< Account/>} />
                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    
    </>
     );
}
 
export default AdminRoute;