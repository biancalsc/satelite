import { Link } from "react-router-dom";
import { SideMenu } from "./components/dashboard/SideMenu";
import ThemeSwitch from "./components/dashboard/ThemeSwitch";

export const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <ThemeSwitch></ThemeSwitch> 
            <br />
            <Link to="/Login">Login</Link>
        </div>
    );
}