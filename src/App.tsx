import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";

const MainLayout = lazy(() => import("./layout/Main"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Navigate to="/d" replace />} />
        <Route path="/login" element={<Login />} />

        <Route path="/d" element={<ProtectedRoute />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route
            path="home"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
