import { Button, styled} from "@mui/material";
import { darktheme, typographytheme } from "../../../../assets";

const CustomizeLoginbutton = styled(Button)({
    backgroundColor: darktheme.palette.secondary.main,
        border:"3px solid",
        borderColor: darktheme.palette.primary.main,
        borderRadius: 50,
        boxShadow:"none",
        alignSelf: "center",
        width: "200px",
        fontFamily: typographytheme.typography.fontFamily,
        fontWeight: 600,
        marginTop: 20,
        '&:hover': {
            backgroundColor: darktheme.palette.primary.main,
            border: 'none',
            boxShadow:"none"
          }
})
const LoginButton = () => {
  return (
    <CustomizeLoginbutton variant="contained">Login</CustomizeLoginbutton>
  );
};

export default LoginButton;