import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster position="top-center" />
        <div className="absolute bottom-3 right-3">
          <ModeToggle />
        </div>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landing />} />

            {/* Auth routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Protected routes */}
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
