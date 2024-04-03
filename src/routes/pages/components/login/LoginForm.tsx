import { Container, Box } from "@mui/material";
import LoginButton from "./LoginButton";
import { darktheme, typographytheme } from "../../../../assets";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";

const LoginForm = () => {
  return (
    <Container
      fixed
      style={{ backgroundColor: darktheme.palette.secondary.main }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh" // Define a altura do contêiner para ocupar toda a altura da tela
      >
        <h1
          style={{
            fontFamily: typographytheme.typography.fontFamily,
            color: "#ffffff",
            marginBottom: 60,
          }}
        >
          LOGIN
        </h1>
        <EmailInput />
        <PasswordInput />
        <LoginButton />
      </Box>
    </Container>
  );
};

export default LoginForm;
