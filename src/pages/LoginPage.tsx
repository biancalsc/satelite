import { Grid, Box } from "@mui/material";
import LoginForm from "../components/Login/LoginForm";
import { darktheme } from "../themes/Dark";
import LogoCentered from "../components/Login/LogoCentered";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      xs={12}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: darktheme.palette.secondary.main,
      }}
    >
      {/* Coluna para o LoginForm */}
      <Grid item xs={6}>
        <LoginForm />
      </Grid>
      {/* Coluna para a imagem de fundo e o logo */}
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url("../assets/BackgroundSpace.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <LogoCentered />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
