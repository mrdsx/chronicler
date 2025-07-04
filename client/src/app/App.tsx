import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Notes } from "@/pages";
import { ROUTES } from "@/routes";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.MAIN} element={<Notes />} />
    </Routes>
  );
}
