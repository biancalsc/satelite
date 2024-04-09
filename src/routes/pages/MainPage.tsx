import { Link } from "react-router-dom";
import { SideMenu } from "./components/dashboard/SideMenu";
import ThemeSwitch from "./components/dashboard/ThemeSwitch";
import { AppThemeProvider } from "../../assets/contexts";

export const MainPage = () => {
    return (
        <AppThemeProvider>
            <h1>Main Page</h1>
            <ThemeSwitch></ThemeSwitch>
            <br />
            <Link to="/Login">Login</Link>
        </AppThemeProvider>
    );
}