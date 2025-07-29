import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Notes, NotFoundPage } from "@/pages";
import { ROUTES } from "@/app/routes";
import { ThemeContextProvider } from "@/features/theme/providers/ThemeProvider";
import { Toaster } from "sonner";
import "./styles/App.css";

export default function App() {
  return (
    <ThemeContextProvider>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.MAIN} element={<Notes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeContextProvider>
  );
}
