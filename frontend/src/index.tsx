import ReactDOM from "react-dom/client";
import App from "./app/App";
import React from "react";
import { AuthProvider } from "./routes/context/auth/Authprovider";
import { BrowserRouter } from "react-router-dom";
import Header from "./routes/components/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from "./clientid"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId = {clientId}>
        <BrowserRouter>
          <Header />
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  </React.StrictMode>
);
