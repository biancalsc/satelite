import { Container, Box } from "@mui/material";
import { darktheme } from "../../themes/Dark";
import { typographytheme } from "../../themes/Typography";
import LoginInputs from "./LoginInput";
import LoginButton from "./LoginButton";

const LoginForm = () =>{
    return(
        <Container fixed style={{ backgroundColor: darktheme.palette.secondary.main }}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100vh" // Define a altura do contêiner para ocupar toda a altura da tela
            >
                <h1 style={{
                    fontFamily: typographytheme.typography.fontFamily,
                    color: '#ffffff',
                    marginBottom: 60,
                }}>LOGIN</h1>
                <LoginInputs/>
                <LoginButton/>
            </Box>
        </Container>
    );
}

export default LoginForm;
