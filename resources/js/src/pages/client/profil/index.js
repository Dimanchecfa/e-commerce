
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "./account-profil";
import AccountProfileDetails from "./account-profil-details";
import { NavLink, useNavigate } from "react-router-dom";


const Account = () => {
    const navigate = useNavigate();
    const Retour = () => {
        navigate(-1);
    }



    return (
    <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
            }}
        >
            <Container maxWidth="lg">
                <Typography sx={{ mb: 3 }} variant="h4">
                   
                        <button
                        onClick={Retour}
                            type="button"
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                           Retour
                        </button>
                    
                </Typography>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <AccountProfile />
                    </Grid>
                    <Grid item lg={8} md={6} xs={12}>
                        <AccountProfileDetails />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
)
}

export default Account;
