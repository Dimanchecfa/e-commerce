import { Route, Routes } from "react-router-dom";
import ClientLayout from "../layouts/auth/index"
import Home from "../pages/client/home/index";
import NotFound from "../pages/other/Not-Found";

import Account from "../pages/client/profil";

const ClientRoute = () => {
    return ( 
        <>
            <Routes>
                <Route element={<ClientLayout />}>
                    <Route index  path="/" element={<Home />} />
                    <Route index  element={<Home />} />
                    
                    <Route path="/profile-account" element={< Account/>} />
                    <Route path="*" element={<NotFound />} />
                    
                    
                    

                </Route>
            </Routes>
        
        </>
     );
}
 
export default ClientRoute;