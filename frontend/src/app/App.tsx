import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../routes/context";
import { Home, Login, Private, User } from "../routes/pages";

function App() {
  return (
    <Routes>
      <Route
        path="/user"
        element={
          <RequireAuth>
            <User />
          </RequireAuth>
        }
      />
      <Route
        path="/user/:id"
        element={
          <RequireAuth>
            <User />
          </RequireAuth>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/private"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
