import { AuthMiddleware } from "@/components/common/AuthMiddleware";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <AuthMiddleware>
      <div className="w-full min-h-screen max-w-lg mx-auto relative">
        <Outlet />
      </div>
    </AuthMiddleware>
  );
};

export default MainLayout;
