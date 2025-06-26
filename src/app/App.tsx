import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Notes } from "@/components/pages";
import { ROUTES } from "@/routes";
import "./App.css";

// TODO: complete cheat sheet about deploying web app on GitHub Pages
export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route path={ROUTES.NOTES} element={<Notes />} />
    </Routes>
  );
}
