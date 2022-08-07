import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/other/Not-Found";
import Account from "./pages/client/profil/index";
import AdminRoute from "./router/admin";
import AuthRoute from "./router/auth";
import ClientRoute from "./router/client";
import AuthGuard from "./helpers/AuthGuard";
import AuthGuardAdmin from "./helpers/AuthGuardAdmin";
import AuthRoutesGuard from "./helpers/AuthRoutesGuard";
import AuthRouteLogin from "./helpers/AuthRoutesGuard";

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <AuthGuard>
                            <ClientRoute />
                        </AuthGuard>
                    }
                />
                <Route
                    path="/admin/*"
                    element={
                        <AuthGuard>
                            <AdminRoute />
                        </AuthGuard>
                    }
                />
                <Route
                    path="auth/*"
                    element={
                        
                            <AuthRoute />
                        
                    }
                />
            </Routes>
        </>
    );
};

export default App;
