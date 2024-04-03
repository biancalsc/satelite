import { Link } from "react-router-dom";
import user from "./img/user.png";
import logout from "./img/logoutico.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth/Authcontext";

function Header() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.reload();
  };

  return (
    <nav id="header-nav">
      {auth.user ? (
        <div>
          <button className="botao-header">
            <Link to={`/user/${auth.user?.id}`}>
              <img src={user} alt="Pagina de usuário" />
            </Link>
          </button>

          <button className="botao-header" onClick={handleLogout}>
            <img src={logout} alt="Logout Button" />
          </button>
        </div>
      ) : (
        <button className="botao-header">
          <Link to="/user">
            <img src={user} alt="Pagina de usuário" />
          </Link>
        </button>
      )}
    </nav>
  );
}

export default Header;
