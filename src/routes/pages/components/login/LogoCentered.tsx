import { Container } from "@mui/material";

const LogoCentered = () => {
  const logo = require("../../../../assets/img/Visiona Logo Completa.png") as string;
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center", // Alinha o texto centralmente
      }}>
      <img src={logo} alt="Logo Visiona" width={"500vh"} />
    </Container>
  );
}

export default LogoCentered;
