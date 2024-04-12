import { Link } from "react-router-dom";
import { SideMenu } from "./components/dashboard/SideMenu";
import ThemeSwitch from "./components/dashboard/ThemeSwitch";
import { AppThemeProvider } from "../../assets/contexts";

export const EmployeeAdd = () => {
    return (
        <AppThemeProvider>
            <SideMenu>
                <ThemeSwitch></ThemeSwitch>
                <h1>Adicionando Usuários</h1>
                <Link to="/Login">Login</Link>
                <br />
            </SideMenu>
        </AppThemeProvider>
    );
}