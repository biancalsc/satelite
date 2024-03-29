import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1> 
            <br />
            <Link to="/Login">Login</Link>
        </div>
    );
}