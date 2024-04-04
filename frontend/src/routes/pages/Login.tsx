import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  function toHome() {
    return navigate("/")
  }

  return (
    <div className="centerbox">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const token: any = credentialResponse.credential;
          const decoded = jwtDecode<JwtPayload>(token);
          let email = "" + decoded.email;
          let alias = "" + decoded.name;
          let jtiToken = "" + decoded.jti;
          auth.signin(alias, email, jtiToken);
          toHome();
        }}
        onError={() => {
          console.log("login failed");
        }}
      />
      <button onClick={toHome}>Go Back to Home</button>
    </div>
  );
};
